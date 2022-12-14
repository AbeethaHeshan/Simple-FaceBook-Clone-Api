const express = require('express');
const  mongoose = require('mongoose');
const app = express()


const port = 4000

const user = require('./routers/user');
const post = require('./routers/post')
const login = require('./routers/login')

app.use('/user',user)
app.use('/post',post)
app.use('/login',login)

const url = 'mongodb://localhost/FaceBookDataBase'

mongoose.connect(url,{useNewUrlParser: true})
const connection = mongoose.connection;

connection.on("open",()=> {
     console.log("Mongo db created");
})

app.listen(port,()=>{
     console.log("app listen on port")
})