"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/paths";
import { Topic } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export interface ICreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}
const topicValidationSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]/, { message: "Must be Lowercase letters or dashes without spaces!" }),
  description: z.string().min(10),
});
export async function createTopic(formState: ICreateTopicFormState, formData: FormData): Promise<ICreateTopicFormState> {
  const result = topicValidationSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  const session = await auth();
  if (!session || !session.user) {
    return { errors: { _form: ["You must sign in to do this!"] } };
  }
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: { slug: result.data.name, description: result.data.description },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { errors: { _form: [error.message] } };
    } else {
      return { errors: { _form: ["Something Went Wrong!"] } };
    }
  }
  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
  return { errors: {} };
}
