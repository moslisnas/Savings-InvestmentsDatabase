import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mysql from "mysql2";
import path from "path";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { createDatabaseWebservice } from "./webservice/createDatabase";
import { useDatabaseWebservice } from "./webservice/useDatabase";
import { createTablesWebservice } from "./webservice/createTables";
import { ExpenseIncomeTypeApi } from "./api/ExpenseIncomeTypeApi";
import { InvestmentTypeApi } from "./api/InvestmentTypeApi";
import { TemplateApi } from "./api/TemplateApi";
import { TemplateIncomeApi } from "./api/TemplateIncomeApi";
import { IncomeTypeApi } from "./api/IncomeTypeApi";

//1. Load environment variables
dotenv.config();

//2. Create server
const app: Express = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

//TO DO --> Do this action only for development
//Open to all
app.use(cors());
//Not development environments
/*app.use(
  cors({
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);*/
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

//3. Create MySQL connection object
let db_con: Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});
db_con.connect((error: any) => {
  if (error) {
    console.log("Database Connection Failed !!!", error);
  } else {
    console.log("connected to Database");
  }
});

//4. Home route:
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//5. API routes:
//5.1 API route
app.get("/api", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "api/index.html"));
});
//5.2 Get data
app.get("/api/expense_income_type", (req: Request, res: Response) => {
  let expenseIncomeTypeApi:ExpenseIncomeTypeApi = new ExpenseIncomeTypeApi();
  expenseIncomeTypeApi.getExpenseIncomeTypes(db_con, req, res);
});
app.get("/api/investment_type", (req: Request, res: Response) => {
  let investmentTypeApi:InvestmentTypeApi = new InvestmentTypeApi();
  investmentTypeApi.getInvestmentTypes(db_con, req, res);
});
app.get("/api/template", (req: Request, res: Response) => {
  let templateApi:TemplateApi = new TemplateApi();
  templateApi.getTemplates(db_con, req, res);
});
app.get("/api/template_income", (req: Request, res: Response) => {
  let templateIncomeApi:TemplateIncomeApi = new TemplateIncomeApi();
  let idTemplate:string|null = (req.query.id_template) ? (typeof(req.query.id_template)=="string" ? req.query.id_template : null) : null;
  if(idTemplate){
    templateIncomeApi.getTemplateIncomesByIdTemplate(db_con, idTemplate, req, res);
  }
  else{
    templateIncomeApi.getTemplateIncomes(db_con, req, res);
  }
});
app.get("/api/income_type", (req: Request, res: Response) => {
  let incomeTypeApi = new IncomeTypeApi();
  incomeTypeApi.getIncomeTypes(db_con, req, res);
});
//5.3 Add data


//6. Webservice routes:
//6.1 Webservice route
app.get("/webservice", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "webservice/index.html"));
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
