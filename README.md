# Syed Muhammad Ertaza | Front-End Portfolio 🚀

**Live Site:** [https://black-hat-exe.github.io/Portfolio/]

Hi, I'm Ertaza. I'm a Front-End Developer, UI Architect, and a BS IT student based in Sheikhupura, Pakistan. 

This repository holds the source code for my personal portfolio website. I could have easily used a WordPress theme, a Shopify drag-and-drop builder, or a bloated Bootstrap template to get this done in an hour. But I didn't. 

I built this entire multi-page architecture from scratch using pure HTML5, CSS3, and Vanilla JavaScript. I wanted a platform that actually proves I can write clean, responsive code and translate high-end designs into a functional reality.

## 🛠️ The Tech Stack
* **HTML5:** Semantic, accessible structure.
* **CSS3:** Custom CSS variables, Flexbox, CSS Grid, and advanced animations.
* **Vanilla JavaScript:** Intersection Observers for scroll-reveal animations and active navigation state management.
* **Deployment:** GitHub Pages
* **Zero Frameworks:** No React, no Tailwind, no templates. Just raw, hand-crafted code.

## 🧠 What I Learned (The Hard Way)
Building a premium, Vercel/Apple-inspired dark mode UI from scratch came with a lot of friction. Here is what I learned while engineering this site:

### 1. The Fixed Navigation Trap
I built a sleek, floating "island" navigation bar, but immediately realized that `position: fixed;` removes the element from the normal document flow. It caused my header text to slide up directly underneath the navigation bar, overlapping completely. I had to mathematically calculate and apply a hard `padding-top: 140px;` to the main container across all pages to push the content safely below the floating nav on all screen sizes.

### 2. The Bento Grid Illusion vs. Aspect Ratios
Initially, I tried to force my project screenshots into an asymmetrical "Bento Box" grid. It sounded cool in theory, but in practice, it brutally crushed the aspect ratio of my landscape UI screenshots, making them look stretched and cramped. I learned that sometimes, a clean, symmetrical CSS Grid (`repeat(auto-fit, minmax(320px, 1fr))`) is actually the most premium way to display landscape web architecture without distortion.

### 3. True Glassmorphism is More Than Opacity
Creating the "Glassmorphism Command Node" on my Contact page wasn't just about turning down the background opacity. I learned how to layer `backdrop-filter: blur(24px)` with subtle `rgba` borders, inner box-shadows, and a pulsing neon status indicator (`@keyframes` animation) to make the UI look like a physical pane of frosted glass floating over a glowing background.

## 🗂️ Project Architecture
The site is split into a clean, 4-page modular structure:
* `index.html` - The Hero landing and Core Skills Matrix.
* `portfolio.html` - The Project Vault (featuring my custom Glassmorphism and Neumorphism builds).
* `credentials.html` - The Trust Matrix (hosting my Cisco and Google Cloud verified credentials).
* `contact.html` - The Command Node for direct client onboarding.
* `style.css` - The master stylesheet governing the dark-mode aesthetic.
* `script.js` - The master logic file handling DOM manipulation and scroll observers.

## 🚀 Local Setup
If you want to run this locally:
1. Clone the repository: `git clone https://github.com/black-hat-exe/https://black-hat-exe.github.io/Portfolio/.git`
2. Open the folder in VS Code.
3. Launch `index.html` using the Live Server extension.

## 📬 Let's Connect
I am actively taking on freelance contracts for precise Figma-to-code translations, responsive UI layouts, and CSS bug fixes.
* **Upwork:** [My Profile](https://www.upwork.com/freelancers/~01eef1f01ace77c496?mp_source=share)
* **Hubstaff Talent:** [My Profile](https://hubstafftalent.net/profiles/syed-muhammad-ertaza)
* **Credly (Certifications):** [View Verification](https://www.credly.com/users/syed-muhammad-ertaza)

---
*Designed and hand-coded by Syed Muhammad Ertaza - 2026*
