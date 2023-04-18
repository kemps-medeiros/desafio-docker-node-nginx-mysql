const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host:'mysql',
  user: 'user',
  password: 'root',
  database: 'teste',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database!');
});

const createTable = `CREATE TABLE IF NOT EXISTS people(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(100), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`

db.query(createTable);
const sql = `INSERT INTO people (name) values ('KEMPS')`

db.query(sql)

app.get('/', async (req, res) => {
  db.query('SELECT name FROM people', (error, people, _fields) => {
    if (error) throw error;

    peopleNames = people.map(person => `<li>${person.name}</li>`).join()

    body += `${peopleNames}`

    res.send(body)
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
