import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class InvestmentTypeApi extends GenericApi {
  public getInvestmentTypes(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM investment_type";
    db_con.query(query, (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      console.log(query);
      res.status(200).json(results);
    });
  }
}
