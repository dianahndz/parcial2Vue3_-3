import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configura el transportador de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // eslint-disable-next-line no-undef
    user: process.env.EMAIL_USER, // Correo electrónico desde el archivo .env
    // eslint-disable-next-line no-undef
    pass: process.env.EMAIL_PASS, // Contraseña de la aplicación desde el archivo .env
  },
});

// Ruta para enviar el correo
app.post('/send-email', (req, res) => {
  const { email, message } = req.body;

  const mailOptions = {
    // eslint-disable-next-line no-undef
    from: process.env.EMAIL_USER, // Correo desde donde se envía
    to: email, // Correo electrónico de destino
    subject: 'Mensaje desde el formulario',
    text: message, // Mensaje del formulario
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send(`Error al enviar el correo: ${error.message}`);
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
