import { Connection } from "mysql2/typings/mysql/lib/Connection";

export function createTablesWebservice(db_con: Connection, req: any, res: any) {
  let useQuery = `USE ${process.env.DATABASE_NAME}`;
  db_con.query(useQuery, (error: any) => {
    if (error) {
      throw error;
    }
    console.log(`Using Database ${process.env.DATABASE_NAME}`);

    const tables = [
      {
        tableName: "expense_income_type",
        tableColumns:
          "(id INT NOT NULL AUTO_INCREMENT, abbreviation VARCHAR(10) NOT NULL, name VARCHAR(45) NOT NULL, description VARCHAR(255) NULL, PRIMARY KEY (id), UNIQUE INDEX abbreviation_UNIQUE (abbreviation ASC) VISIBLE, UNIQUE INDEX name_UNIQUE (name ASC) VISIBLE)",
      },
      {
        tableName: "investment_type",
        tableColumns:
          "(id INT NOT NULL AUTO_INCREMENT, abbreviation VARCHAR(10) NOT NULL, name VARCHAR(45) NOT NULL, description VARCHAR(255) NULL, PRIMARY KEY (id), UNIQUE INDEX abbreviation_UNIQUE (abbreviation ASC) VISIBLE)",
      },
    ];
    var createdTablesMessage = "";
    tables.forEach((table) => {
      let createQuery = `CREATE TABLE ${table.tableName} ${table.tableColumns}`;
      db_con.query(createQuery, (err: any) => {
        if (err) {
          if (err.code !== "ER_TABLE_EXISTS_ERROR") {
            throw err;
          }
        }
        if (err.code === "ER_TABLE_EXISTS_ERROR") {
          createdTablesMessage += `</br>Table ${table.tableName} already exists!`;
          console.log(`Table ${table.tableName} already exists!`);
        } else {
          createdTablesMessage += `</br>Table ${table.tableName} created successfully!`;
          console.log(`Table ${table.tableName} created successfully!`);
        }
      });
    });

    return res.send(
      `Created tables at ${process.env.DATABASE_NAME} Database:` +
        createdTablesMessage
    );
  });
}
