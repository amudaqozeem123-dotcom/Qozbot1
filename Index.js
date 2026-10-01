import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("QozBot is working! 🤖");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`QozBot running on port ${PORT}`);
});
