const express =require("express");
const app =express();
const port = 8000;

app.get("/",(req,res)=>{
   res.send("  From the HOme page ");
});
app.get("/school",(req,res)=>{
    res.send("From School page ");
 });
 app.get("/contact",(req,res)=>{
    res.send("From Contact Page ");
 });
app.listen(port,()=>{
    console.log(`listening on port ${port}`); //use `` not "" here
});