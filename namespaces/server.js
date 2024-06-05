const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const socketio = require("socket.io");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const expressServer = app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const io = socketio(expressServer);

app.get("/", (req, res) => {
  res.render("index");
});

io.on("connection", (socket) => {
  console.log(socket.id + " has connected");
  socket.emit("welcome", { data: "Welcome to the server" });
  socket.on("messageFromClient", (data) => {
    console.log(data);
  });
});
