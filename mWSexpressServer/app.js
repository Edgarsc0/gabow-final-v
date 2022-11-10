import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import cors from "cors";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

app.get("/",(req,res)=>{
    res.send("<h1>HOla</h1>");
})


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


io.on("connection", (socket) => {
    console.log("Socket conectado...");
    console.log(socket.id);
    console.log(socket.handshake);
    console.log(socket.handshake.address);
    io.emit("prueba",{data:"esto es una prueba"});
});

io.on("event",({data})=>{
    console.log(data);
})


server.listen(8000,()=>{
    console.log("server socket on port 8000");
});
