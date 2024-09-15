# Savings & Investments Database
## Configuration
This project uses express and mysql node.js dependencies to provide de functionality of interaction with database.

To use it correctly you must create your own .env file at root folder and indicate the port, where you want to serve the web service, and the databasename and credentials (you can base on the .env-example file).

## Web service
<table>
    <tr>
        <th>URL pattern</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>/createDatabase</td>
        <td>Create an schema with DATABASE_NAME indicated at .env file</td>
    </tr>
    <tr>
        <td>/useDatabase</td>
        <td>Use DATABASE_NAME indicated at .env file to check if is created</td>
    </tr>
    <tr>
        <td>/createTables</td>
        <td>Created all necessary tables</td>
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