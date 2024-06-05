const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Hello, EJS!" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
