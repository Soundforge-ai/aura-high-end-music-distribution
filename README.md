# 🎵 AURA - Said's World | High-End Music Distribution Platform

Een premium muziekdistributieplatform gebouwd met React, TypeScript en moderne web technologieën.

## ✨ Features

### 🎯 Core Functionaliteiten
- **Dashboard Overview** - Real-time analytics en metrics
- **Upload Wizard** - Intuïtieve track upload met metadata
- **Catalog Management** - Beheer je muziekcatalogus
- **Interactive Download Center** - Geanimeerde download interface
- **Artist Pages** - Gepersonaliseerde artiest profielen
- **Financial Dashboard** - Royalty tracking en uitbetalingen
- **Admin Panel** - Livestream beheer en platform administratie

### 🤖 AI-Powered Tools
- **Gemini Studio** - AI-gedreven marketing content generatie
- **Smart Marketing Assets** - Automatische social media posts
- **Track Analysis** - AI metadata en targeting suggesties
- **Artwork Concepts** - AI-gegenereerde artwork beschrijvingen

### 🎨 Design & UX
- **Glass Morphism UI** - Moderne transparante interface elementen
- **Dark Theme** - Premium OLED-black design
- **Responsive Design** - Werkt perfect op alle apparaten
- **Smooth Animations** - Vloeiende overgangen en micro-interacties
- **Interactive Elements** - Hover effecten en feedback

## 🚀 Tech Stack

- **Frontend**: React 19.2.0 + TypeScript
- **Styling**: Custom CSS met CSS Variables + Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **AI Integration**: Google Generative AI (Gemini)
- **Build Tool**: Vite
- **Authentication**: Context-based auth systeem

## 📦 Installation

1. **Clone de repository**
   ```bash
   git clone https://github.com/[jouw-username]/aura-music-distribution.git
   cd aura-music-distribution
   ```

2. **Installeer dependencies**
   ```bash
   npm install
   ```

3. **Environment variabelen**
   Maak een `.env` bestand aan in de root directory:
   ```env
   VITE_GEMINI_API_KEY=jouw_gemini_api_key_hier
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Ga naar `http://localhost:3000`

## 🔐 Demo Accounts

### Admin Account
- **Email**: `admin@aura.fm`
- **Password**: `admin123`
- **Toegang**: Volledige platform administratie

### Artist Account
- **Email**: `artist@aura.fm`
- **Password**: `artist123`
- **Toegang**: Artist-specifieke functies

## 🏗️ Project Structure

```
aura-music-distribution/
├── components/           # React componenten
│   ├── Dashboard.tsx    # Hoofd dashboard
│   ├── UploadWizard.tsx # Track upload interface
│   ├── InteractiveDownload.tsx # Download center
│   ├── GeminiStudio.tsx # AI content generatie
│   └── ...
├── contexts/            # React contexts
│   └── AuthContext.tsx  # Authenticatie logica
├── services/            # API services
│   └── geminiService.ts # Google AI integratie
├── styles.css          # Hoofd stylesheet
├── types.ts            # TypeScript type definities
└── App.tsx             # Hoofd applicatie component
```

## 🎨 Design System

### Kleuren Palette
- **Primary**: Deep OLED Black (`#030305`)
- **Accent Purple**: `#a855f7`
- **Accent Cyan**: `#06b6d4`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a1a1aa`

### Componenten
- **Glass Panels**: Transparante achtergronden met blur effecten
- **Gradient Buttons**: Purple-to-cyan gradients
- **Animated Elements**: Smooth hover en loading states

## 🚀 Deployment

### Build voor productie
```bash
npm run build
```

### Preview build
```bash
npm run preview
```

## 🤝 Contributing

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📝 License

Dit project is gelicenseerd onder de MIT License - zie het [LICENSE](LICENSE) bestand voor details.

## 👨‍💻 Author

**Said** - *Initial work* - [GitHub Profile]

## 🙏 Acknowledgments

- Google Generative AI voor AI functionaliteiten
- Lucide React voor prachtige iconen
- Recharts voor data visualisatie
- Tailwind CSS voor utility-first styling

---

*Gemaakt met ❤️ voor de muziekindustrie*