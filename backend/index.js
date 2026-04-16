const express = require("express");
const app = express();

app.get("/api/status", (req, res) => {
  res.json({
    status: "Backend Running ✅",
    time: new Date()
  });
});

app.get("/health", (req, res) => res.send("OK"));

app.listen(5000);