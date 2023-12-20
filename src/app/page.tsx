import TopicCreateForm from "@/components/topics/TopicCreateForm";
import { db } from "@/db";

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
              <h4 className="font-bold">{topic.slug}</h4>
              <p className="text-gray-600 text-sm">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
