# Savings & Investments Database

## Run project

Use <code>npm run dev</code> and you can use the Webservice routes and the API routes.

## Configuration

This project uses express and mysql node.js dependencies to provide de functionality of interaction with database.

To use it correctly you must create your own .env file at root folder and indicate the port, where you want to serve the web service, and the databasename and credentials (you can base on the .env-example file).

## API

<table>
    <tr>
        <th>URL pattern</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>/api</td>
        <td>This table help</td>
    </tr>
    <tr>
        <td>/api/expense_income_type</td>
        <td>Get all the expense_income_type elements</td>
    </tr>
    <tr>
        <td>/api/investment_type</td>
        <td>Get all the investment_type elements</td>
    </tr>
    <tr>
        <td>/api/template</td>
        <td>Get all the template elements</td>
    </tr>
    <tr>
        <td>/api/template_income</td>
        <td>Get all the template_income elements</td>
    </tr>
      <tr>
        <td>/api/template_income?id_template=?</td>
        <td>Get all the template_income elements of one specific template</td>
      </tr>
    <tr>
        <td>/api/income_type</td>
        <td>Get all the income_type elements</td>
    </tr>
</table>

## Web service

<table>
    <tr>
        <th>URL pattern</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>/webservice</td>
        <td>This table help</td>
    </tr>
    <tr>
        <td>/webservice/createDatabase</td>
        <td>Create an schema with DATABASE_NAME indicated at .env file</td>
    </tr>
    <tr>
        <td>/webservice/useDatabase</td>
        <td>Use DATABASE_NAME indicated at .env file to check if is created</td>
    </tr>
    <tr>
        <td>/webservice/createTables</td>
        <td>Create all necessary tables</td>
    </tr>
</table>

## Versions used

### Production dependencies

<table>
    <tr>
        <th>Node package</th>
        <th>Version</th>
        <th>Date of last revision (dd-mm-yyy)</th>
    </tr>
    <tr>
        <td>express</td>
        <td>4.21.0</td>
        <td>15-09-2024</th>
    </tr>
    <tr>
        <td>mysql2</td>
        <td>3.11.2</td>
        <td>15-09-2024</th>
    </tr>
    <tr>
        <td>dotenv</td>
        <td>16.4.5</td>
        <td>15-09-2024</th>
    </tr>
</table>
