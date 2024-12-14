import mysql from "mysql2";
import { Connection } from "mysql2/typings/mysql/lib/Connection";

//1. Load environment variables
process.loadEnvFile();

//2. Create connection to database
export let connection: Connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});
connection.connect((error: any) => {
  if (error) {
    console.log("Database Connection Failed !!!", error);
  } else {
    console.log("connected to Database");
  }
});