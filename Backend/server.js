const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); // Para analizar el cuerpo de la solicitud como JSON
app.use(cors()); // Para permitir solicitudes CORS

// Limitar solicitudes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita a 100 solicitudes por IP
  message:
    "Demasiadas solicitudes desde esta IP, por favor inténtalo más tarde.",
});
app.use(limiter);

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com", // Cambia esto según tu proveedor de correo
  port: 465, // Puerto SSL
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // Tu correo corporativo
    pass: process.env.EMAIL_PASSWORD, // Contraseña del correo
  },
});

// Verificar el transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("Error al configurar el transporte de nodemailer:", error);
  } else {
    console.log("Transporte de nodemailer configurado correctamente:", success);
  }
});

// Ruta para manejar el envío de correos
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Validación básica de los campos
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  // Validación de formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res
      .status(400)
      .json({ message: "El formato del correo no es válido" });
  }

  try {
    // Opciones del correo
    const mailOptions = {
      from: `"${name}" <${email}>`, // Mostrar el nombre y email de quien envía
      to: process.env.EMAIL_USER, // Dirección que recibirá el correo
      subject: "Nuevo mensaje de contacto",
      text: message,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br>${message}</p>`,
      replyTo: email, // Responder directamente al email del remitente
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);

    // Responder con error detallado
    res.status(500).json({
      message: "Error al enviar el correo. Inténtalo más tarde.",
      error: error.message, // Mensaje del error para depuración
    });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
