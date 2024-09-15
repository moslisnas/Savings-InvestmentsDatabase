import { Connection } from "mysql2/typings/mysql/lib/Connection";
import path from "path";

export function useDatabaseWebservice(db_con: Connection, req:any, res: any) {
  let useQuery = `USE ${process.env.DATABASE_NAME}`;

  db_con.query(useQuery, (error: any) => {
    if (error) {
      return res.sendFile(path.join(__dirname, "error.html"));
    }
    console.log("Using Database");

    return res.send(`Using ${process.env.DATABASE_NAME} Database`);
  });
}
