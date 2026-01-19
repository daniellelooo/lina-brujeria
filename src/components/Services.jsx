const services = [
  {
    icon: "🔮",
    title: "Lectura de Tarot",
    description:
      "Descubre lo que el futuro te depara con una lectura personalizada de tarot. Orientación clara para tus decisiones.",
    features: [
      "Lectura completa",
      "Interpretación detallada",
      "Consejos personalizados",
    ],
  },
  {
    icon: "✨",
    title: "Limpias Energéticas",
    description:
      "Elimina energías negativas y bloqueos que impiden tu crecimiento. Renueva tu aura y atrae prosperidad.",
    features: [
      "Limpieza profunda",
      "Protección energética",
      "Equilibrio espiritual",
    ],
  },
  {
    icon: "🕯️",
    title: "Rituales de Amor",
    description:
      "Atrae el amor verdadero o fortalece tu relación actual con rituales poderosos y efectivos.",
    features: [
      "Atracción amorosa",
      "Unión de parejas",
      "Rituales personalizados",
    ],
  },
  {
    icon: "💰",
    title: "Rituales de Prosperidad",
    description:
      "Abre los caminos hacia la abundancia y el éxito en tus proyectos financieros y profesionales.",
    features: ["Atracción de dinero", "Éxito laboral", "Negocios prósperos"],
  },
  {
    icon: "🛡️",
    title: "Protección Espiritual",
    description:
      "Protege tu hogar y seres queridos de malas energías, envidias y trabajos negativos.",
    features: ["Protección del hogar", "Escudo energético", "Defensa psíquica"],
  },
  {
    icon: "🌿",
    title: "Baños Espirituales",
    description:
      "Baños rituales con hierbas sagradas para purificación, suerte y apertura de caminos.",
    features: [
      "Purificación total",
      "Suerte y fortuna",
      "Renovación espiritual",
    ],
  },
];

export default function Services() {
  const handleWhatsAppClick = (service) => {
    const message = `Hola, me interesa el servicio de ${service}`;
    window.open(
      `https://wa.me/tunumerodetelefono?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Servicios Místicos</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada servicio es personalizado según tus necesidades específicas.
            Trabajamos juntos para lograr tus objetivos espirituales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-mystic group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-6xl inline-block group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-mystic-300 mb-3 text-center">
                {service.title}
              </h3>

              <p className="text-gray-300 mb-4 text-center">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <svg
                      className="w-5 h-5 text-mystic-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsAppClick(service.title)}
                className="w-full bg-mystic-700 hover:bg-mystic-600 text-white py-3 rounded-lg transition-colors duration-300 font-semibold"
              >
                Consultar
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-mystic max-w-3xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-mystic-300 mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-300 mb-6">
              Cada situación es única. Contáctame para una consulta
              personalizada y encuentra la solución que necesitas.
            </p>
            <button
              onClick={() => handleWhatsAppClick("Consulta Personalizada")}
              className="btn-primary"
            >
              Consulta Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
