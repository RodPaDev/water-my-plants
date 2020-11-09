import express, {Application, Request, Response} from "express";
import helmet from 'helmet';

import * as dotenv from 'dotenv';
dotenv.config();

const PORT: unknown = process.env.PORT || 5000;

const app: Application = express();

app.use(helmet)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello");
});

app.listen(PORT, () => console.log("Server listening on " + PORT));
