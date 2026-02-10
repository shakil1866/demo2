/* ==========================================
   Premium Educational Website - Main JavaScript
   Core Functionality & Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Initialize all modules
    initPageLoader();
    initNavigation();
    initScrollAnimations();
    initParallax();
    initTiltEffects();
    initCounters();
    initAccordions();
    initLightbox();
    initPageTransitions();
    initMobileDropdowns();
    initSmoothScroll();
});

/* ==========================================
   Page Loader
   ========================================== */
function initPageLoader() {
    const loader = document.querySelector('.loader');
    if (!loader) return;

    const progressBar = loader.querySelector('.loader-progress-bar');
    const progress = { value: 0 };

    // Animate progress bar
    gsap.to(progress, {
        value: 100,
        duration: 2.5,
        ease: 'power2.inOut',
        onUpdate: function () {
            if (progressBar) {
                progressBar.style.width = progress.value + '%';
            }
        },
        onComplete: function () {
            // Hide loader
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut',
                onComplete: function () {
                    loader.style.display = 'none';

                    // Trigger hero animations
                    initHeroAnimations();

                    // Trigger scroll animations
                    triggerScrollAnimations();
                }
            });
        }
    });
}

/* ==========================================
   Navigation - Updated for Redesigned Navbar
   ========================================== */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarNav = document.querySelector('.navbar-nav');
    const pageHeader = document.querySelector('.page-header');

    // Sticky navbar with glass effect
    function handleScroll() {
        if (!navbar) return;

        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            if (pageHeader) {
                pageHeader.classList.add('scrolled');
            }
        } else {
            navbar.classList.remove('scrolled');
            if (pageHeader) {
                pageHeader.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Mobile menu toggle
    if (navbarToggle && navbarCollapse) {
        navbarToggle.addEventListener('click', function () {
            navbarCollapse.classList.toggle('active');
            navbarToggle.classList.toggle('active');

            // Prevent body scroll when menu is open
            document.body.style.overflow = navbarCollapse.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on a nav link
        if (navbarNav) {
            navbarNav.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    navbarCollapse.classList.remove('active');
                    navbarToggle.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });
        }
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (navbarCollapse && !navbarCollapse.contains(e.target) &&
            navbarToggle && !navbarToggle.contains(e.target)) {
            navbarCollapse.classList.remove('active');
            navbarToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Handle resize - close mobile menu on desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 991 && navbarCollapse && navbarCollapse.classList.contains('active')) {
            navbarCollapse.classList.remove('active');
            navbarToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ==========================================
   Mobile Dropdowns - Updated for New Structure
   ========================================== */
function initMobileDropdowns() {
    const navDropdowns = document.querySelectorAll('.nav-dropdown');

    function attachDropdownListeners() {
        const isMobile = window.innerWidth <= 991;

        navDropdowns.forEach(function (dropdown) {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (!toggle) return;

            // Clone to remove any existing event listeners
            const newToggle = toggle.cloneNode(true);
            toggle.parentNode.replaceChild(newToggle, toggle);

            if (isMobile) {
                newToggle.addEventListener('click', function (e) {
                    e.preventDefault();

                    // Check if this dropdown is already active
                    const wasActive = dropdown.classList.contains('active');

                    // Close all dropdowns first
                    navDropdowns.forEach(function (otherDropdown) {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });

                    // Toggle current dropdown (activate if it wasn't active)
                    if (!wasActive) {
                        dropdown.classList.add('active');
                    } else {
                        dropdown.classList.remove('active');
                    }
                });
            }
        });
    }

    // Attach listeners immediately
    attachDropdownListeners();

    // Re-attach on window resize to handle orientation changes
    window.addEventListener('resize', function () {
        // Remove active state from all dropdowns on resize
        navDropdowns.forEach(function (dropdown) {
            dropdown.classList.remove('active');
        });
        attachDropdownListeners();
    });
}

/* ==========================================
   Scroll Animations
   ========================================== */
function initScrollAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .card, .feature-card, .stat-item, .testimonial-card, .accordion-item, .timeline-item, .hero-badge, .hero-stats, .hero-trust');

    animatedElements.forEach(function (element, index) {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
                once: false
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out'
        });
    });

    // Animate section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(function (header) {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out'
        });
    });
}

function triggerScrollAnimations() {
    // Initial trigger for elements already in view
    const elements = document.querySelectorAll('.animate-on-scroll, .hero-badge, .hero-stats, .hero-trust, .stat-item');
    elements.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add('visible');
        }
    });
}

/* ==========================================
   Hero Animations
   ========================================== */
function initHeroAnimations() {
    // Animations removed - content displays immediately
    const floatingElements = document.querySelectorAll('.float, .floating');
    floatingElements.forEach(function (element, index) {
        gsap.to(element, {
            y: -20,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3
        });
    });
}

/* ==========================================
   Parallax Effects
   ========================================== */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;

        parallaxElements.forEach(function (element) {
            const speed = parseFloat(element.dataset.parallax) || 0.5;
            gsap.to(element, {
                y: scrollY * speed,
                duration: 0.5,
                ease: 'power1.out'
            });
        });
    });
}

/* ==========================================
   3D Tilt Effects
   ========================================== */
function initTiltEffects() {
    const tiltCards = document.querySelectorAll('.tilt-card');

    if (tiltCards.length === 0) return;

    tiltCards.forEach(function (card) {
        const content = card.querySelector('.tilt-content') || card;

        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(content, {
                rotationX: rotateX,
                rotationY: rotateY,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(content, {
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}

/* ==========================================
   Animated Counters
   ========================================== */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    counters.forEach(function (counter) {
        const target = parseInt(counter.dataset.count);
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';

        gsap.to(counter, {
            scrollTrigger: {
                trigger: counter,
                start: 'top 80%',
                once: true
            },
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            ease: 'power2.out',
            onUpdate: function () {
                counter.innerHTML = Math.ceil(counter.innerHTML) + suffix;
            }
        });
    });
}

/* ==========================================
   Accordion
   ========================================== */
function initAccordions() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item) {
        const header = item.querySelector('.accordion-header');
        if (!header) return;

        header.addEventListener('click', function () {
            const isActive = item.classList.contains('active');

            // Close all items
            accordionItems.forEach(function (otherItem) {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/* ==========================================
   Lightbox
   ========================================== */
function initLightbox() {
    const lightboxTriggers = document.querySelectorAll('[data-lightbox]');
    const lightbox = document.querySelector('.lightbox');
    const lightboxContent = lightbox ? lightbox.querySelector('.lightbox-content') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

    if (!lightbox || !lightboxContent) return;

    // Open lightbox
    lightboxTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();

            const content = trigger.dataset.lightbox;
            lightboxContent.innerHTML = content;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', function () {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close on backdrop click
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/* ==========================================
   Page Transitions
   ========================================== */
function initPageTransitions() {
    const transitionOverlay = document.querySelector('.page-transition');
    if (!transitionOverlay) return;

    const links = document.querySelectorAll('a[href^="index"], a[href^="about"], a[href^="academics"], a[href^="student"], a[href^="admissions"], a[href^="giving"], a[href^="blog"], a[href^="contact"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const href = link.getAttribute('href');

            // Skip if it's an external link or same page
            if (href.startsWith('http') || href.startsWith('#') ||
                link.target === '_blank' ||
                link.dataset.noTransition === 'true') {
                return;
            }

            e.preventDefault();

            // Animate out
            gsap.to(transitionOverlay, {
                scaleY: 1,
                duration: 0.4,
                ease: 'power2.in',
                onComplete: function () {
                    window.location.href = href;
                }
            });
        });
    });
}

/* ==========================================
   Smooth Scroll
   ========================================== */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                const headerHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                gsap.to(window, {
                    duration: 1,
                    scrollTo: targetPosition,
                    ease: 'power2.inOut'
                });
            }
        });
    });
}

/* ==========================================
   Form Validation
   ========================================== */
function initFormValidation() {
    const forms = document.querySelectorAll('form');

    forms.forEach(function (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Basic validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(function (field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#FF6B6B';
                } else {
                    field.style.borderColor = '';
                }
            });

            if (isValid) {
                // Show success message or submit
                console.log('Form submitted successfully');

                // Add success animation
                const submitBtn = form.querySelector('button[type="submit"]');
                if (submitBtn) {
                    const originalText = submitBtn.innerHTML;
                    submitBtn.innerHTML = '✓ Submitted!';
                    submitBtn.style.background = 'linear-gradient(135deg, #00D4AA 0%, #0066FF 100%)';

                    setTimeout(function () {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        form.reset();
                    }, 2000);
                }
            }
        });

        // Clear error on input
        const inputs = form.querySelectorAll('.form-input, .form-textarea, .form-select');
        inputs.forEach(function (input) {
            input.addEventListener('input', function () {
                this.style.borderColor = '';
            });
        });
    });
}

/* ==========================================
   Lazy Loading
   ========================================== */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(function (img) {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        lazyImages.forEach(function (img) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    }
}

/* ==========================================
   Utility Functions
   ========================================== */
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function () {
                inThrottle = false;
            }, limit);
        }
    };
}

// Export for use in other modules
window.debounce = debounce;
window.throttle = throttle;
