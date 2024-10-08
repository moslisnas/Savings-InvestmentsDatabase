import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { GenericApi } from "./GenericApi";
import { Request, Response } from "express";

export class TemplateApi extends GenericApi {
  public getTemplates(db_con: Connection, req: Request, res: Response) {
    this.useDatabase(db_con, req);

    const query = "SELECT * FROM template";
    db_con.query(query, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(query);
      res.json(results);
    });
  }
}
