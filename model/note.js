const mongoose=require('mongoose');

mongoose.connect("mongodb://0.0.0.0:27017/NotesApp")
.then(()=> console.log("Database connected sucessfully"))
.catch(err => console.log("error setting up database"));

const notes= new mongoose.Schema(
    {
        title:{
            type:String,
            
        },
        note:{
            type:String,
            required:true
        }, 
    },
    {
        timestamps:true
    }
);

const Note=new mongoose.model('notes',notes);
module.exports=Note;