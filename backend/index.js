 //Library
const express =  require("express")
const http = require("http")
const socketio = require('socket.io')
const {addUser, removeUser, getUser, getUserInRoom} = require('./entity')


//Instance
const app = express()
const server = http.createServer(app)
const io = socketio(server,{ cors : {origin:"*"}})

//socket
io.on('connect',(socket)=>{
    console.log('user connected')

    socket.on("join",({username,room},callback)=>{
        
    const {user,error} = addUser({id:socket.id,username:username,room:room}) 
        if(error){
           callback(error) 
           return;
        }
        socket.join(user.rooms)
        console.log("test"+" "+JSON.stringify(user))
        socket.emit("message",{user:user.name,text:`welcome ${user.name}`})
        socket.broadcast.to(user.rooms).emit("message",{user:user.name,text:`${user.name} has joined`})
        
        io.to(user.rooms).emit("activeUsers",getUserInRoom(user.rooms))
    })

    socket.on("sendMsg",(message,callback)=>{
        let user = getUser(socket.id)
        if(user){
        io.to(user.rooms).emit("message",{user:user.name,text:message})
    } 
        callback()
        

    })
  
    socket.on('disconnect',()=>{       
        console.log("user disconnected")
        let user = removeUser(socket.id)
        console.log("return from user"+" "+JSON.stringify(user))
        if(user){
            
          io.to(user.rooms).emit("message",{user:user.name,text:`${user.name} has left`})
          io.to(user.rooms).emit("activeUsers",getUserInRoom(user.rooms))
        }
         


    })
})

//Run Server
server.listen(8000,()=>{
    console.log("server connected")
})

