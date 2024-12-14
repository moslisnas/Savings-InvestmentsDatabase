import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class TemplateExpenseApi extends GenericApi {
  public getTemplateExpenses(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM template_expense";
    db_con.query(query, (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      console.log(query);
      res.status(200).json(results);
    });
  }
  public getTemplateExpensesByIdTemplate(
    db_con: Connection,
    idTemplate: string,
    req: Request,
    res: Response
  ) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM template_expense WHERE id_template=?";
    db_con.query(query, idTemplate, (err, results) => {
      if (err) {
        return res.status(500).json(err);
      }
      console.log(query);
      res.status(200).json(results);
    });
  }
}
