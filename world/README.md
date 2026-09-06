# 🌍 Our World — RandomTyms

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Three.js](https://img.shields.io/badge/Built%20With-Three.js-black?logo=three.js)
![No Build](https://img.shields.io/badge/Build-None-brightgreen)
![PWA](https://img.shields.io/badge/Platform-Web%20%2F%20PWA-blue)

A free, kid-safe 3D globe. Tap a country to learn its capital, language, and one classroom fact — in English or Tamil. Built for the [RandomTyms](https://randomtyms.github.io) learning hub by Ganga Ponnu — zero logins, zero ads.

🚀 **[Launch Interactive Globe](https://randomtyms.github.io/world/)**  
Sister app to the [3D Solar System](https://randomtyms.github.io/solar/).

---

### 🛠️ Architecture & Integration

* **3D Globe Core:** Three.js country meshes on a spinning Earth, with drag-to-orbit and fly-to camera tweening.
* **Classroom facts:** Capitals, languages, and one kid-safe fact per country. No Wikipedia, no ads.
* **L & V Quiz:** Eight-question tap-the-country challenge with two tries. Lokesh asks, Varsha marks right or wrong, both give the final score.
* **Tamil + English:** Full UI toggle, remembered on the same device.
* **Co-Created via Mobile Prompts:** Architected with AI assistance (@grok), matching the solar viewer’s tiny file layout so it can be edited from a phone.

---

### 🎯 Who It's For

* **Class 3–8 Learners:** Capitals, continents, and a spinning globe they can touch.
* **Classrooms & Smartboards:** Pause the spin for Q&A. Tamil for Tamil-medium rooms.
* **Parents:** Safe screen-time in any mobile browser. No install, no login.

---

### 🎮 Controls

* **Drag:** Orbit the globe.
* **Tap country / chip:** Fly to that land. India chip first, then continents.
* **Pause / Spin:** Freeze or resume auto-rotate.
* **Speed (Slow / Medium / Fast):** How fast Earth turns.
* **See all:** Pull back to a wide view.
* **L & V Quiz:** Eight-question quiz. Tap the country that matches the capital.
* **தமிழ் / English:** Switch the whole overlay.

*(Country shapes are simplified so the globe stays light on a phone.)*

---

### 🗺️ Map note

This globe is a **classroom learning tool**, not an official map.

* Borders and names come from a simplified world dataset ([Natural Earth](https://www.naturalearthdata.com/) via world-atlas). Small islands and exact lines are missing on purpose.
* Some places on Earth have **disputed boundaries or more than one name**. What you see here is a common school-atlas view, not a political claim.
* Capitals follow everyday textbook use (for example, Pretoria for South Africa’s administrative capital).
* Facts are written for Class 3–8. They are short and kid-safe, not a full geography syllabus.

If a teacher or parent spots a name that should change for their classroom, tell RandomTyms — we can update the list.

---

### 📂 Directory Structure

Same shape as `solar/`. Drop this folder next to it.

| File | Role |
| :--- | :--- |
| `index.html` | Viewport, HUD, and overlay styles |
| `world.js` | Three.js globe, country data, quiz, Tamil copy |
| `lokesh.png` / `varsha.png` | Quiz faces (cropped from hub art) |
| `world-preview.jpg` | Share image for WhatsApp / X |
| `README.md` | Documentation |

Upload the **`world`** folder only. Do not upload `node_modules` or the Grok project files.

Live URL after GitHub Pages publishes: `https://randomtyms.github.io/world/`
