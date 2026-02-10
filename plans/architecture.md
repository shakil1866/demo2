# Premium Educational Website - Architecture & Design Document

## Executive Summary

This document outlines the complete architecture and design plan for a premium, next-generation educational website. The site will be built using pure HTML, CSS, and JavaScript with Spline for 3D elements and GSAP for animations, creating an innovative, emotional, and future-ready user experience.

---

## 1. Project Structure

```
demo4/
├── index.html                    # Homepage
├── css/
│   ├── main.css                  # Main stylesheet
│   ├── components.css           # Reusable components
│   ├── animations.css           # Animation utilities
│   └── responsive.css          # Media queries
├── js/
│   ├── main.js                  # Core functionality
│   ├── animations.js            # GSAP animations
│   ├── navigation.js            # Navigation interactions
│   ├── loader.js                # Page loader logic
│   └── components.js            # Component interactions
├── assets/
│   ├── images/                  # Image assets
│   ├── icons/                   # SVG icons
│   ├── spline/                  # Spline 3D exports
│   └── fonts/                   # Custom fonts
├── pages/
│   ├── about.html
│   ├── academics.html
│   ├── student-life.html
│   ├── admissions.html
│   ├── giving.html
│   ├── blog.html
│   └── contact.html
└── plans/
    └── architecture.md          # This document
```

---

## 2. Design System

### 2.1 Color Palette

```css
:root {
  /* Base Colors */
  --color-bg-primary: #FAFAFA;
  --color-bg-secondary: #FFFFFF;
  --color-bg-tertiary: #F5F5F7;
  
  /* Deep Navy / Charcoal / Midnight Blue */
  --color-primary: #1A1A2E;
  --color-primary-light: #16213E;
  --color-primary-dark: #0F0F1A;
  
  /* Electric Blue / Teal */
  --color-accent-blue: #0066FF;
  --color-accent-teal: #00D4AA;
  
  /* Coral / Warm Gold */
  --color-accent-coral: #FF6B6B;
  --color-accent-gold: #FFD700;
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%);
  --gradient-accent: linear-gradient(135deg, #0066FF 0%, #00D4AA 100%);
  --gradient-gold: linear-gradient(135deg, #FFD700 0%, #FF8C00 100%);
  
  /* Text Colors */
  --text-primary: #1A1A2E;
  --text-secondary: #4A4A6A;
  --text-muted: #8A8A9A;
  --text-inverse: #FFFFFF;
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.2);
  --glass-blur: 20px;
  
  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(26, 26, 46, 0.08);
  --shadow-md: 0 8px 32px rgba(26, 26, 46, 0.12);
  --shadow-lg: 0 16px 64px rgba(26, 26, 46, 0.16);
  --shadow-glow: 0 0 40px rgba(0, 102, 255, 0.3);
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;
  --space-2xl: 8rem;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.4s ease;
  --transition-slow: 0.6s ease;
}
```

### 2.2 Typography

```css
:root {
  /* Primary Font - Modern Sans-Serif */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  /* Display Font - Bold Headlines */
  --font-display: 'Plus Jakarta Sans', var(--font-primary);
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  --text-7xl: 4.5rem;
  
  /* Font Weights */
  --weight-light: 300;
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;
  
  /* Line Heights */
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

### 2.3 Component Classes

```css
/* Glassmorphism Panel */
.glass-panel {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
}

/* Card Hover Effect */
.card-hover {
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-lg);
}

/* 3D Tilt Effect */
.tilt-card {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.tilt-card:hover {
  transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
}

/* Gradient Text */
.text-gradient {
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Section Padding */
.section {
  padding: var(--space-2xl) var(--space-xl);
}

@media (max-width: 768px) {
  .section {
    padding: var(--space-xl) var(--space-lg);
  }
}
```

---

## 3. Page Architecture

### 3.1 Homepage (`index.html`)

```
┌─────────────────────────────────────────────────────────┐
│  🎯 HERO SECTION                                          │
│  ├─ Full-screen 3D background (Spline)                   │
│  ├─ Animated headline: "Learn to Be Future-Ready, Today" │
│  ├─ Supporting paragraph                                  │
│  ├─ CTA Buttons: Apply Now, Schedule a Visit            │
│  └─ Scroll indicator animation                           │
├─────────────────────────────────────────────────────────┤
│  📖 ABOUT OVERVIEW                                        │
│  ├─ Two-column layout                                     │
│  ├─ Emotional storytelling text                          │
│  ├─ Image/video with floating depth effect               │
│  └─ Highlights: Personalized learning, Mentorship       │
├─────────────────────────────────────────────────────────┤
│  ⭐ WHY CHOOSE US                                         │
│  ├─ 4-6 feature cards (grid layout)                      │
│  ├─ Icons/mini 3D objects                                │
│  └─ Hover: lift, glow, slight rotation                   │
├─────────────────────────────────────────────────────────┤
│  📚 ACADEMIC EXPERIENCE                                  │
│  ├─ Interactive cards: STEM, Humanities, Arts,           │
│  │  Innovation Projects                                   │
│  └─ Expand on hover/click                                 │
├─────────────────────────────────────────────────────────┤
│  🚀 STUDENT PROJECTS & INNOVATION                        │
│  ├─ Horizontal scroll or masonry grid                    │
│  └─ Lightbox animation on click                          │
├─────────────────────────────────────────────────────────┤
│  🎓 GRADUATE OUTCOMES                                     │
│  ├─ Animated counters                                    │
│  └─ Timeline animation                                   │
├─────────────────────────────────────────────────────────┤
│  💬 TESTIMONIALS                                          │
│  ├─ Motion cards                                         │
│  └─ Parent, student, alumni voices                       │
├─────────────────────────────────────────────────────────┤
│  📣 CALL TO ACTION                                        │
│  ├─ Emotional background                                 │
│  └─ "Your Future Starts Here" messaging                  │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│  🏠 HOME  ▼   ABOUT ▼    ACADEMICS ▼    STUDENT LIFE ▼         │
│                                                                 │
│  • Home                                                         │
│  • About                                                        │
│    ├─ Vision & Mission                                          │
│    ├─ Values                                                    │
│    ├─ Leadership                                               │
│    └─ Faculty & Staff                                          │
│  • Academics                                                    │
│    ├─ Curriculum                                                │
│    ├─ Project-Based Learning                                    │
│    ├─ STEM                                                      │
│    ├─ Humanities                                                │
│    └─ College Credit & Internships                              │
│  • Student Life                                                 │
│    ├─ Clubs                                                     │
│    ├─ Athletics                                                 │
│    └─ Community & Faith                                        │
│  • Admissions                                                   │
│    ├─ How to Apply                                              │
│    ├─ Tuition & Financial Aid                                  │
│    └─ FAQs                                                      │
│  • Giving / Support                                             │
│  • Blog / News                                                  │
│  • Contact                                                      │
│                                                                 │
│  CTA: [Apply Now]  [Schedule a Visit]                          │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Inner Pages Overview

| Page | Key Components | Unique Features |
|------|----------------|-----------------|
| **About** | Mission/Vision, Core Values, Leadership, Faculty, Timeline | Large typography, icon grid, hover reveal cards |
| **Academics** | Curriculum, PBL, STEM, Humanities, Pathways | Visual diagrams, step-by-step cards |
| **Student Life** | Clubs, Athletics, Community, Faith | Image-heavy joyful layouts, gallery |
| **Admissions** | Process, Tuition, Financial Aid, FAQs, Form | Step-by-step animation, accordion FAQs |
| **Giving** | Impact storytelling, Donation tiers, Events | Premium layouts, supporter recognition |
| **Blog** | Featured article, Grid, Category filters | Smooth transitions, pagination |
| **Contact** | Form, Map, Info, Socials | Animated form, hover glow effects |

---

## 4. Animation Strategy

### 4.1 GSAP Animations

```javascript
// Page Loader Animation
gsap.timeline()
  .from('.loader-logo', {
    scale: 0,
    rotation: 360,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)'
  })
  .to('.loader-logo', {
    scale: 1.5,
    rotation: 720,
    duration: 1,
    ease: 'power2.inOut'
  })
  .to('.loader', {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      document.querySelector('.loader').style.display = 'none';
      gsap.from('.hero-content', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
      });
    }
  });

// Scroll Animations
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.animate-on-scroll').forEach(element => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  });
});
```

### 4.2 3D Elements (Spline Integration)

```html
<!-- Spline 3D Scene Embed -->
<div class="spline-container">
  <script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js"></script>
  <spline-viewer 
    url="https://prod.spline.design/YOUR-SCENE-URL/scene.splinecode"
    class="spline-scene"
  ></spline-viewer>
</div>
```

### 4.3 CSS Animations

```css
/* Floating Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.floating {
  animation: float 6s ease-in-out infinite;
}

/* Gradient Text Animation */
@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.text-gradient-animate {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}

/* Scroll Indicator */
@keyframes scroll-bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.scroll-indicator {
  animation: scroll-bounce 2s infinite;
}

/* Card Hover Glow */
.card-glow:hover {
  box-shadow: 
    0 0 20px rgba(0, 102, 255, 0.3),
    0 0 40px rgba(0, 102, 255, 0.2),
    0 0 60px rgba(0, 102, 255, 0.1);
}
```

---

## 5. JavaScript Modules

### 5.1 Core Functionality (`main.js`)

```javascript
// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavigation();
  initScrollAnimations();
  initParallax();
  initTiltEffects();
});

// Page Loader
function initLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 2500);
    });
  }
}

// Sticky Navigation with Glass Effect
function initNavigation() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}
```

### 5.2 Navigation Module (`navigation.js`)

```javascript
// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// Dropdown Submenus
document.querySelectorAll('.has-dropdown').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.dropdown').classList.add('show');
  });
  item.addEventListener('mouseleave', () => {
    item.querySelector('.dropdown').classList.remove('show');
  });
});
```

---

## 6. Responsive Breakpoints

```css
/* Desktop Large (1400px+) */
@media (min-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

/* Desktop (1200px) */
@media (max-width: 1199px) {
  .container {
    max-width: 1140px;
  }
}

/* Tablet Landscape (992px) */
@media (max-width: 991px) {
  :root {
    --space-2xl: 6rem;
    --space-xl: 3rem;
  }
  
  .navbar .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: var(--color-primary);
    flex-direction: column;
    padding: 6rem 2rem;
    transition: var(--transition-normal);
  }
  
  .navbar .nav-links.active {
    right: 0;
  }
}

/* Tablet Portrait (768px) */
@media (max-width: 767px) {
  :root {
    --text-7xl: 3.5rem;
    --text-6xl: 2.5rem;
    --space-2xl: 4rem;
    --space-xl: 2rem;
  }
  
  .hero h1 {
    font-size: var(--text-5xl);
  }
}

/px) */
@media* Mobile (576 (max-width: 575px) {
  :root {
    --text-7xl: 2.5rem;
    --text-6xl: 2rem;
    --text-5xl: 1.75rem;
    --space-2xl: 3rem;
    --space-xl: 1.5rem;
    --radius-lg: 16px;
  }
  
  .container {
    padding: 0 1rem;
  }
}
```

---

## 7. Performance Optimization

### 7.1 Lazy Loading

```javascript
// Lazy Load Images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### 7.2 CSS Performance

```css
/* Use transform and opacity for animations */
.animated-element {
  will-change: transform, opacity;
}

/* Optimize fonts */
font-display: swap;
```

---

## 8. Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

---

## 9. File Dependencies

### External Libraries
- **GSAP**: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js`
- **GSAP ScrollTrigger**: `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js`
- **Spline Viewer**: `https://unpkg.com/@splinetool/viewer@1.0.54/build/spline-viewer.js`
- **Google Fonts**: Inter, Plus Jakarta Sans

### Internal Files
- `css/main.css` (main stylesheet)
- `css/responsive.css` (media queries)
- `js/main.js` (core functionality)
- `js/animations.js` (GSAP animations)
- `js/navigation.js` (navigation logic)

---

## 10. Implementation Priority

### Phase 1: Foundation
1. [ ] Create project structure
2. [ ] Build CSS design system
3. [ ] Set up JavaScript modules
4. [ ] Implement page loader

### Phase 2: Homepage
1. [ ] Hero section with 3D
2. [ ] Navigation system
3. [ ] About overview
4. [ ] Features section
5. [ ] Academic cards
6. [ ] Testimonials & CTA

### Phase 3: Inner Pages
1. [ ] About page
2. [ ] Academics page
3. [ ] Student Life page
4. [ ] Admissions page
5. [ ] Giving page
6. [ ] Blog page
7. [ ] Contact page

### Phase 4: Polish
1. [ ] Scroll animations
2. [ ] Responsive optimization
3. [ ] Performance tuning
4. [ ] Cross-browser testing
5. [ ] Final QA

---

## 11. Design Preview

### Visual Style
- **Modern**: Clean lines, ample whitespace, premium typography
- **Luxurious**: Glassmorphism, subtle gradients, smooth animations
- **Emotional**: Storytelling content, human-focused imagery
- **Futuristic**: 3D elements, motion design, innovative interactions

### Key Visual Elements
- Floating 3D shapes in background
- Glass panels with blur effects
- Gradient text highlights
- Animated counters and timelines
- Parallax scrolling
- Hover tilt effects on cards
- Smooth page transitions

---

## 12. Next Steps

1. **Approve Architecture Document** - Review and confirm design direction
2. **Create Initial Files** - Set up HTML/CSS/JS structure
3. **Implement Design System** - Build CSS variables and components
4. **Develop Homepage** - Create hero, navigation, and sections
5. **Build Inner Pages** - Develop all secondary pages
6. **Add Animations** - Implement GSAP animations and 3D elements
7. **Optimize & Test** - Performance tuning and cross-browser testing
8. **Final Polish** - Quality assurance and refinements

---

*Document Version: 1.0*  
*Last Updated: February 2024*  
*Architecture: Pure HTML/CSS/JS with Spline and GSAP*
