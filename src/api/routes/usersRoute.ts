import { Router } from "express";
import { getAll, createUser } from "../controllers/usersControllers";
import hashPassword from "../middlewares/hashPassword";


const router = Router();

router.get("/", getAll);
router.post("/", hashPassword, createUser);


export default router;
