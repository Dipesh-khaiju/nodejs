const path =require('path');
const express = require('express');
const app = express();

app.use(express.static('public'));

// app.get("/",(req,res)=>{
//     res.send("From Home Page");
// });

app.listen(3000);