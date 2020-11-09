import express, {Application, json, Request, Response} from "express";
import helmet from 'helmet';

export const app: Application = express();
app.use(helmet())
app.use(json())

import userRoute from '../api/routes/usersRoute';

app.use('/users', userRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("Soon you'll be watering some plants!")
});
