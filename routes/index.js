const { application } = require('express');
const express=require('express');
const router=express.Router();
const users=require("../model/users");
const notes=require("../model/note");
const trashnotes=require("../model/trashnote");
const archivenotes=require("../model/archivenote");


router.get('/',async (req,res) =>
{
    if(req.cookies.user_id)
    {
        // console.log(req.cookies);
        const allnotes=await notes.find({userid:req.cookies.user_id});
        res.redirect('/user');
    }
    else
    {
        res.render('login');
    }
})
router.get('/home',async (req,res) =>
{
    if(req.cookies.user_id)
    {
        // console.log(req.cookies);
        const allnotes=await notes.find({userid:req.cookies.user_id});
        res.redirect('/user');
    }
    else
    {
        res.render('login');
    }
})
router.post('/loginacc',async (req,res) =>
{
    // console.log(req.body);
    users.findOne({email:req.body.email,password:req.body.password},function(err,user)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            if(user)
            {
            // console.log(user);
                res.cookie('user_id',user._id);
                // console.log(req.cookies.user)
                res.redirect('/user');
            }
            else
            {
                res.render('error',{message:"Wrong credentials"});
            }
        }
    })
})
router.post('/signupacc',function(req,res)
{
    // console.log(req.body);
    if(req.body.password != req.body.confirmpassword)
    {
        console.log(req.body.password,req.body.confirmpassword);
        console.log("fail");
        return res.render('error',{message:"Wrong password"});
    }
    else
    {
        users.findOne({email:req.body.email},async function(err,user)
        {
            if(err)
            console.log(err.message);
            if(!user)
            {
                const createDocument = async () =>
                {
                  try{
                        const newUser=new users({name:req.body.name
                        ,email:req.body.email,
                        password:req.body.password})
                        const result= await newUser.save();
                        console.log(result);
                      }catch(err)
                     {
                         console.log(err.message);
                     }
                }
                createDocument();
                return res.redirect('/');
            }
           else
            {
                console.log("fail");
                // return res.render('signup');
                return res.render('error',{message:"Account already exixts"});

            }
        })
    }
    
})
router.get('/signout',function(req,res)
{
    res.clearCookie("user_id");
    return res.redirect("/");
})

router.get('/error',async(req,res) =>
{
    res.render('error');
})
router.use('/user',require('./user'));


router.get('/jshome',async (req,res) =>
{
    const allnotes=await notes.find({userid:req.cookies.user_id});
    const trashnote=await trashnotes.find({userid:req.cookies.user_id});
    const archivenote=await archivenotes.find({userid:req.cookies.user_id});
    // console.log(trashnote);
    res.render('statichome',{notes:allnotes,trashnotes:trashnote,archivenotes:archivenote});
})


module.exports=router;