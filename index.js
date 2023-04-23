import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("It is working!");
});

app.listen(PORT, () => console.log("server is working on port" + PORT));
