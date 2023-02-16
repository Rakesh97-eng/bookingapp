import Hotels from "../models/hotels.js";
import roommodel from "../models/rooms.js";

export const hotelgetbyId = async(req,res,next)=>{
    try{
        const Hotel = await Hotels.findById(req.params.id)
        res.status(200).json(Hotel)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const getbyCity = async(req,res,next)=>{
    try{
        console.log("reqquery",req.query);
        const {min,max,...others} = req.query;
        const Hotel = await Hotels.find({...others,cheapestprice:{$gt:min||1,$lt:max || 999}}).limit(req.query.limit);
        res.status(200).json(Hotel)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const createhotel = async(req,res,next)=>{
    const details =await req.body;
    await new Hotels(details).save();
    res.send(req.body)
}

export const updateHotel = async(req,res,next)=>{
    try{
        const updateHotel = await Hotels.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updateHotel)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const deleteeHotel = async(req,res,next)=>{
    try{
        const Hotel = await Hotels.findByIdAndDelete(req.params.id)

        res.send(Hotel)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const getHotel = async(req,res,next)=>{
    try{
        const Hotel = await Hotels.find();

        res.send(Hotel)
    }catch (err ){
        res.status(500).json(err);
    }
}

export const countbyCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",");
    console.log(cities);
    try{
        const list =await Promise.all(cities.map(city=>{
            return Hotels.countDocuments({city:city})
        }));
        res.send(list);
    }
    catch(err){
        res.send(err)
    }
}

export const getRooms = async (req, res, next) => {
    let hotelId = req.params.id;
    console.log("hotels",hotelId);
    try {
        let list = await Hotels.findById(hotelId);
        console.log("kist",list);
       let rooms = await Promise.all( list.rooms.map(async(room) => {
            return roommodel.findById(room);
       }))
        res.send(rooms)
    }
    catch (err) {
        res.send(err)
    }
}

export const countbyType = async(req,res,next)=>{
    console.log("hi");
   try{ 
    let hotelcount = await Hotels.countDocuments({type:"Hotel"});
    let apartmentcount = await Hotels.countDocuments({type:"Apartment"});
    let resort = await Hotels.countDocuments({type:"Resort"});
    let villas = await Hotels.countDocuments({type:"Villas"});
    let cottage = await Hotels.countDocuments({type:"Cottage"});

    res.json([
        {type:"Hotel",count:hotelcount},
        {type:"Apartment",count:apartmentcount},
        {type:"Resort",count:resort},
        {type:"Villas",count:villas},
        {type:"Cottage",count:cottage},

    ])
}catch(err){
    // res.send(err)
}
}

