import mongoose from "monggoose"

const productSchema = new mongoose.Schema(
    
    {
        description:{
            required:true,
            type:String,

        },
        name:{
            type:String,
            required:true,
        },
        productImage:{
            type:String,
            default: 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
        },
     

},{timestamps:true})

export const Product = mongoose.model("Product",productSchema)