import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-[#1a4d2e]/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#1a4d2e] to-[#4f9a6f] bg-clip-text text-transparent">
              Garten- und Landschaftsbau Di Mulo Fabio
            </div>
            <div className="hidden md:flex space-x-2">
              <a href="#home" className="px-6 py-2.5 text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">Home</a>
              <a href="#leistungen" className="px-6 py-2.5 text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">Leistungen</a>
              <a href="#galerie" className="px-6 py-2.5 text-[#1a4d2e] hover:bg-[#1a4d2e] hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105">Galerie</a>
              <a href="#kontakt" className="px-6 py-2.5 bg-gradient-to-r from-[#1a4d2e] to-[#4f9a6f] text-white rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">Kontakt</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Fixed Background Image for entire page */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero2.jpeg"
          alt="Garten- und Landschaftsbau"
          fill
          className="object-cover"
          style={{ objectPosition: '60% 70%' }}
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
            Garten- und Landschaftsbau<br />
            <span className="bg-gradient-to-r from-[#1a4d2e] to-[#4f9a6f] bg-clip-text text-transparent">Di Mulo Fabio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white/95 drop-shadow-lg">
            Ihr Partner für professionelle Gartengestaltung und Landschaftspflege
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#kontakt" 
              className="px-8 py-4 bg-white text-[#1a4d2e] rounded-lg font-semibold hover:bg-[#c8e6c9] transition-all transform hover:scale-105 shadow-lg"
            >
              Jetzt Kontakt aufnehmen
            </a>
            <a 
              href="#leistungen" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#1a4d2e] transition-all"
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
      <section className="pt-12 pb-0 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a4d2e] mb-6">Über uns</h2>
              <p className="text-lg text-white mb-6">
                Mit jahrelanger Erfahrung im Garten- und Landschaftsbau steht Di Mulo Fabio für Qualität, 
                Zuverlässigkeit und professionelle Arbeit. Unser Team verwandelt Ihre Gartenträume in die Realität.
              </p>
              <p className="text-lg text-white mb-6">
                Von der ersten Planung bis zur finalen Umsetzung begleiten wir Sie durch jeden Schritt. 
                Dabei legen wir besonderen Wert auf nachhaltige Lösungen und die Verwendung hochwertiger Materialien.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white/80 rounded-xl">
                  <div className="text-4xl font-bold text-[#1a4d2e] mb-2">15+</div>
                  <div className="text-stone-grey">Jahre Erfahrung</div>
                </div>
                <div className="text-center p-6 bg-white/80 rounded-xl">
                  <div className="text-4xl font-bold text-[#1a4d2e] mb-2">500+</div>
                  <div className="text-stone-grey">Projekte</div>
                </div>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d2e] to-[#4f9a6f] flex items-center justify-center">
                <div className="text-white/30 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-lg">Platzhalter für Bild</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="pt-0 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Unsere Leistungen</h2>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
              Von der Planung bis zur Umsetzung – wir bieten Ihnen umfassende Dienstleistungen rund um Ihren Garten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#4f9a6f]">
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">Gartengestaltung</h3>
              <p className="text-[#6b7280]">
                Individuelle Planung und Gestaltung Ihres Gartens nach Ihren Wünschen und Vorstellungen.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#4f9a6f]">
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">Pflasterarbeiten</h3>
              <p className="text-[#6b7280]">
                Professionelle Verlegung von Pflastersteinen für Einfahrten, Wege und Terrassen.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#4f9a6f]">
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">Baumpflege</h3>
              <p className="text-[#6b7280]">
                Fachgerechter Baumschnitt und Baumpflege für gesunde und schöne Bäume.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#4f9a6f]">
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">Rasenpflege</h3>
              <p className="text-[#6b7280]">
                Regelmäßige Pflege, Düngung und Neuanlage von Rasenflächen für einen grünen Garten.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#4f9a6f]">
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">Zaunbau</h3>
              <p className="text-[#6b7280]">
                Montage und Installation von Zäunen aller Art für Sichtschutz und Sicherheit.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-[#4f9a6f]">
              <div className="w-12 h-12 bg-[#1a4d2e] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1a4d2e] mb-3">Winterdienst</h3>
              <p className="text-[#6b7280]">
                Zuverlässiger Räum- und Streudienst für sichere Wege im Winter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Unsere Projekte</h2>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
              Ein Einblick in unsere abgeschlossenen Projekte und Arbeiten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery placeholders */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative group overflow-hidden rounded-xl shadow-lg aspect-square bg-gradient-to-br from-[#1a4d2e] to-[#4f9a6f]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/50 text-center">
                    <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm">Projekt {item}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold">Projektdetails ansehen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Kontakt aufnehmen</h2>
            <p className="text-lg text-white max-w-2xl mx-auto drop-shadow-lg">
              Haben Sie Fragen oder wünschen Sie ein unverbindliches Angebot? Kontaktieren Sie uns!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1a4d2e]">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#1a4d2e]/20 text-[#1a4d2e] placeholder-[#1a4d2e]/50 focus:outline-none focus:ring-2 focus:ring-[#4f9a6f]"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1a4d2e]">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#1a4d2e]/20 text-[#1a4d2e] placeholder-[#1a4d2e]/50 focus:outline-none focus:ring-2 focus:ring-[#4f9a6f]"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#1a4d2e]">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#1a4d2e]/20 text-[#1a4d2e] placeholder-[#1a4d2e]/50 focus:outline-none focus:ring-2 focus:ring-[#4f9a6f]"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1a4d2e]">Nachricht</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-[#1a4d2e]/20 text-[#1a4d2e] placeholder-[#1a4d2e]/50 focus:outline-none focus:ring-2 focus:ring-[#4f9a6f]"
                    placeholder="Ihre Nachricht an uns"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#4f9a6f] text-white rounded-lg font-semibold hover:bg-[#5fb080] transition-colors"
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
                    <div className="w-10 h-10 bg-[#4f9a6f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Adresse</p>
                      <p className="text-white/80">Ihre Straße 123<br />12345 Stadt</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#4f9a6f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Telefon</p>
                      <p className="text-white/80">+49 123 456789</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#4f9a6f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">E-Mail</p>
                      <p className="text-white/80">info@dimulo-gartenbau.de</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-[#4f9a6f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-white">Öffnungszeiten</p>
                      <p className="text-white/80">Mo-Fr: 7:00 - 18:00 Uhr<br />Sa: 8:00 - 14:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3 text-[#1a4d2e]">Servicegebiet</h4>
                <p className="text-[#1a4d2e]">
                  Wir sind in der gesamten Region tätig und bieten unsere Dienstleistungen im Umkreis von 50 km an.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#6b7280] text-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Garten- und Landschaftsbau<br />Di Mulo Fabio</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Ihr zuverlässiger Partner für professionelle Gartengestaltung und Landschaftspflege in der Region.
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
                &copy; 2025 Garten- und Landschaftsbau Di Mulo Fabio. Alle Rechte vorbehalten.
              </p>
              <p className="text-white/70 text-sm">
                Designed with <span className="text-[#4f9a6f]">♥</span> in Deutschland
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
