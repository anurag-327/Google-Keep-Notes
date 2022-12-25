const mongoose=require('mongoose');

const trashnoteschema=new mongoose.Schema(
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
const trash=new mongoose.model("trashnotes",trashnoteschema);
module.exports=trash;