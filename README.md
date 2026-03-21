# Firdous Gallery | Premium 3D Paint Visualizer

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-performance, luxury web application built for **Firdous Gallery (Jatra, Birbhum)**, an authorized Berger Paints dealer. This project combines cutting-edge 3D rendering with real-time room visualization to bridge the gap between digital selection and physical application.

---

## 💎 Core Features

### 1. High-Performance 3D Hero
Utilizes **React Three Fiber (R3F)** and custom shaders to render a dynamic "Paint Orb" and particle field.
* **Optimization:** Capped Device Pixel Ratio (DPR) to 2.0 to prevent GPU thermal throttling on mobile devices.
* **Stability:** Wrapped in a custom `CanvasErrorBoundary` for graceful fallback on legacy browsers.

### 2. Chromatic Visualizer Engine
A custom-built visualization suite that uses multi-layer CSS blend modes (`multiply` + `soft-light`) and linear-gradient masking to simulate realistic paint behavior on architectural surfaces.

### 3. Global Color Sync (Context API)
Implemented a centralized `ColorProvider` using the **React Context API**. This ensures the 3D canvas, typography, and visualizer remain perfectly synchronized without "prop-drilling" or unnecessary re-renders.

### 4. Local SEO & Conversion Focus
* **JSON-LD Schema:** Injected structured data for `HomeGoodsStore` to dominate local search results in Birbhum.
* **Lead Generation:** Integrated WhatsApp API with pre-filled professional message templates.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Frontend** | React 18, Vite |
| **3D Rendering** | Three.js, @react-three/fiber, @react-three/drei |
| **Styling** | Tailwind CSS, Lucide Icons |
| **Animation** | Framer Motion |
| **State** | React Context API |

---

## 👨‍💻 Developer
**Milan Mahato** *First-year B.Tech, Cyber Security @ IIIT Manipur* GitHub: [@thefickleone](https://github.com/thefickleone)

---
*Project created for Firdous Gallery, Jatra, Birbhum, West Bengal.*
