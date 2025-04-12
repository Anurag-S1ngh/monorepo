import { WebSocket, WebSocketServer } from "ws";
import { prismaClient } from "@repo/database/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws: WebSocket) => {
  ws.on("message", (data) => {
    console.log(data.toString());
  });
  const findUser = await prismaClient.user.findFirst({
    where: {
      username: "dunamis1829",
    },
  });
  ws.send(JSON.stringify(findUser));
});
