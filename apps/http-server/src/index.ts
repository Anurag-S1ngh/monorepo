import { prismaClient } from "@repo/database/client";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    msg: "hello world",
  });
  return;
});

app.post("/signup", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await prismaClient.user.create({
      data: {
        username,
        password,
      },
    });
    res.json({
      msg: "signup successful",
      id: user.id,
    });
  } catch (error) {
    console.log("error while sign up: ", error);
    res.json({
      msg: "sign up failed",
    });
  }
});

app.listen(3001);
