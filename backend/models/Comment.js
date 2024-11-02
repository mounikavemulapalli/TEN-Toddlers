import mongoose  from "mongoose";
const Schema=mongoose.Schema;

const commentSchema=new Schema({
    blogTitle:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

const commentModel=mongoose.model("Comment",commentSchema);

export default commentModel;