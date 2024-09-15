import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import path from "path";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { createDatabaseWebservice } from "./web_service/createDatabase";
import { useDatabaseWebservice } from "./web_service/useDatabase";
import { createTablesWebservice } from "./web_service/createTables";

//1. Load environment variables
dotenv.config();

//2. Create server
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//3. Create MySQL connection object
let db_con: Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});
db_con.connect((error: any) => {
  if (error) {
    console.log("Database Connection Failed !!!", error);
  } else {
    console.log("connected to Database");
  }
});

//4. Webservice routes:
//4.1 Create the database
//4.2 Use the database
//4.3 Create the tables
app.get("/createDatabase", (req, res) => {
  createDatabaseWebservice(db_con, req, res);
});
app.get(`/useDatabase`, (req, res) => {
  useDatabaseWebservice(db_con, req, res);
});
app.get("/createTables", (req, res) => {
  createTablesWebservice(db_con, req, res);
});