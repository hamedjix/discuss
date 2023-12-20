"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export interface ICreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
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
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const result = topicValidationSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  await db.topic.create({
    data: { slug: name, description },
  });
  revalidatePath("/");
  return { errors: {} };
}
