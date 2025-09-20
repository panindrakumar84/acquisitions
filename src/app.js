import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("hello word");
});

export default app;
