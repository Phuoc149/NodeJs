const express = require("express");
const app = express();
const port = 3000;
//route
app.get("/", (req, res) => res.send("hello world"));
app.listen(port, () =>
  console.log(`example app listening http://localhost:${port}`)
);
