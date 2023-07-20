const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to my HomePage</h1>");
    res.write("<h1>Welcome to my HomePage again</h1>");
    res.send();

})
app.get("/about", (req, res) => {
    res.send("Welcome to my AboutPage");
})
app.get("/contact", (req, res) => {
    res.send([
        {
            id: 3,
            name: "ISha",
            addresss: "kamalbinayak"
        },
        {
            id: 3,
            name: "ISha",
            addresss: "kamalbinayak"
        },
            {
            id: 3,
            name: "ISha",
            addresss: "kamalbinayak"
        }
    ]);
})

//  app.post("/",(req,res)=>{
//     res.send("Welcome to my jptPage");  
//  })


app.listen(port, () => {
    console.log(`listening on port ${port}`); //use `` not "" here
});