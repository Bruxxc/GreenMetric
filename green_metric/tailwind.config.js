/** @type {import('tailwindcss').Config} */

import { keepTheme } from "keep-react/keepTheme";

// Configuración de Tailwind con keepTheme
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Asegúrate de que esta parte incluya los archivos correctos para tu proyecto
  theme: {
    extend: {}, // Aquí puedes agregar tus modificaciones a los temas, colores, etc.
  },
  plugins: [], // Puedes añadir los plugins que necesites aquí
};

// Exporta el tema usando keepTheme
export default keepTheme(config);
