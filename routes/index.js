const { application } = require('express');
const express=require('express');
const router=express.Router();
const notes=require("../model/note");
const trashnotes=require("../model/trashnote");
const archivenotes=require("../model/archivenote");

router.get('/',async function(req,res)
{
    const allnotes=await notes.find({});
    // const trashnote=await trashnotes.find({});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('index',{notes:allnotes});
})
router.get('/home',async (req,res) =>
{
    const allnotes=await notes.find({});
    const trashnote=await trashnotes.find({});
    const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('statichome',{notes:allnotes,trashnotes:trashnote,archivenotes:archivenote});
})
router.get('/reminder',async function(req,res)
{
    
    // const trashnote=await trashnotes.find({});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('reminder');
})
router.get('/details',async function(req,res)
{
    
    // const trashnote=await trashnotes.find({});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('details');
})
router.get('/archive',async function(req,res)
{
    
    // const trashnote=await trashnotes.find({});
    const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('archive',{archivenotes:archivenote});
})
router.get('/trash',async function(req,res)
{
    
    const trashnote=await trashnotes.find({});
    // const archivenote=await archivenotes.find({});
    // console.log(trashnote);
    res.render('trash',{trashnotes:trashnote});
})
router.post('/addnote',(req,res)=>
{
    // console.log(req.body);
    const newnote= new notes({
        note:req.body.note,
        title:req.body.title
    })
    newnote.save();
    res.redirect('/');
})

router.get('/sucess',(req,res)=>
{
    res.json("<h1> sucess</h1>")
})
router.get('/deletenote/:id',async function(req,res)
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
                    title:docs.title});
                    trash.save();
            }
        }
     });
    // console.log(req.params);
    res.redirect('/');
})

router.get('/archivenote/:id',async function(req,res)
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
                title:docs.title});
            archive.save();
        }
     });
    // console.log(req.params);
    res.redirect('/');
})
router.get('/retrievearchive/:id',async function(req,res)
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
                title:docs.title});
            retrieve.save();
        }
     });
    res.redirect('/archive');
})
router.get('/retrievetrash/:id',async function(req,res)
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
                title:docs.title});
            retrieve.save();
        }
     });
    res.redirect('/trash');
})

router.get('/deletetrash/:id',async function(req,res)
{
    const id=req.params.id;
    trashnotes.findByIdAndDelete(id, function (err, docs) {
        if (err){
            console.log(err);
            
        }
     });
    // console.log(req.params);
    res.redirect('/');
})


router.get('/editnote/:id',async function(req,res)
{
    const note= await notes.findOne({_id:req.params.id});
    // console.log(note);
    res.render("edit",{note:note});
})
router.post('/editnote',async(req,res) =>
{
    // console.log(req.body);
    const data=await notes.findByIdAndUpdate(req.body.id,{note:req.body.note,title:req.body.title})
    res.redirect('/');
})

module.exports=router;