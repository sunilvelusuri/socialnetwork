const express =require('express');
const app=express();
const port=7000;
const expressLayouts=require('express-ejs-layouts');
app.use(express.static('./assets'));
// we have to declare the usage of layouts before the routers declaration because we use views in routers
app.use(expressLayouts);
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// use express routers
app.use('/',require('./routes'));

// setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,(err)=>{
    try{
        console.log(`Server is running on port: ${port}`);
    }catch(err){
        console.log(`Error while running the server ${err}`);
    }
});