const express = require('express')
const app = express()
const port = 5000
const mongoDB = require('./db');
mongoDB();
app.get('/',(req,res)=>{
    res.send("hello world");
})
app.use(express.json())
app.use((req, res, next)=>{
res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
res.header(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
})
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.listen(port,()=>{
    console.log(`app is listnin on port no. ${port}`);
})
