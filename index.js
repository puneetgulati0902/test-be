const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/callback", (req, res) => {
  console.log("req ===", req);
  res.send("test");
});

app.get("/success", (req, res) => {
    console.log("success ===", req.query);
    res.json({
        status: req?.query?.status,
        requestId: req?.query?.requestId,
        scope: req?.query?.scope
    });
  });

  app.get("/failure", (req, res) => {
    console.log("failure ===", req);
    res.send("failure");
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
