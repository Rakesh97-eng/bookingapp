import User from "../models/user.js";

export const usergetbyId = async(req,res,next)=>{
    try{
        const User = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const updateuser = async(req,res,next)=>{
    try{
        const updateuser = await User.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updateuser)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const deleteeuser = async(req,res,next)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)

        res.send(user)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const getuser = async(req,res,next)=>{
    try{
        const user = await User.find();

        res.send(user)
    }catch (err ){
        res.status(500).json(err);
    }
}

