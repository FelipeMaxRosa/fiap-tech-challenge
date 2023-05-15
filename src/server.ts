import express from 'express';
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'fastfoodius_user',
  password: 'fastfoodius_pass',
  database: 'fastfoodius',
});

// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Running on PORT:${PORT}`);
});

connection.connect((error) => {
  if (error) {
    return console.error(`Error: ${error}`);
  }

  console.log('Connected to MySQL Server!');
});
