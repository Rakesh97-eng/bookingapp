import mongoose  from "mongoose";

const {schema } = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean}
   
})

let User = mongoose.model("User",userSchema);
export default User;