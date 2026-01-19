export default function About() {
  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-12">Sobre Mí</h2>

          <div className="card-mystic">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-mystic-600 to-purple-700 p-1 animate-pulse-glow">
                    <div className="w-full h-full rounded-full bg-dark-200 flex items-center justify-center">
                      <span className="text-8xl">🌙</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 text-4xl animate-float">
                    ✨
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 text-4xl animate-float"
                    style={{ animationDelay: "2s" }}
                  >
                    🔮
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold text-mystic-300">
                  Lina
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Con más de 15 años de experiencia en las artes místicas, he
                  dedicado mi vida a estudiar y practicar las tradiciones
                  ancestrales de la brujería.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Mi misión es ayudarte a conectar con tu poder interior y
                  transformar tu vida a través de rituales personalizados,
                  lecturas de tarot y limpias energéticas que han cambiado la
                  vida de cientos de personas.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-3 text-mystic-400 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Consultas personalizadas</span>
                  </div>
                  <div className="flex items-center gap-3 text-mystic-400 mb-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Confidencialidad absoluta</span>
                  </div>
                  <div className="flex items-center gap-3 text-mystic-400">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Resultados comprobados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
