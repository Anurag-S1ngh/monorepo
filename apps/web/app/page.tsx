import { prismaClient } from "@repo/database/client";

export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return <div>{user?.username}</div>;
}
