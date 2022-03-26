const mysqlConnection = require("../database/config");

const getUsers = (req, res) => {
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
};

const postUser = (req, res) => {
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
};

module.exports = {
  getUsers,
  postUser,
};
