import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    
    price:{
        type: Number,
        required: true
    },
    
    image:{
        type: String,
        required: true
    }
},{
    //make sure anytime you create product- product has createAt, updatedAt in each doc
    timestamps:true
});

//creating product model
const Product = mongoose.model('Product',productSchema);

export default  Product;