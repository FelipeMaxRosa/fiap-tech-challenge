import express from 'express';
import mysql from 'mysql2';

// App
const app = express();

// Constants
const PORT = 3000;

const connection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'fastnfoodius',
});

connection.connect((error) => {
  if (error) {
    return console.error(`Error: ${error}`);
  }

  console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error executing query: ', error);
      res.status(500).send('Error executing query');
      return;
    }

    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Running on PORT:${PORT}`);
});
