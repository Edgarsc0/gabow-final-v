import express from "express";
import morgan from "morgan";
import { Server as SocketServer} from "socket.io";
import http from "http";
import cors from "cors";

const app=express();
const server=http.createServer(app);
const io=new SocketServer(server,{
    cors:{
        origin:"http://localhost:3000"
    }
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection",(socket)=>{
    console.log("user connected");
    console.log(socket.id);
    socket.on("message",(info)=>{
        socket.broadcast.emit("message",info);
    })
});

server.listen(process.env.PORT||8000,()=>{
    console.log("Server on port 8000");
});