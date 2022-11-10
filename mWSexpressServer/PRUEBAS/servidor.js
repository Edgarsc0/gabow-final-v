import { Server } from "socket.io";
const io =  new Server(3000);
io.on('connection' , (socket) =>{

    socket.emit('hola' , 'mundo');

    socket.on('quepedo' , (arg) =>{

        console.log(arg);

    });

});