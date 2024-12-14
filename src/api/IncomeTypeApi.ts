import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class IncomeTypeApi extends GenericApi {
  public getIncomeTypes(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM income_type";
    db_con.query(query, (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      console.log(query);
      res.status(200).json(results);
    });
  }
  public getIncomeTypeById(
    db_con: Connection,
    id: string,
    req: Request,
    res: Response
  ) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM income_type WHERE id=?";
    db_con.query(query, id, (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      console.log(query);
      res.status(200).json(results);
    });
  }
}
