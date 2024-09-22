import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class ExpenseIncomeTypeApi extends GenericApi {
  public getExpenseIncomeTypes(
    db_con: Connection,
    req: Request,
    res: Response
  ) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM expense_income_type";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      res.json(results);
    });
  }
}
