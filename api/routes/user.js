import  express from "express";
import { deleteeuser, getuser, updateuser, usergetbyId } from "../controller/usercontroller.js";

const router = express.Router();

router.get("/getbyid",usergetbyId)
router.put("/update",updateuser)
router.delete("/delete",deleteeuser)
router.get("/getall",getuser)




export default router;