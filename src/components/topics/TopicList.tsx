import { db } from "@/db";
import paths from "@/paths";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

type Props = {};

const TopicList = async (props: Props) => {
  const topics = await db.topic.findMany();
  if (!topics.length) return <></>;
  return (
    <div className="border-l-2 border-blue-300 p-4 space-y-4">
      <h3 className="font-bold">Topics :</h3>
      {topics.map((topic) => (
        <div key={topic.id}>
          <Link href={paths.topicShow(topic.slug)} className="font-medium underline text-gray-600">
            <Chip className="bg-blue-200" variant="shadow">
              {topic.slug}
            </Chip>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopicList;
