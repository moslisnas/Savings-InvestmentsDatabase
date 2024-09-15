import { Connection } from "mysql2/typings/mysql/lib/Connection";

export function createDatabaseWebservice(db_con: Connection, req:any, res: any) {
  let createQuery = `CREATE DATABASE ${process.env.DATABASE_NAME}`;

  db_con.query(createQuery, (err: any) => {
    if (err) {
      throw err;
    }
    console.log("Database Created Successfully !");

    return res.send(`Created ${process.env.DATABASE_NAME} Database`);
  });
}
