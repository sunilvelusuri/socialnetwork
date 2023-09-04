const express =require('express');
const cookieParser =require('cookie-parser');
const app=express();
const port=7000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/moongose');
const session=require('express-session');               // Used for session cookie
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'))

// we have to declare the usage of layouts before the routers declaration because we use views in routers
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(session({
    name:'qwerty',
    secret:  'bigsecret',
    saveUninitialized: false,
    resave:false,
    cookie:{
        maxAge: (1000*60*100)
    }
}))

app.use(passport.initialize());
app.use(passport.session());

// use express routers
app.use('/',require('./routes'));

app.listen(port,(err)=>{
    try{
        console.log(`Server is running on port: ${port}`);
    }catch(err){
        console.log(`Error while running the server ${err}`);
    }
});



