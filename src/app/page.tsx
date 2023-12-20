import TopicCreateForm from "@/components/topics/TopicCreateForm";
import TopicList from "@/components/topics/TopicList";

export default async function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl font-bold">Top Posts</h1>
      </div>
      <div className="flex flex-col gap-4">
        <TopicCreateForm />
        <TopicList />
      </div>
    </main>
  );
}
