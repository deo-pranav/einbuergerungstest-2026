# Einbürgerungstest 2026 — Web & Android Standalone App

A professional, 100% offline, privacy-first trainer for the **German citizenship test (Einbürgerungstest & Test „Leben in Deutschland“)**:
- **300 Nationwide Questions** (Stand 07.05.2025, BAMF-Katalog)
- **160 State Questions across all 16 German Federal States**
- **41 Official High-Resolution Question Illustrations**
- **Trilingual Support**: German (`DE`), English (`+ EN`), and Hindi (`+ HI`)

Available as both a **standalone zero-dependency website (PWA)** and a **native standalone Android App**.

---

## 1. Web Application (PWA / Offline)

The web application runs entirely client-side with zero server dependencies:

```bash
xdg-open index.html      # Open directly in any browser
```

### Features:
- **Zero-Build & Zero-Backend**: All 460 questions load instantly into client memory with 0ms network latency.
- **PWA Ready**: Includes `manifest.json` and offline `sw.js` (Service Worker) allowing "Add to Home Screen" on Chrome, Edge, and iOS Safari.
- **Interactive State Selector**: Switch between all 16 Bundesländer with instant updates.
- **Trilingual Switcher**: Toggle between `DE` (exam conditions), `+ EN` (English subtitles), and `+ HI` (Hindi subtitles).
- **Intelligent Spaced Repetition (SRS)**: Starred questions (⭐) and missed questions history.
- **460-Question Searchable Table**: Full-text search and printable study sheet (`Ctrl + P`).
- **Themes**: High-contrast Light Mode (☀️), Dark Mode (🌙), and Auto (💻).

---

## 2. Android Standalone App (Capacitor)

The native Android project is isolated under [`android/`](file:///home/deopranav/Documents/German/Einburgurungstest/android) and built with **Capacitor 6**.

### Native Mobile Enhancements:
- **Hardware Back Button**: Smoothly returns to practice overview or confirms exam abort instead of exiting the app.
- **Adaptive Launcher Icons**: High-resolution icons generated across all mipmap densities (`mdpi` to `xxxhdpi`).
- **Edge-to-Edge Navigation**: Synchronized status bar matching light/dark theme.
- **Google Play Compliance**: Targets Android 14+ (API 34/35), 64-bit compliant, zero tracking.

### Android Developer Workflow:

```bash
# 1. Package web assets into www/ and sync to Android
npm run sync:android

# 2. Open project directly in Android Studio
npm run open:android

# 3. Build APK / App Bundle via Gradle
npm run build:apk        # Builds debug APK
npm run build:bundle     # Builds release AAB for Google Play Console
```

---

## 3. Project Architecture

```
├── index.html                   # Web app shell (~150 lines)
├── manifest.json                # PWA manifest
├── sw.js                        # Offline cache service worker
├── package.json                 # Capacitor & build scripts
├── capacitor.config.json        # Android app settings (de.einbuergerungstest.app)
│
├── css/
│   ├── theme.css                # Light/Dark design tokens
│   └── style.css                # Responsive layout & component styles
│
├── js/
│   ├── state.js                 # AppState & LocalStorage persistence
│   ├── i18n.js                  # Trilingual resolver & theme switcher
│   ├── session.js               # Exam & practice session engine
│   ├── views/
│   │   ├── exam.js              # 33-question exam simulator
│   │   ├── practice.js          # Practice hub, state drills, & SRS review
│   │   └── table.js             # 460-question searchable explorer
│   └── app.js                   # Main coordinator & hardware back-button listener
│
├── data/
│   ├── questions_all.json       # Clean JSON dataset (460 Qs, 16 states, DE/EN/HI)
│   └── questions_all.js         # Offline JS database bundle
│
├── assets/
│   ├── q0NN.jpg                 # 41 official BAMF question illustrations
│   ├── icon-192.png             # PWA launcher icon
│   └── icon-512.png             # PWA splash icon
│
├── android/                     # Isolated native Android Studio project
└── tools/                       # Python ETL pipelines & image cropping scripts
```

---

## 4. Data Provenance & Verification

- Questions and illustrations are extracted from the official **BAMF Gesamtfragenkatalog** (Stand 07.05.2025).
- Solutions are cross-verified across multiple independent public datasets with 0 contradictions.
- **Privacy Guarantee**: 100% offline, zero analytics, zero external network requests.
