import { useState, useEffect } from "react";
import { CrystalBallIcon } from "./MysticIcons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-200/80 backdrop-blur-xl shadow-2xl border-b border-mystic-900/30"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="group-hover:scale-110 transition-transform duration-300 text-mystic-400">
              <CrystalBallIcon />
            </div>
            <h1 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-400 to-purple-300 group-hover:from-mystic-300 group-hover:to-purple-200 transition-all duration-300">
              Lina
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-mystic-400 transition-all duration-300 relative group py-1"
            >
              <span className="relative z-10">Inicio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#sobre-mi"
              className="text-gray-300 hover:text-mystic-400 transition-all duration-300 relative group py-1"
            >
              <span className="relative z-10">Sobre Mí</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#servicios"
              className="text-gray-300 hover:text-mystic-400 transition-all duration-300 relative group py-1"
            >
              <span className="relative z-10">Servicios</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contacto"
              className="text-gray-300 hover:text-mystic-400 transition-all duration-300 relative group py-1"
            >
              <span className="relative z-10">Contacto</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-mystic-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
