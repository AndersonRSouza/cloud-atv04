const express = require("express");
const mysql = require("mysql");
const os = require("os");
const app = express();

app.get("/", (request, response) => {
  return response.status(200).json({
    message: "Olá",
  });
});

app.get("/liveness", (request, response) => {
  return response.status(200).json({
    message: "Meu app está vivo!!",
    path: process.cwd(),
    // gid: process.getegid(),
    // uid: process.geteuid()
    date: new Date().getTime(),
  });
});

app.get("/readiness", (request, response) => {
  //CACHE (Redis)
  //BANCO DE DADOS (MySQL, Postgre, MongoDB)
  //CLIMA TEMPO
  return response.status(200).json({
    message: "Meu app está pronto!",
    platform: os.platform(),
    freemem: os.freemem(),
    homedir: os.homedir(),
    date: new Date().getTime(),
  });
});

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'aula_cloud_04'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados!');
});

app.get('/consulta-dados', (req, res) => {
  const query = 'SELECT * FROM Clientes';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar consulta:', err);
      return res.status(500).json({ error: 'Erro ao consultar dados no banco de dados.' });
    }

    res.status(200).json({ customers: results });
  });
});

module.exports = app;
