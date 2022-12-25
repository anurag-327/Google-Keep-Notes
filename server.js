const express=require('express');
const app=express();
const port=process.env.port|| 8000;
const path=require('path');
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./build/views'));
app.use(express.static(__dirname));
app.use('/',require("./routes/index"));
app.listen(port,()=>
{
    console.log('server running at port ',port);
})