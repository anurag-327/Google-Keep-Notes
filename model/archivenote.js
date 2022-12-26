const mongoose=require('mongoose');

const archivenoteschema=new mongoose.Schema(
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
const archive=new mongoose.model("archivenotes",archivenoteschema);
module.exports=archive;