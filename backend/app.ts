import express, { Request, Response } from "express";
const app = express();

app.use(express.json());

app.get("/user", (req: Request, res: Response) => {
  res.json({ success: "successfully loaded default route from app.ts" });
});

export default app;
