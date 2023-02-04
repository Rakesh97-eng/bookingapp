import Hotels from "../models/hotels.js";
import roommodel from "../models/rooms.js";

export const createRoom = async (req,res,next)=>{
    let hotelId = req.params.id;
    try{
        let userrooms = await new roommodel(req.body).save();
        try{
           await Hotels.findByIdAndUpdate(hotelId,{$push:{rooms:userrooms._id}})
        }catch(err){
            console.log(err);
        }
        res.send(userrooms);
    }catch(err){
        console.log(err);
    }
}


export const RoomgetbyId = async(req,res,next)=>{
    try{
        const rooms = await roommodel.findById(req.params.id)
        res.status(200).json(rooms)
    }catch (err ){
        res.status(500).json(err);
    }
}
    // res.send(req.body)
export const updateRoom = async(req,res,next)=>{
    try{
        const updateRoom = await roommodel.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updateRoom)
    }catch (err ){
        res.status(500).json(err);
    }
}
export const deleteeRoom = async(req,res,next)=>{
    try{
        const room = await roommodel.findByIdAndDelete(req.params.id)

        res.send(room)
    }catch (err ){
        res.status(500).json(err);
    }
}
export const getRoom = async(req,res,next)=>{
    try{
        const room = await roommodel.find();

        res.send(room)
    }catch (err ){
        res.status(500).json(err);
    }
}