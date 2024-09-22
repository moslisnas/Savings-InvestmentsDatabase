import { Connection } from "mysql2/typings/mysql/lib/Connection";

export function createDatabaseWebservice(
  db_con: Connection,
  req: any,
  res: any
) {
  let createQuery = `CREATE DATABASE ${process.env.DATABASE_NAME}`;

  var createdDatabaseMessage = "";
  db_con.query(createQuery, (err: any) => {
    if (err) {
      if (err.code !== "ER_DB_CREATE_EXISTS") {
        throw err;
      } else {
        createdDatabaseMessage += `</br>Database ${process.env.DATABASE_NAME} already exists!`;
        console.log(`Database ${process.env.DATABASE_NAME} already exists!`);
      }
    } else {
      createdDatabaseMessage += `</br>Database ${process.env.DATABASE_NAME} created successfully!`;
      console.log(
        `Database ${process.env.DATABASE_NAME} created successfully!`
      );
    }

    return res.send(createdDatabaseMessage);
  });
}
