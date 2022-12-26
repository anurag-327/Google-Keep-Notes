const mongoose=require('mongoose');

const userschema= new mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }, 
    },
    {
        timestamps:true
    }
);

const User=new mongoose.model('users',userschema);
module.exports=User;