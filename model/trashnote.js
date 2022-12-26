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
        userid:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'users'
       },
    },
    {
        timestamps:true
    }
);
const trash=new mongoose.model("trashnotes",trashnoteschema);
module.exports=trash;