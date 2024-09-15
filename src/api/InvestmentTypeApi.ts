import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";

export class InvestmentTypeApi extends GenericApi {
  public getInvestmentTypes(db_con: Connection, req: any, res: any) {
    this.useDatabase(db_con);

    const query = "SELECT * FROM investment_type";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      res.json(results);
    });
  }
}
