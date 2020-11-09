import { app } from "./server/server";

import * as dotenv from "dotenv";
dotenv.config();

const PORT: unknown = process.env.PORT || 5500;

app.listen(PORT, () =>
    console.log("Server ruuning on http://localhost:" + PORT)
);
