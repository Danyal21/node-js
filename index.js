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

const users = [
    { id:1, username: 'user1'; password: 'password1'},
    { id:2, username: 'user2'; password: 'password2'},
];
student.use(new LocalStrategy(
    (username, password, done)=> {
        const user = users.find(u =>u.username === && u.password === password); 
if (user) {
    return done (null, user);
}else{
    return done (null, false, {message: 'Incorerrect username or password'});
}
    }
    ));

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



