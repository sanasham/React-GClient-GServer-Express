import express from "express";
import app from "./app";

const PORT = process.env.PORT ?? 8765;
app.use(express.json());

// app.get("/", (req: Request, res: Response) => {
//   res.json({ success: "successfully loaded default route" });
// });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
