import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req,res)=>{
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
try{
    const newUser =await new User({
         name:req.body.name,
         email:req.body.email,
         isAdmin:req.body.isAdmin,
         password:hash
       }).save().then(result=>{
        res.send (result)
    });

}catch(err){
console.log(err);
}
}

export const login = async(req,res)=>{
    console.log(req.body);
    try{
        let userdetails = await User.findOne({name:req.body.name})
    if(!userdetails){res.send("No user found")}
     else{
        console.log("paasswork",userdetails);
        let check = await bcrypt.compareSync(req.body.password, userdetails.password);
        if(!check){res.send("Incorrect password")}
        else{
            let token =  jwt.sign({id:userdetails._id,isAdmin:userdetails.isAdmin},process.env.JWTKEY);
            const {password,isAdmin,...otherdetails} = userdetails._doc;
            res.cookie(
                "access_token",token,{httpOnly:true}
            ).send(otherdetails)
        }
     }
   
    }catch(err){
        console.log(err);
    }
}