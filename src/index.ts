import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";

//1. Load environment variables
dotenv.config();

//2. Create server
const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("My Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//3. Create MySQL connection object
let db_con = mysql.createConnection({
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

//4. Create routes:
//4.1 Create and use the database
app.get("/createDatabase", (req, res) => {
  let createQuery = `CREATE DATABASE ${process.env.DATABASE_NAME}`;

  // use the query to create a Database.
  db_con.query(createQuery, (err: any) => {
    if (err) {
      throw err;
    }

    console.log("Database Created Successfully !");

    let useQuery = `USE ${process.env.DATABASE_NAME}`;
    db_con.query(useQuery, (error: any) => {
      if (error) {
        throw error;
      }
      console.log("Using Database");

      return res.send(`Created and Using ${process.env.DATABASE_NAME} Database`);
    });
  });
});