import { useLanguage } from "../context/LanguageContext";
import { ProcessIcons } from "./ProcessIcons";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-gradient">
            {t.process.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Línea conectora */}
                {index < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-mystic-600 to-mystic-800"></div>
                )}

                <div className="relative z-10 text-center group">
                  {/* Número */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-mystic-600 to-purple-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-dark-300">
                    {index + 1}
                  </div>

                  {/* Icono */}
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300 text-mystic-300">
                    {ProcessIcons[step.iconName]}
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-mystic-300 mb-2">
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
