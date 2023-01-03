require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json({ extended: true }));

app.use(
  cors({
    origin: process.env.URLCLIENT,
    credentials: true,
  })
);

require("./src/routes")(app);

app.listen(PORT, () => {
  console.log(`Example app 2 listening at http://localhost:${PORT}`);
});
