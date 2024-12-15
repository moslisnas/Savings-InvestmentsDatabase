# Savings & Investments Database

## Run project

Use <code>npm run dev</code> and you can use the Webservice routes and the API routes.

## Configuration

This project uses express and mysql node.js dependencies to provide de functionality of interaction with database.

To use it correctly you must create your own .env file at root folder and indicate the port, where you want to serve the web service, and the databasename and credentials (you can base on the .env-example file).

## API

[API Endpoints](src/api/README.md)

## Web service

[Webservice Endpoints](src/webservice/README.md)

## Versions used

### Production dependencies

<table>
    <tr>
        <th>Node package</th>
        <th>Version</th>
        <th>Date of last revision (dd-mm-yyy)</th>
    </tr>
    <tr>
        <td>copyfiles</td>
        <td>2.4.1</td>
        <td>14-12-2024</th>
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
        <td>zod</td>
        <td>3.24.1</td>
        <td>16-12-2024</th>
    </tr>
</table>
