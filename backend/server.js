const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar que el servidor funciona
app.get('/api/health', (req, res) => {
  res.json({ estado: 'Servidor del Portafolio activo 🚀' });
});

// Ruta para recibir el mensaje del formulario
app.post('/api/contacto', async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  console.log(`Mensaje recibido de ${nombre} (${email}): ${mensaje}`);
  
  // Responder al frontend que todo salió bien
  res.status(200).json({ mensaje: 'Mensaje recibido correctamente en el servidor' });
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});