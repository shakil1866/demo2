# Navbar Redesign Plan

## Current Issues Identified

1. **Mobile Dropdown Toggle**: Event listeners not properly attached on mobile
2. **Hamburger Menu**: Button exists but may not be properly visible/functional
3. **Dropdown Animation**: CSS transitions may not work smoothly in mobile view
4. **Navbar Scroll State**: Different pages have different scroll states (index.html needs JS to add scrolled class)
5. **Mobile Menu Overlay**: May not cover entire screen properly

## Design Goals

1. **Fully responsive** - Works seamlessly on all screen sizes
2. **Smooth animations** - Dropdown and mobile menu transitions
3. **Accessible** - Proper ARIA labels and keyboard navigation
4. **Consistent** - Same experience across all pages
5. **Performance** - Minimal JavaScript, CSS-heavy animations

## Proposed Changes

### 1. HTML Structure Updates

Create a consistent navbar HTML structure for all pages:

```html
<nav class="navbar" id="mainNavbar">
    <div class="navbar-container">
        <a href="index.html" class="navbar-brand">
            <span class="brand-icon">FA</span>
            <span class="brand-text">Future Academy</span>
        </a>

        <!-- Mobile Toggle Button -->
        <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>

        <!-- Navigation Links -->
        <div class="navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item nav-dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                        About
                        <svg class="dropdown-icon" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M7 10l5 5 5-5z"/>
                        </svg>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a href="about.html" class="dropdown-item">Vision & Mission</a></li>
                        <li><a href="about.html#values" class="dropdown-item">Core Values</a></li>
                        <li><a href="about.html#leadership" class="dropdown-item">Leadership</a></li>
                        <li><a href="about.html#faculty" class="dropdown-item">Faculty & Staff</a></li>
                    </ul>
                </li>
                <!-- More dropdown items... -->
            </ul>

            <div class="navbar-actions">
                <a href="admissions.html" class="btn btn-secondary">Apply Now</a>
                <a href="contact.html" class="btn btn-primary">Schedule a Visit</a>
            </div>
        </div>
    </div>
</nav>
```

### 2. CSS Updates (main.css)

- Add new navbar CSS with BEM naming convention
- Improve mobile menu styles with full-screen overlay
- Add smooth animations for dropdown and mobile menu
- Ensure proper z-index stacking

### 3. Responsive CSS Updates (responsive.css)

- Update mobile breakpoint styles (991px)
- Improve hamburger menu animation
- Fix dropdown positioning on mobile
- Add tablet-specific styles

### 4. JavaScript Updates (main.js)

- Rewrite initNavigation() with better scroll handling
- Rewrite initMobileDropdowns() with proper event delegation
- Add hamburger menu toggle functionality
- Improve accessibility attributes

## Files to Modify

1. **index.html** - Replace navbar structure
2. **about.html** - Replace navbar structure
3. **academics.html** - Replace navbar structure
4. **student-life.html** - Replace navbar structure
5. **admissions.html** - Replace navbar structure
6. **giving.html** - Replace navbar structure
7. **blog.html** - Replace navbar structure
8. **contact.html** - Replace navbar structure
9. **css/main.css** - Add/updated navbar styles
10. **css/responsive.css** - Add mobile-specific styles
11. **js/main.js** - Update navigation logic

## Implementation Steps

### Step 1: Create New CSS (main.css)
- Add `.navbar`, `.navbar-container`, `.navbar-brand` styles
- Add `.navbar-nav`, `.nav-item`, `.nav-link` styles
- Add `.nav-dropdown`, `.dropdown-menu`, `.dropdown-item` styles
- Add `.navbar-actions`, `.btn` styles

### Step 2: Create Mobile CSS (responsive.css)
- Add `.navbar-toggle` (hamburger button) styles
- Add `.navbar-collapse` mobile styles
- Add `.nav-dropdown.mobile-open` styles
- Add smooth transitions

### Step 3: Update JavaScript (main.js)
- Rewrite `initNavigation()` with scroll detection
- Add `initMobileMenu()` for hamburger toggle
- Fix `initMobileDropdowns()` for mobile dropdowns
- Add `handleResize()` for responsive behavior

### Step 4: Update All HTML Pages
- Replace existing navbar with new structure
- Ensure consistent class naming
- Update all 8 HTML files

## Testing Checklist

- [ ] Desktop: All links work, dropdowns hover properly
- [ ] Tablet (991px): Menu transforms correctly
- [ ] Mobile (767px): Hamburger menu appears and works
- [ ] Mobile: Dropdowns expand/collapse on tap
- [ ] Scroll: Navbar background changes on scroll
- [ ] Accessibility: Keyboard navigation works
- [ ] Performance: No lag in animations
- [ ] Cross-browser: Works in Chrome, Firefox, Safari, Edge

## Timeline Estimate

- Step 1 (CSS): 2 hours
- Step 2 (Responsive CSS): 1 hour
- Step 3 (JavaScript): 2 hours
- Step 4 (Update 8 HTML files): 1 hour
- Testing: 1 hour

**Total: ~7 hours**
