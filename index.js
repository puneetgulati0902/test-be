const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/callback", (req, res) => {
  console.log("req ===", req);
  res.send("test");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
