const express = require("express");
const app = express();
const axios = require("axios");

require("dotenv");

app.use(express.static(path.join(__dirname, "public/")));
app.listen(3300, () => console.log("Server is up on port 3300!"));

app.use("/search/users", async (req, res) => {
  const { q } = req.query;

  const text = encodeURI(q);

  const { data } = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );

  res.json(data);
});
