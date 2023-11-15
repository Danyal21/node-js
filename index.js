import express  from "express";
import path from "path";
const student = require('student');
const LocalStrategy = require ('Student-Local').Strategy;
const jwt = require ('jsonwebtoken'); 
const expressJwt  = require ('express-jwt');


const app = express();
app.use(express.static('./'))
app.get("/getproducts",(req,res)=>{
    
const pathlocation = path.resolve();
res.render('index.html');


});

const quotes = [
    "Be a guide, Not a judge.",
    "Speading a good  word is a virtue.",
    "An ending is not the end.",
  ];

app.get('/randomQuote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.json({ randomQuote });
  });

  app.get('/Cute', (req, res) => {
    res.json({ message: 'tic, false!' });
  });


  app.get('/', (req, res) => {

  });


app.listen(5000, ()=>{
console.log("Server is working");
});


