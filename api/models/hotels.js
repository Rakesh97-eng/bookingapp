import mongoose  from "mongoose";

const {Schema} = mongoose;

const HotelSchema = new mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    city:{type:String,required:true},
    address:{type:String,required:true},
    rooms:{type:[String]},
    distance:{type:String,required:true},
    cheapestprice:{type:Number}
})

let Hotels = mongoose.model('Hotels',HotelSchema)
export default Hotels;