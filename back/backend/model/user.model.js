import mongoose from "mongoose"

const userSchema  = new mongoose.Schema(
    {
        username:{
            type:String,
            unique:true,
            required:true,
            isActive:Boolean,
            lowercase:true,
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
        },
        password:{
            type:String,
            required:[true,"pls enter"]
        },
       


    }, {timestamps:true},

)

export const User = mongoose.model("User",userSchema)

