const express = require("express");
const router = express.Router();
const mysqlConnection = require("../database");

// GET all Users
router.get("/", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM users_test_CarlosValencia",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

// INSERT An User

// INSERT INTO users_test_CarlosValencia
// (nombre,segundo_nombre,apellido_paterno,apellido_materno,fechaNacimiento,email,telefono) VALUES
// ('Jose','Carlos','Valencia','Valenzuela','1996-01-23','jocavalenciava@ittepic.edu.mx','3111682346');

router.post("/", (req, res) => {
  const {
    nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    fechaNacimiento,
    email,
    telefono,
  } = req.body;

  const query = `
    INSERT INTO users_test_CarlosValencia 
    (nombre,segundo_nombre,apellido_paterno,apellido_materno,fechaNacimiento,email,telefono) VALUES
    (?,?,?,?,?,?,?);
  `;
  mysqlConnection.query(
    query,
    [
      nombre,
      segundo_nombre,
      apellido_paterno,
      apellido_materno,
      fechaNacimiento,
      email,
      telefono,
    ],
    (err, rows, fields) => {
      if (!err) {
        res.json({ status: "User Saved" });
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
