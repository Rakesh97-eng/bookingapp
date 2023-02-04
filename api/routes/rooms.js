import  express from "express";
import { createRoom, deleteeRoom, getRoom, RoomgetbyId, updateRoom } from "../controller/roomcontroller.js";
import { verifyadmin, verifyuser } from "../util.js/verify.js";

const router = express.Router();

router.post("/:id",verifyadmin,createRoom)

router.put("/:id",verifyadmin, updateRoom);

router.get("/:id",verifyadmin, RoomgetbyId);
router.get("/", getRoom);

router.delete("/:id",verifyadmin, deleteeRoom);


export default router;