import express from "express";
import mongoose from "mongoose";
import Comment from "../models/Comment.js"
import cors from "cors";

const router=express.Router();


router.get("/comments/:blogTitle",async(req,res) => {
    try {
    const comments = await Comment.find({blogTitle:req.params.blogTitle});
    res.json(comments);


    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
})

router.post("/comments/:blogTitle",async(req,res) => {
    const {author,email,text}=req.body;

    if(!author || !email || !text) {
        return res.status(400).json({error:"All fields are required"})
    }

    try {
        const newComment=new Comment({blogTitle:req.params.blogTitle,author,email,text});
        const savedComment=await newComment.save();
        res.status(201).json(savedComment)
    } catch (error) {
        console.error("Error saving comment: ",error)
        res.status(500).json({message:error.message})
    }
})

router.delete("/comments/:blogTitle/:commentId",async(req, res) => {
    const {commentId} = req.params;

    try {
        const deletedComment = await Comment.findByIdAndDelete(commentId);
        if(deletedComment){
            res.status(200).json({success:true,message:"Comment deleted successfully"});
        }else{
            res.status(404).json({success:false,message:"Comment not found"})
        }
        
    } catch (error) {
        console.error("error deleting comment: ",error)
        res.status(500).json({success:false,message:"Internal server error"})
    }
})

export default router;