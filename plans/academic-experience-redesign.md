# Academic Experience Section Redesign Plan

## Overview
Redesign the Academic Experience Section in index.html to replace emoji-based cards with image-based cards using Unsplash educational-themed images.

## Current Section (lines 717-763)
- **Layout**: 4-column grid with emoji icons
- **Cards**: STEM Excellence, Humanities, Arts & Creativity, Innovation Projects
- **Style**: Simple cards with gradient backgrounds and emoji icons

## Proposed Redesign

### Visual Concept
```
┌─────────────────────────────────────────────────────┐
│              Academic Excellence                     │
│      Our curriculum prepares students...             │
├─────────────┬─────────────┬─────────────┬───────────┤
│  [IMAGE]    │  [IMAGE]    │  [IMAGE]    │  [IMAGE]  │
│  STEM       │  Humanities │  Arts       │Innovation │
│  Overlay    │  Overlay    │  Overlay    │  Overlay  │
│  Text →     │  Text →     │  Text →     │  Text →   │
└─────────────┴─────────────┴─────────────┴───────────┘
```

### Image Selection (Unsplash)
| Card | Unsplash Image | Description |
|------|----------------|-------------|
| STEM Excellence | `https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80` | Science/lab setting |
| Humanities | `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80` | Library/books |
| Arts & Creativity | `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80` | Art/creative |
| Innovation Projects | `https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80` | Technology/tech |

### HTML Changes
**Lines 717-763**: Replace current academic cards with image-based design

```html
<!-- New Academic Card Structure -->
<div class="academic-card card-hover">
    <div class="academic-card-image">
        <img src="https://images.unsplash.com/..." alt="STEM Excellence">
        <div class="academic-card-overlay"></div>
    </div>
    <div class="academic-card-content">
        <div class="academic-icon-wrapper">
            <span class="academic-icon-small">🔬</span>
        </div>
        <h3>STEM Excellence</h3>
        <p>Cutting-edge science, technology, engineering, and mathematics programs.</p>
        <a href="academics.html#stem" class="academic-link">Learn More →</a>
    </div>
</div>
```

### CSS Changes (index.html inline styles)

```css
/* Academic Card with Image */
.academic-card {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    min-height: 320px;
    background: var(--color-bg-secondary);
}

.academic-card-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.academic-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.academic-card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(30, 41, 59, 0.3) 0%, rgba(30, 41, 59, 0.9) 100%);
}

.academic-card:hover .academic-card-image img {
    transform: scale(1.1);
}

.academic-card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-xl);
    color: var(--text-inverse);
    z-index: 2;
}

.academic-icon-wrapper {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
    font-size: var(--text-xl);
}

.academic-card-content h3 {
    margin-bottom: var(--space-sm);
    color: var(--text-inverse);
}

.academic-card-content p {
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: var(--space-md);
    font-size: var(--text-sm);
}

.academic-card-content .academic-link {
    color: var(--color-accent-coral);
}

.academic-card:hover .academic-card-content .academic-link {
    color: var(--text-inverse);
}
```

### Responsive Design
- **Desktop (1200px+)**: 4 columns
- **Tablet (991px)**: 2 columns x 2 rows
- **Mobile (767px)**: 1 column

## Implementation Steps

1. **Update index.html** (lines 717-763)
   - Replace HTML structure for academic cards
   - Add image URLs from Unsplash

2. **Update inline styles** (index.html lines 251-325)
   - Add new academic card styles with image backgrounds
   - Keep existing hover effects

3. **Update responsive.css**
   - Add media queries for academic card grid

## Files to Modify
- `index.html` - Section HTML and inline CSS
- `css/responsive.css` - Responsive breakpoints (if needed)

## Estimated Changes
- HTML: ~50 lines modified
- CSS: ~60 lines added
