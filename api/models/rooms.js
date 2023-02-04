import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    "title":{type:String,required:true},
    "desc":{type:String,required:true},
    "price":{type:String,required:true},
    "maxpeople":{type:String,required:true},
    "roomnumbers":[{"numbers":{type:String,required:true}}]
})

const roommodel =  mongoose.model("rooms",roomSchema);
export default roommodel;