import express  from "express";

const passport = require('passport');
const LocalStrategy = require ('passport-Local').Strategy;
const jwt = require ('jsonwebtoken'); 
const expressJwt  = require ('express-jwt');


const app = express();

const users = [
    { id:1, username: 'user1'; password: 'password1'},
    { id:2, username: 'user2'; password: 'password2'},
];
passport.use(new LocalStrategy(
    (username, password, done)=> {
        const user = users.find(u =>u.username === username && u.password === password); 
if (user) {
    return done (null, user);
}else{
    return done (null, false, {message: 'Incorerrect username or password'});
}
    }
    ));
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});
const jwtSecret = 'your-secret-key';
app.use(express.json());
app.use(passport.initialize());

app.post('/login',
         passport.authenticate('local', {session: false}),
         (req,res) =>{
             const token = jwt.sign({id: req.user.id, username: req.user.username}, jwtSecret);
             res.json({token});
         }
         );
app.get('/protected',
        expressJwt({secret: jwtSecret }),
        (req, res) => {
            res.json({message: 'You have to access to this protected resource.'});
        }
        );

            
 

app.listen(5000, ()=>{
console.log("Server is working");
});



