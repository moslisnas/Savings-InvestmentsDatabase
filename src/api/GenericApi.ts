import { Connection } from "mysql2/typings/mysql/lib/Connection";

export class GenericApi {
  public useDatabase(db_con: Connection) {
    let useQuery = `USE ${process.env.DATABASE_NAME}`;
    db_con.query(useQuery, (error: any) => {
      if (error) {
        throw error;
      }
      console.log(`Using Database ${process.env.DATABASE_NAME}`);
    });
  }
}
