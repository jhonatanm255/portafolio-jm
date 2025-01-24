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
      const response = await fetch("https://formspree.io/f/xldgeann", {
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
          name="name"
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
          name="email"
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
          name="message"
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
