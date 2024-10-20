import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class TemplateIncomeApi extends GenericApi {
  public getTemplateIncomes(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM template_income";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(query);
      res.json(results);
    });
  }
  public getTemplateIncomesByIdTemplate(db_con: Connection, idTemplate:string, req: Request, res: Response){
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM template_income WHERE id_template=?";
    db_con.query(query, idTemplate, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(query);
      res.json(results);
    });
  }
}
