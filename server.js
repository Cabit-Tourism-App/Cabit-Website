const express = require("express");
const app = express();
const path = require("path");

const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",  // Allow requests from this origin
        methods: ["GET", "POST"],  // Allowed methods
        allowedHeaders: ["my-custom-header"],
        credentials: true,  // Allow cookies or other credentials if needed
    }
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", function(socket) {
    socket.on("send-location", function(data) {
        io.emit("receive-location", { id: socket.id, ...data });
    });
    console.log("connected");
});

app.get("/", (req, res, next) => {
    res.render("index");
});

server.listen(3001, () => {
    console.log("Server is running on port 3001");
});
