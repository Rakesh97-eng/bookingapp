import  express from "express";
import { login, register } from "../controller/authcontroller.js";
import { verifytoken,verifyuser } from "../util.js/verify.js";

const router = express.Router();

router.post("/register",register)
router.post("/login",login)


export default router;