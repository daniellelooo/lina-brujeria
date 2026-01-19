import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import StarField from "./components/StarField";

function App() {
  return (
    <>
      <Helmet>
        <title>
          Lina - Servicios Místicos y Espirituales | Tarot, Brujería y Rituales
        </title>
        <meta
          name="description"
          content="Descubre servicios profesionales de brujería, tarot, limpias energéticas y rituales personalizados. Consultas místicas con Lina para resolver tus inquietudes espirituales."
        />
        <link rel="canonical" href="https://tudominio.com" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Lina - Servicios Místicos",
            description:
              "Servicios profesionales de brujería, tarot, limpias energéticas y rituales personalizados",
            priceRange: "$$",
            serviceType: [
              "Tarot",
              "Brujería",
              "Rituales",
              "Limpias Energéticas",
            ],
            areaServed: "Online",
            availableLanguage: "es",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-mystic-gradient overflow-hidden">
        <StarField />
        <Header />
        <Hero />
        <About />
        <Services />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}

export default App;
