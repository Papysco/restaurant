const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "restaurant",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connection réussie...");
});

const corsOptions = {
  origin: "http://localhost:3000",
};
// app.use(cors());
app.use(cors(corsOptions));

app.get("/reviews", function (req, res) {
  const sql = "SELECT * FROM reviews";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3200, () => {
  console.log("Serveur démarré sur le port 3200");
});
