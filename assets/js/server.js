const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
const UserController = require('../../controller/userController');


const app = express();
const puerto = 3000;

app.use(express.urlencoded({ extended: true }));

// Configuración básica de CORS
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'gymproyecto',
});



conexion.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos: ' + err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
});







// Configuración para servir archivos estáticos desde la carpeta 'A'
app.use(express.static(path.join(__dirname, '../../../A')));



// Crear una instancia de UserController y pasarle la conexión a la base de datos
const userController = new UserController(conexion);

// Ruta para el archivo login.html
// Ruta para el archivo login.html
app.get('/view/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../A/view', 'login.html'));
});


// Rutas sin configuración CORS específica
app.post('/register', (req, res) => {
  console.log("Solicitud POST recibida en /register"); // Mensaje de depuración
  userController.registerUser(req, res);
});
app.post('/login', (req, res) => {
  userController.loginUser(req, res);
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}`);
});

