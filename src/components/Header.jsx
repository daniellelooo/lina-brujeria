import { useState, useEffect } from "react";

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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-200/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🔮</span>
            <h1 className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-mystic-400 to-purple-300">
              Lina
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-mystic-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#sobre-mi"
              className="text-gray-300 hover:text-mystic-400 transition-colors"
            >
              Sobre Mí
            </a>
            <a
              href="#servicios"
              className="text-gray-300 hover:text-mystic-400 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="text-gray-300 hover:text-mystic-400 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
