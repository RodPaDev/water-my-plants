import { Request, Response } from "express";
import { getUsers, postUser } from "../models/usersModels";

export async function getAll(req: Request, res: Response) {
    try {
        const result = await getUsers();
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
}

export async function createUser(req: Request, res: Response) {
    try {
        const { email, password } = req.user;
        const result = await postUser({ email, password });
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
}

export async function createUserInfo(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const result = await postUser({ email, password });
        res.json(result);
    } catch (error) {
        console.log(error.message);
    }
}

