const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Listen for new connections
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        console.log("A new user message",message);
        io.emit("message",message);
    }) // Log the new user's socket ID
});

// Serve static files from the public directory
app.use(express.static(path.resolve(__dirname, "./public")));

// Serve the jk.html file when the root URL is accessed
app.get('/', (req, res) => {
    return res.sendFile(path.resolve(__dirname, "./public/jk.html"));
});

// Start the server
server.listen(2000, () => console.log(`Server connected at port 2000`));