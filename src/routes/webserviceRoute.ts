import { Express, Request, Response } from "express";
import path from "path";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { createDatabaseWebservice } from "../webservice/createDatabase";
import { useDatabaseWebservice } from "../webservice/useDatabase";
import { createTablesWebservice } from "../webservice/createTables";

export const createWebserviceRoutes = (db_con: Connection, app: Express) => {
  //6.1 Webservice route
  app.get("/webservice", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../webservice/index.html"));
  });
  //6.2 Create the database
  app.get("/webservice/createDatabase", (req: Request, res: Response) => {
    createDatabaseWebservice(db_con, req, res);
  });
  //6.3 Use the database
  app.get(`/webservice/useDatabase`, (req: Request, res: Response) => {
    useDatabaseWebservice(db_con, req, res);
  });
  //6.4 Create the tables
  app.get("/webservice/createTables", (req: Request, res: Response) => {
    createTablesWebservice(db_con, req, res);
  });
};
