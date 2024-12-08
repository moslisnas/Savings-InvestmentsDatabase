import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class ExpenseTypeApi extends GenericApi {
  public getExpenseTypes(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM expense_type";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(query);
      res.json(results);
    });
  }
  public getExpenseTypeById(
    db_con: Connection,
    id: string,
    req: Request,
    res: Response
  ) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM expense_type WHERE id=?";
    db_con.query(query, id, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(query);
      res.json(results);
    });
  }
}
