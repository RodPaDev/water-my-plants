import express, {Application, Request, Response} from "express";
import helmet from 'helmet';

export const app: Application = express();

app.use(helmet())

app.get("/", (req: Request, res: Response) => {
    res.send("Soon you'll be watering some plants!")
});
