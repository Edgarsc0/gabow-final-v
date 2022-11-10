import { io } from "socket.io-client";
const socket = io("ws://lochalhost:3000");

socket.on('hola' , (arg) =>{

    console.log(arg)

});

socket.emit('quepedo' , 'quepedoraza');