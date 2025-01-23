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
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Usamos siempre tu correo corporativo aquí
      to: process.env.EMAIL_USER, // Enviar el correo a tu dirección
      subject: "Nuevo mensaje de contacto",
      text: message,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong><br>${message}</p>`,
      replyTo: email, // Configura la dirección de respuesta al correo del usuario
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({
      message: "Error al enviar el correo",
      error: error.message,
      stack: error.stack,
    });
  }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
