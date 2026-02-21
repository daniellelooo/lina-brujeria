import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonios" className="py-20 relative bg-dark-300/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4 animate-gradient">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.testimonials.list.map((testimonial, index) => (
            <div
              key={index}
              className="card-glass hover-shine group hover:scale-105 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mystic-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-mystic-300">
                    {testimonial.name}
                  </h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-mystic-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 italic mb-4">
                "{testimonial.comment}"
              </p>

              <div className="text-sm text-mystic-400">
                {testimonial.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
