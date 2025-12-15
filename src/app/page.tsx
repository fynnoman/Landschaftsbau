'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projectDescriptions = [
    {
      title: "Wohnungsentrümpelung",
      text: "Komplette Entrümpelung einer 3-Zimmer-Wohnung in Saarbrücken. Unser Team hat alle Möbel, Hausrat und Sperrmüll fachgerecht entsorgt. Die Wohnung wurde besenrein übergeben. Dank unserer effizienten Arbeitsweise war der Auftrag in nur einem Tag erledigt."
    },
    {
      title: "Haushaltsauflösung",
      text: "Bei diesem Projekt haben wir die komplette Auflösung eines Haushalts übernommen. Mit viel Einfühlungsvermögen und Diskretion haben wir alle Gegenstände sortiert, wertvolle Stücke identifiziert und den Rest fachgerecht entsorgt. Der Kunde war sehr zufrieden mit unserem respektvollen Umgang."
    },
    {
      title: "Kellerentrümpelung",
      text: "Ein komplett vollgestellter Keller wurde von uns entrümpelt und gereinigt. Jahrzehntelange Ansammlungen wurden sortiert, Wertstoffe getrennt und alles ordnungsgemäß entsorgt. Der Keller ist nun wieder voll nutzbar."
    },
    {
      title: "Umzugsservice",
      text: "Professioneller Umzug einer Familie von Saarbrücken nach Völklingen. Unser Team hat alle Möbel sorgfältig verpackt, transportiert und in der neuen Wohnung aufgestellt. Pünktlich, freundlich und ohne Schäden – so wie es sein soll."
    },
    {
      title: "Betriebsauflösung",
      text: "Komplette Auflösung eines Bürobetriebs mit Entsorgung aller Büromöbel, IT-Equipment und Akten. Wir haben uns um die fachgerechte Entsorgung aller Materialien gekümmert und die Räume besenrein übergeben."
    },
    {
      title: "Dachbodenentrümpelung",
      text: "Ein überfüllter Dachboden wurde von uns komplett geräumt. Alte Möbel, Kisten und Gerümpel wurden schnell und sauber entfernt. Der Kunde freute sich über die schnelle Abwicklung und faire Preisgestaltung."
    }
  ];

  const handleImageClick = (index: number) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-[#1a4d2e]/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[#d97706] to-[#f59e0b] bg-clip-text text-transparent -ml-2 sm:-ml-4 lg:-ml-8">
              <span className="hidden sm:inline">Der Ruppi macht's</span>
              <span className="sm:hidden">Der Ruppi macht's</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              <a href="#home" className="px-6 py-2.5 text-[#d97706] hover:bg-[#d97706] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">Home</a>
              <a href="#leistungen" className="px-6 py-2.5 text-[#d97706] hover:bg-[#d97706] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">Leistungen</a>
              <a href="#galerie" className="px-6 py-2.5 text-[#d97706] hover:bg-[#d97706] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">Galerie</a>
              <a href="#kontakt" className="px-6 py-2.5 bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">Kontakt</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-[#1a4d2e]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a 
                href="#home" 
                className="block px-4 py-2 text-[#d97706] hover:bg-[#d97706] hover:text-white rounded-lg font-semibold transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#leistungen" 
                className="block px-4 py-2 text-[#d97706] hover:bg-[#d97706] hover:text-white rounded-lg font-semibold transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Leistungen
              </a>
              <a 
                href="#galerie" 
                className="block px-4 py-2 text-[#d97706] hover:bg-[#d97706] hover:text-white rounded-lg font-semibold transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galerie
              </a>
              <a 
                href="#kontakt" 
                className="block px-4 py-2 bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white rounded-lg font-semibold shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontakt
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Fixed Background Image for entire page */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/garden.jpeg"
          alt="Garten- und Landschaftsbau"
          fill
          className="object-cover"
          style={{ objectPosition: '60% 70%' }}
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            <span className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] bg-clip-text text-transparent">Der Ruppi macht's</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/95 drop-shadow-lg">
            Ihr zuverlässiger Partner für Entrümpelungen und Entsorgung in Saarbrücken
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#kontakt" 
              className="px-8 py-4 bg-white text-[#d97706] rounded-lg font-semibold hover:bg-[#fef3c7] transition-all transform hover:scale-105 shadow-lg"
            >
              Jetzt Kontakt aufnehmen
            </a>
            <a 
              href="#leistungen" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#d97706] transition-all"
            >
              Unsere Leistungen
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#d97706] mb-6">Über uns</h2>
              <p className="text-lg text-white mb-6">
                Der Ruppi macht's ist Ihr professionelles Entsorgungsunternehmen in Saarbrücken und Umgebung. 
                Wir sind spezialisiert auf Entrümpelungen jeder Art, Haushaltsauflösungen und Entsorgungsdienstleistungen.
              </p>
              <p className="text-lg text-white mb-6">
                Unser erfahrenes Team arbeitet schnell, diskret und zuverlässig. Der Chef ist persönlich vor Ort 
                und sorgt dafür, dass alle Aufträge pünktlich und zu fairen Preisen erledigt werden.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white/80 rounded-xl">
                  <div className="text-4xl font-bold text-[#d97706] mb-2">5.0</div>
                  <div className="text-stone-grey">Google Bewertung</div>
                </div>
                <div className="text-center p-6 bg-white/80 rounded-xl">
                  <div className="text-4xl font-bold text-[#d97706] mb-2">21</div>
                  <div className="text-stone-grey">Rezensionen</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/E1A77885-3015-488E-A863-7F08D039D190.jpeg"
                alt="Der Ruppi macht's Entsorgung"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 40%' }}
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="pt-32 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Unsere Leistungen</h2>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
              Umfassende Dienstleistungen rund um Entrümpelung, Entsorgung und mehr
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]">
              <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d97706] mb-3">Entrümpelungen</h3>
              <p className="text-[#6b7280]">
                Wohnungs-, Haus-, Keller- und Dachbodenentrümpelungen – schnell, sauber und zuverlässig.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]">
              <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d97706] mb-3">Haushaltsauflösungen</h3>
              <p className="text-[#6b7280]">
                Professionelle und diskrete Auflösung kompletter Haushalte mit fachgerechter Entsorgung.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]">
              <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d97706] mb-3">Betriebs- & Firmenauflösungen</h3>
              <p className="text-[#6b7280]">
                Kompetente Abwicklung von Betriebs- und Firmenauflösungen aller Art.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]">
              <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d97706] mb-3">Umzüge</h3>
              <p className="text-[#6b7280]">
                Zuverlässige Umzugsdienstleistungen mit professionellem Team für einen stressfreien Umzug.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]">
              <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d97706] mb-3">Transportvermietung</h3>
              <p className="text-[#6b7280]">
                Transportvermietung mit erfahrenem Fahrer für alle Ihre Transportbedürfnisse.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#f59e0b]">
              <div className="w-12 h-12 bg-[#d97706] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#d97706] mb-3">Gebäudereinigung & Gartenarbeiten</h3>
              <p className="text-[#6b7280]">
                Professionelle Gebäudereinigung und Gartenarbeiten für ein gepflegtes Umfeld.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Unsere Projekte</h2>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg mb-6">
              Ein Einblick in unsere abgeschlossenen Projekte und Arbeiten
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
              <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <span className="text-white font-medium text-sm">Klicken Sie auf die Bilder für mehr Details</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gallery images */}
            {['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg'].map((image, index) => (
              <div 
                key={index} 
                className="perspective-container aspect-square cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className={`flip-card ${flippedCard === index ? 'flipped' : ''}`}>
                  {/* Front side - Image */}
                  <div className="flip-card-front relative w-full h-full rounded-2xl shadow-2xl overflow-hidden group border-4 border-white/20">
                    <Image
                      src={`/${image}`}
                      alt={`Projekt ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={95}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end pb-6">
                      <svg className="w-8 h-8 text-white mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-white font-semibold text-lg">Details ansehen</span>
                    </div>
                  </div>
                  
                  {/* Back side - Orange */}
                  <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-[#d97706] to-[#ea580c] rounded-2xl shadow-2xl flex items-start justify-start p-6 overflow-y-auto border-4 border-[#f59e0b]">
                    <div className="text-left text-white w-full">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-bold">{projectDescriptions[index].title}</h3>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(index);
                          }}
                          className="text-white hover:text-[#fef3c7] transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="h-px bg-[#fbbf24] mb-4"></div>
                      <p className="text-sm md:text-base text-white/95 leading-relaxed">{projectDescriptions[index].text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Was unsere Kunden sagen</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white text-2xl font-bold ml-2">5.0</span>
            </div>
            <p className="text-lg text-white drop-shadow-lg">
              Basierend auf 21 Google-Rezensionen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6b7280] mb-4 italic">
                "Wir haben unseren Umzug in eine neue Wohnung sowie die Entrümpelung des vorherigen Hauses machen lassen. Sehr nette und zuvorkommende Mitarbeiter arbeiten mit ihrem ebenfalls sehr freundlichen und hilfsbereiten Chef Hand in Hand. Alle Termine wurden pünktlichst eingehalten. Dringende Weiterempfehlung! 👍👍👍"
              </p>
              <div className="border-t border-[#d97706]/20 pt-4">
                <p className="font-semibold text-[#d97706]">Ellen Müller</p>
                <p className="text-sm text-[#6b7280]">vor einem Monat</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6b7280] mb-4 italic">
                "Wir haben die Firma engagiert um unseren Keller zu entrümpeln. Der Chef persönlich sowie seine Kollegen waren sehr kompetent und der Auftrag wurde schnell erledigt. Sehr höfliche und freundliche Firma. TOP!"
              </p>
              <div className="border-t border-[#d97706]/20 pt-4">
                <p className="font-semibold text-[#d97706]">Julia Stegen</p>
                <p className="text-sm text-[#6b7280]">vor 5 Monaten</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[#6b7280] mb-4 italic">
                "Super diskret. Super schnelle Abwicklung. Und sehr sehr gute und saubere Arbeit, zu mehr als fairen Preisen. Alles in allem kann ich das Unternehmen nur weiterempfehlen."
              </p>
              <div className="border-t border-[#d97706]/20 pt-4">
                <p className="font-semibold text-[#d97706]">Reiner Wahnsinn</p>
                <p className="text-sm text-[#6b7280]">Local Guide · vor 5 Monaten</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Kontakt aufnehmen</h2>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
              Haben Sie Fragen oder benötigen Sie eine Entrümpelung? Kontaktieren Sie uns!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#d97706]">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#d97706]/20 text-[#d97706] placeholder-[#d97706]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#d97706]">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#d97706]/20 text-[#d97706] placeholder-[#d97706]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#d97706]">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#d97706]/20 text-[#d97706] placeholder-[#d97706]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#d97706]">Nachricht</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#d97706]/20 text-[#d97706] placeholder-[#d97706]/50 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
                    placeholder="Ihre Nachricht an uns"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#d97706] text-white rounded-lg font-semibold hover:bg-[#b45309] transition-colors"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Kontaktinformationen</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#d97706] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Adresse</p>
                      <p className="text-white/80">Oberstraße 41<br />66125 Saarbrücken<br />Deutschland</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#1a4d2e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Telefon</p>
                      <p className="text-white/80">0160 3474685</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#1a4d2e] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Öffnungszeiten</p>
                      <p className="text-white/80">Di-Sa: 08:00 - 18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3 text-[#d97706]">Servicegebiet</h4>
                <p className="text-[#d97706]">
                  Wir sind in Saarbrücken und im gesamten Saarland tätig. Rufen Sie uns an für ein kostenloses Angebot!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#d97706] text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Der Ruppi macht's</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Ihr zuverlässiger Partner für Entrümpelungen, Haushaltsauflösungen und Entsorgung in Saarbrücken und Umgebung.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
                <li><a href="#leistungen" className="text-white/80 hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#galerie" className="text-white/80 hover:text-white transition-colors">Galerie</a></li>
                <li><a href="#kontakt" className="text-white/80 hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Rechtliches</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/70 text-sm">
                &copy; 2025 Der Ruppi macht's. Alle Rechte vorbehalten.
              </p>
              <p className="text-white/70 text-sm">
                Gestaltet mit <span className="text-[#fbbf24]">♥</span> in Deutschland
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
