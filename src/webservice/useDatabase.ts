import { Connection } from "mysql2/typings/mysql/lib/Connection";

export function useDatabaseWebservice(db_con: Connection, req: any, res: any) {
  let useQuery = `USE ${process.env.DATABASE_NAME}`;

  var usedDatabaseMessage = "";
  db_con.query(useQuery, (err: any) => {
    if (err) {
      if (err.code !== "ER_BAD_DB_ERROR") {
        throw err;
      } else {
        usedDatabaseMessage += `</br>Database ${process.env.DATABASE_NAME} doesn't exist!`;
        console.log(`Database ${process.env.DATABASE_NAME} doesn't exist!`);
      }
    } else {
      usedDatabaseMessage += `</br>Database ${process.env.DATABASE_NAME} used successfully!`;
      console.log(`Database ${process.env.DATABASE_NAME} used successfully!`);
    }

    return res.send(usedDatabaseMessage);
  });
}
