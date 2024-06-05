const socket = io("http://localhost:3000");

console.log(socket);

socket.on("welcome", (data) => {
  console.log(data);
});

socket.emit("messageFromClient", { data: "I am your client" });
