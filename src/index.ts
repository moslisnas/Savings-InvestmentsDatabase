import express, { Express, Request, Response } from "express";
import path from "path";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { connection } from "./database/connection";
import { createApiRoutes } from "./routes/apiRoute";
import { createWebserviceRoutes } from "./routes/webserviceRoute";

//1. Load environment variables
process.loadEnvFile();

//2. Create server
const app: Express = express();//TODO module.exports = app;
const cors = require("cors");
const port = process.env.PORT || 3000;

//TODO --> Do this action only for development
//Open to all
app.use(cors());
//Not development environments
/*app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);*/
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//3. Create MySQL connection object
let db_con: Connection = connection;

//4. Home route:
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//5. API routes:
createApiRoutes(db_con, app);

//6. Webservice routes:
createWebserviceRoutes(db_con, app);