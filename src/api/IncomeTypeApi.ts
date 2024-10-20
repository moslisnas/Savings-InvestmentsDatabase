import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class IncomeTypeApi extends GenericApi {
  public getIncomeTypes(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM income_type";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(query);
      res.json(results);
    });
  }
}
