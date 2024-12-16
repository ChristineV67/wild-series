import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Wild Series !");
});

const port = 3310;

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
