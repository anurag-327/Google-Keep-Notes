const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const port=process.env.port|| 5000;
const path=require('path');
app.use(express.urlencoded());
app.use(cookieParser());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./build/views'));
app.use(express.static(__dirname));
app.use('/',require("./routes/index"));
app.use( (req,res,next)=>{
    res.render('error',{message:"Page doesnot exist"});
})
app.listen(port,()=>
{
    console.log('server running at port ',port);
})