const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to Andra's backend application");
});// forward slash means the context root of the application, or the url without anything after it

app.get("/lorenzo", (req, res)=> {res.send("Hello Lorenzo!");});

app.get('/micah', (req,res) => {res.send("Hello Micah!");});

app.get('/andra', (req,res) => {res.send("Hello Andra!");});

app.get('/Moses', (req,res) => {res.send("Hello Moses!");});

app.get('/levi', (req,res) => {res.send("Hello Levi!");});

app.listen(3000, ()=> {
    console.log("Listening");
})