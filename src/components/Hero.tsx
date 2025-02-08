// import { motion } from "framer-motion";
// import { Code2 } from "lucide-react";
// import HeroTyped from "./ui/HeroTyped";
// import Image from "../../public/assets/hero.jpg";
// import foto from "../../public/assets/img-hero.png";

// const Hero = () => {
//   return (
//     <section
//       id="inicio"
//       className="min-h-screen flex items-center justify-center section-padding pt-32 relative object-fill overflow-hidden bg-cover bg-center"
//       // style={{
//       //   backgroundImage: `url(${Image})`, // Se establece la imagen de fondo
//       // }}
//     >
//       {/* Fondo adicional opcional */}
//       <div className="absolute inset-0 bg-black/80"></div>

//       <div className="mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-4 sm:px-8">
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-left md:text-left sm:text-center"
//         >
//           <span className="text-primary font-medium block">¡Hola! Soy</span>
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 mb-4">
//             Jhonatan Muñoz
//           </h1>
//           <HeroTyped />
//           <p className="text-white/80 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto sm:mx-0">
//             Especializado en crear experiencias web modernas y atractivas,
//             combinando diseño y funcionalidad para dar vida a interfaces únicas
//             y proyectos innovadores.
//           </p>
//           <a
//             href="#contacto"
//             className="inline-block bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors relative overflow-hidden group"
//           >
//             <span className="relative z-10 text-black font-semibold">
//               Contáctame
//             </span>
//           </a>
//         </motion.div>

//         <div className="flex justify-center items-center w-60 h-60 rounded-full overflow-hidden border-4 border-yellow-500">
//           <img
//             src={foto}
//             alt="Tu Nombre"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;






import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import HeroTyped from "./ui/HeroTyped";
import foto from "../../public/assets/img-hero.png";
import FooterLinks from "./FooterLinks";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.15),transparent_80%)]"></div>

      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left md:text-left sm:text-center"
        >
          <span className="text-primary font-medium block">¡Hola! Soy</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 mb-4">
            Jhonatan Muñoz
          </h1>
          <HeroTyped />
          <p className="text-white/60 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto sm:mx-0">
            Especializado en crear experiencias web modernas y atractivas,
            combinando diseño y funcionalidad para dar vida a interfaces únicas
            y proyectos innovadores.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="#contacto"
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10 text-black font-semibold">
                Contáctame
              </span>
            </a>
            <FooterLinks />
          </div>
        </motion.div>

        <div className="relative flex justify-center items-center m-auto w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-yellow-600 to-black  shadow-lg">
          <img
            src={foto}
            alt="Tu Nombre"
            className="w-full h-[115%] absolute z-1000 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
