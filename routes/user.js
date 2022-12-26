
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
        res.render('index',{notes:allnotes});
    }
    else
    {
        res.render('error',{message:"Login to see details"});
    }
})

router.get('/reminder',async function(req,res)
{
    if(req.cookies.user_id)
    {
    // const trashnote=await trashnotes.find({});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('reminder');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})
router.get('/details',async function(req,res)
{
    if(req.cookies.user_id)
    {
    // const trashnote=await trashnotes.find({});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('details');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})
router.get('/archive',async function(req,res)
{
    if(req.cookies.user_id)
    {
    // const trashnote=await trashnotes.find({});
    const archivenote=await archivenotes.find({userid:req.cookies.user_id});
    // console.log(trashnote);
    res.render('archive',{archivenotes:archivenote});
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})
router.get('/trash',async function(req,res)
{
    if(req.cookies.user_id)
    {
    const trashnote=await trashnotes.find({userid:req.cookies.user_id});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('trash',{trashnotes:trashnote});
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})
router.post('/addnote',(req,res)=>
{
    if(req.cookies.user_id)
    {
    // console.log(req.body);
    const newnote= new notes({
        note:req.body.note,
        title:req.body.title,
        userid:req.cookies.user_id
    })
    newnote.save();
    res.redirect('/user');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})

router.get('/sucess',(req,res)=>
{
    res.json("<h1> sucess</h1>")
})
router.get('/deletenote/:id',async function(req,res)
{
    if(req.cookies.user_id)
    {
    const id=req.params.id;
    notes.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err);
            
        }
        else
        {
            if(docs)
            {

                // console.log( docs);
                const trash=new trashnotes({
                    note:docs.note,
                    title:docs.title,
                    userid:req.cookies.user_id});
                    trash.save();
            }
        }
     });
    // console.log(req.params);
    res.redirect('/user');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})

router.get('/archivenote/:id',async function(req,res)
{
    if(req.cookies.user_id)
    {
    const id=req.params.id;
    notes.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err);
            
        }
        else
        {
            // console.log( docs);
            const archive=new archivenotes({
                note:docs.note,
                title:docs.title,
                userid:req.cookies.user_id});
            archive.save();
        }
     });
    // console.log(req.params);
    res.redirect('/user');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})
router.get('/retrievearchive/:id',async function(req,res)
{
    if(req.cookies.user_id)
    {
    const id=req.params.id;
    archivenotes.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err);
            
        }
        else
        {
            // console.log( docs);
            const retrieve=new notes({
                note:docs.note,
                title:docs.title,
                userid:req.cookies.user_id});
            retrieve.save();
        }
     });
    res.redirect('/user/archive');
    }
})
router.get('/retrievetrash/:id',async function(req,res)
{
    // console.log("retrieve trash");
    if(req.cookies.user_id)
    {
    const id=req.params.id;
    trashnotes.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err);
            
        }
        else
        {
            // console.log( docs);
            const retrieve=new notes({
                note:docs.note,
                title:docs.title,
                userid:req.cookies.user_id});
            retrieve.save();
        }
     });
    res.redirect('/user/trash');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})

router.get('/deletetrash/:id',async function(req,res)
{
    if(req.cookies.user_id)
    {
    const id=req.params.id;
    trashnotes.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err);
            
        }
     });
    // console.log(req.params);
    res.redirect('/user/trash');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})


router.get('/editnote/:id',async function(req,res)
{
    if(req.cookies.user_id)
    {
    const note= await notes.findOne({_id:req.params.id});
    // console.log(note);
    res.render("edit",{note:note});
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})
router.post('/editnote',async(req,res) =>
{
    if(req.cookies.user_id)
    {
    // console.log(req.body);
    const data=await notes.findByIdAndUpdate(req.body.id,{note:req.body.note,title:req.body.title})
    res.redirect('/');
    }
     else
    {
        res.render('error',{message:"Login to see details"});
    }
})





module.exports=router;