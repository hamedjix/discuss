import { db } from "@/db";

type Props = {
  params: { slug: string };
};

const TopicPage = async ({ params: { slug } }: Props) => {
  const topic = await db.topic.findFirst({ where: { slug } });
  return <div>{topic?.description}</div>;
};

export default TopicPage;
