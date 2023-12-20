import TopicCreateForm from "@/components/topics/TopicCreateForm";
import { db } from "@/db";
import paths from "@/paths";
import Link from "next/link";

export default async function Home() {
  const topics = await db.topic.findMany();

  if (!topics.length) return <></>;
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold">Top Posts</h1>
      </div>
      <div className="flex flex-col gap-4">
        <TopicCreateForm />
        <div className="border p-4 rounded space-y-4">
          {topics.map((topic) => (
            <div key={topic.id}>
              <Link href={paths.topicShow(topic.slug)} className="font-bold">
                {topic.slug}
              </Link>
              <p className="text-gray-600 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
