# Garten- und Landschaftsbau Di Mulo Fabio

Eine moderne, responsive Website für das Landschaftsbau-Unternehmen "Garten- und Landschaftsbau Di Mulo Fabio".

## 🌿 Über das Projekt

Diese Website wurde mit Next.js 15, TypeScript und Tailwind CSS entwickelt und präsentiert die Dienstleistungen und Projekte des Landschaftsbau-Unternehmens in einem modernen, aber erdigen Design.

### Farbpalette
- **Dunkelgrün** (#1a4d2e): Primärfarbe
- **Hellgrün** (#4f9a6f): Sekundärfarbe  
- **Steingrau** (#6b7280): Neutralfarbe
- **Weiß** (#ffffff): Hintergrund

## 🚀 Erste Schritte

### Voraussetzungen
- Node.js 18.17 oder höher
- npm, yarn, pnpm oder bun

### Installation

1. Entwicklungsserver starten:

```bash
npm run dev
# oder
yarn dev
# oder
pnpm dev
# oder
bun dev
```

2. Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

## 📁 Projektstruktur

```
landschaftsbaudefabio/
├── src/
│   └── app/
│       ├── globals.css      # Globale Styles mit Custom Properties
│       ├── layout.tsx        # Root Layout (Deutsch)
│       └── page.tsx          # Hauptseite mit allen Sektionen
├── public/                   # Statische Assets
├── .github/
│   └── copilot-instructions.md  # Copilot-Anweisungen
└── README.md
```

## 📄 Seiten-Sektionen

- **Hero**: Einladender Bereich mit Firmennamen und Call-to-Actions
- **Leistungen**: 6 Service-Karten (Gartengestaltung, Pflasterarbeiten, Baumpflege, etc.)
- **Galerie**: Projektübersicht mit 6 Platzhaltern für Bilder
- **Kontakt**: Kontaktformular und Unternehmensinformationen
- **Footer**: Links und rechtliche Informationen

## 🎨 Design-Prinzipien

- Modern und clean, aber nicht zu fancy
- Passend zur Natur des Landschaftsbaus
- Voll responsive (Mobile-First)
- Sanfte Animationen und Hover-Effekte
- Klare Typografie mit Geist-Schriftarten

## 🛠️ Technologie-Stack

- **Framework**: Next.js 15 mit App Router
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS
- **Schriftarten**: Geist & Geist Mono
- **Icons**: Heroicons (SVG)

## 📝 Nächste Schritte

1. **Bilder hinzufügen**: Ersetzen Sie die Platzhalter in der Galerie-Sektion mit echten Projekt-Fotos
2. **Kontaktformular verbinden**: Backend-Integration für das Kontaktformular
3. **SEO optimieren**: Meta-Tags und strukturierte Daten hinzufügen
4. **Google Maps**: Standort-Karte in der Kontakt-Sektion einbinden
5. **Impressum & Datenschutz**: Rechtliche Seiten erstellen

## 🚀 Deployment

Die Website kann einfach auf verschiedenen Plattformen deployed werden:

### Vercel (empfohlen)
```bash
npm run build
# Projekt mit Vercel verbinden
```

### Andere Plattformen
- Netlify
- AWS Amplify
- Docker Container

## 📚 Weitere Ressourcen

- [Next.js Dokumentation](https://nextjs.org/docs)
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs)
- [TypeScript Dokumentation](https://www.typescriptlang.org/docs)

## 📄 Lizenz

© 2025 Garten- und Landschaftsbau Di Mulo Fabio. Alle Rechte vorbehalten.
