import { Express, Request, Response } from "express";
import path from "path";
import { Connection } from "mysql2/typings/mysql/lib/Connection";
import { ExpenseIncomeTypeApi } from "../api/ExpenseIncomeTypeApi";
import { InvestmentTypeApi } from "../api/InvestmentTypeApi";
import { TemplateApi } from "../api/TemplateApi";
import { TemplateIncomeApi } from "../api/TemplateIncomeApi";
import { IncomeTypeApi } from "../api/IncomeTypeApi";
import { TemplateExpenseApi } from "../api/TemplateExpenseApi";
import { ExpenseTypeApi } from "../api/ExpenseTypeApi";

export const createApiRoutes = (db_con: Connection, app: Express) => {
  //5.1 API route
  app.get("/api", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../api/index.html"));
  });
  //5.2 Get data
  app.get("/api/expense_income_type", (req: Request, res: Response) => {
    let expenseIncomeTypeApi: ExpenseIncomeTypeApi = new ExpenseIncomeTypeApi();
    expenseIncomeTypeApi.getExpenseIncomeTypes(db_con, req, res);
  });
  app.get("/api/investment_type", (req: Request, res: Response) => {
    let investmentTypeApi: InvestmentTypeApi = new InvestmentTypeApi();
    investmentTypeApi.getInvestmentTypes(db_con, req, res);
  });
  app.get("/api/template", (req: Request, res: Response) => {
    let templateApi: TemplateApi = new TemplateApi();
    let id: string | null = req.query.id
      ? typeof req.query.id == "string"
        ? req.query.id
        : null
      : null;
    if (id) {
      templateApi.getTemplateById(db_con, id, req, res);
    } else {
      templateApi.getTemplates(db_con, req, res);
    }
  });
  app.get("/api/template_income", (req: Request, res: Response) => {
    let templateIncomeApi: TemplateIncomeApi = new TemplateIncomeApi();
    let idTemplate: string | null = req.query.id_template
      ? typeof req.query.id_template == "string"
        ? req.query.id_template
        : null
      : null;
    if (idTemplate) {
      console.log("Entra por idTemplate: " + idTemplate);
      templateIncomeApi.getTemplateIncomesByIdTemplate(
        db_con,
        idTemplate,
        req,
        res
      );
    } else {
      console.log("No entra por idTemplate: " + idTemplate);
      templateIncomeApi.getTemplateIncomes(db_con, req, res);
    }
  });
  app.get("/api/income_type", (req: Request, res: Response) => {
    let incomeTypeApi = new IncomeTypeApi();
    let id: string | null = req.query.id
      ? typeof req.query.id == "string"
        ? req.query.id
        : null
      : null;

    if (id) {
      incomeTypeApi.getIncomeTypeById(db_con, id, req, res);
    } else {
      incomeTypeApi.getIncomeTypes(db_con, req, res);
    }
  });
  app.get("/api/template_expense", (req: Request, res: Response) => {
    let templateExpenseApi: TemplateExpenseApi = new TemplateExpenseApi();
    let idTemplate: string | null = req.query.id_template
      ? typeof req.query.id_template == "string"
        ? req.query.id_template
        : null
      : null;
    if (idTemplate) {
      console.log("Entra por idTemplate: " + idTemplate);
      templateExpenseApi.getTemplateExpensesByIdTemplate(
        db_con,
        idTemplate,
        req,
        res
      );
    } else {
      console.log("NO entra por idTemplate: " + idTemplate);
      templateExpenseApi.getTemplateExpenses(db_con, req, res);
    }
  });
  app.get("/api/expense_type", (req: Request, res: Response) => {
    let expenseTypeApi = new ExpenseTypeApi();
    let id: string | null = req.query.id
      ? typeof req.query.id == "string"
        ? req.query.id
        : null
      : null;

    if (id) {
      expenseTypeApi.getExpenseTypeById(db_con, id, req, res);
    } else {
      expenseTypeApi.getExpenseTypes(db_con, req, res);
    }
  });
  //5.3 Add data
  //TODO
};
