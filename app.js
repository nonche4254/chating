const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const http = require("http").Server(app);
const io = require("socket.io")(http);

app.set("views", `${__dirname}/public`);
app.set("view engin", "html");
app.engine("html", require("ejs").renderFile);
app.use(express.static("public", { extensions: ["html"] }));

app.get("/", (req, res) => {
  console.log(__dirname);
  res.render("index");
  res.send("hello world");
});

app.get("/api/users", (req, res) => {
  res.render("index");
  res.send("hello world");
});

io.on("connection", (socket) => {
  console.log("User connected...");
  socket.on("chatting", (data) => {
    io.sockets.emit("chatting", data);
  });
});

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`);
// });

http.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
