import express = require("express");
import { IUsers, IUserInfo } from "../src/api/interfaces/interfaces";

declare global {
    namespace Express {
        interface Request {
            user?: IUsers;
            userInfo?: IUserInfo;
        }
    }
}