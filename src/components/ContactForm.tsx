// import { useState } from "react";
// import { Button } from "./ui/button";
// import { toast } from "sonner";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   const API_URL =
//     process.env.NODE_ENV === "production"
//       ? "https://tu-dominio.com/send-email"
//       : "http://localhost:5000/send-email";

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validación de campos
//     if (!formData.name || !formData.email || !formData.message) {
//       toast.error("Por favor, completa todos los campos");
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         toast.success("Mensaje enviado correctamente");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         const errorData = await response.json();
//         toast.error(
//           `Error: ${errorData.message || "Error al enviar el mensaje"}`
//         );
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       toast.error("Error al enviar el mensaje");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium mb-2">
//           Nombre
//         </label>
//         <input
//           type="text"
//           id="name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email" className="block text-sm font-medium mb-2">
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="message" className="block text-sm font-medium mb-2">
//           Mensaje
//         </label>
//         <textarea
//           id="message"
//           value={formData.message}
//           onChange={(e) =>
//             setFormData({ ...formData, message: e.target.value })
//           }
//           rows={4}
//           className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
//           required
//         />
//       </div>
//       <Button type="submit" className="w-full" disabled={loading}>
//         {loading ? "Enviando..." : "Enviar mensaje"}
//       </Button>
//     </form>
//   );
// };

// export default ContactForm;





import { useState } from "react";
import { Button } from "./ui/button"; // Asumiendo que tienes este componente
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensaje enviado correctamente");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await response.json();
        toast.error(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al enviar el mensaje");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          rows={4}
          className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Enviar mensaje
      </Button>
    </form>
  );
};

export default ContactForm;
