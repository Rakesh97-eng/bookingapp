import express from "express";
import {
  countbyCity,
  countbyType,
  createhotel,
  deleteeHotel,
  getHotel,
  hotelgetbyId,
  updateHotel,
  getbyCity
} from "../controller/hotelcontroller.js";
import Hotels from "../models/hotels.js";

const router = express.Router();

router.post("/", createhotel);

router.put("/:id", updateHotel);

router.get("/find/:id", hotelgetbyId);
router.get("/", getHotel);

router.delete("/find/:id", deleteeHotel);
router.get("/getbycity",getbyCity)
router.get("/countbyCity",countbyCity)
router.get("/type/countbyType",countbyType)



export default router;
