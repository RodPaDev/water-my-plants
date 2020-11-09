import bcrypt, { hash } from "bcrypt";
import {IUsers} from '../interfaces/interfaces'
import { Request, Response, NextFunction } from "express";

async function hashPassword(req: Request, res: Response, next: NextFunction) {
    try {
        if (req.body && req.body.password) {
            const {email, password} = req.body;
            req.user = {email, password: await bcrypt.hash(password, 10)}
        }
        next();
    } catch (error) {
        res.status(500).json(error)
    }
}

export default hashPassword;