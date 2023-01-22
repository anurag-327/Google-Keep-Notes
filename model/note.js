const mongoose=require('mongoose');

// mongoose.connect("mongodb://0.0.0.0:27017/NotesApp")
// .then(()=> console.log("Database connected sucessfully"))
// .catch(err => console.log("error setting up database"));

mongoose.connect("mongodb+srv://anurag-327:anurag1234@cluster0.n5lylsh.mongodb.net/NotesApp?retryWrites=true&w=majority")
.then(()=> console.log("Database connected sucessfully"))
.catch(err => console.log(err.message))

const notes= new mongoose.Schema(
    {
        title:{
            type:String,
            
        },
        note:{
            type:String,
            required:true
        }, 
        userid:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'users'
       },
    },
    {
        timestamps:true
    }
);

const Note=new mongoose.model('notes',notes);
module.exports=Note;