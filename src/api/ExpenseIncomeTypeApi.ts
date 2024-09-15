import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";

export class ExpenseIncomeTypeApi extends GenericApi {
  public getExpenseIncomeTypes(db_con: Connection, req: any, res: any) {
    this.useDatabase(db_con);

    const query = "SELECT * FROM expense_income_type";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      res.json(results);
    });
  }
}
