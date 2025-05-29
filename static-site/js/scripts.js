// Main JavaScript file for Lorena Garcia Beauty website
(function() {
    'use strict';

    // DOM Elements
    const header = document.getElementById('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMobile = document.getElementById('navMobile');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contactForm');

    // Mobile Menu Toggle
    let mobileMenuOpen = false;

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        
        if (mobileMenuOpen) {
            navMobile.style.display = 'flex';
            mobileMenuBtn.classList.add('active');
            
            // Animate menu items
            const menuItems = navMobile.querySelectorAll('.nav-link-mobile');
            menuItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                }, index * 100);
            });
        } else {
            navMobile.style.display = 'none';
            mobileMenuBtn.classList.remove('active');
        }
    }

    // Header scroll effect
    function handleScroll() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    }

    // Smooth scroll to section
    function scrollToSection(target) {
        const element = document.querySelector(target);
        if (element) {
            const headerHeight = header.offsetHeight;
            const elementPosition = element.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    }

    // Contact form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Create WhatsApp message
        const whatsappMessage = `Olá! Meu nome é ${name}.\n\nE-mail: ${email}\n\nMensagem: ${message}`;
        const whatsappUrl = `https://wa.me/554196987908?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        alert('Obrigada pelo contato! Você será redirecionada para o WhatsApp.');
        
        // Reset form
        contactForm.reset();
    }

    // Intersection Observer for animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements
        const animateElements = document.querySelectorAll('.portfolio-item, .testimonial-card, .about-image, .about-text, .contact-card');
        animateElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Parallax effect for hero image
    function handleParallax() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        
        if (heroImage && scrolled < window.innerHeight) {
            const speed = scrolled * 0.5;
            heroImage.style.transform = `translateY(${speed}px)`;
        }
    }

    // Lazy loading for images
    function setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Portfolio item click handler
    function setupPortfolioInteraction() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            item.addEventListener('click', () => {
                // Could add modal functionality here
                // For now, just add a subtle feedback
                item.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    item.style.transform = '';
                }, 150);
            });
        });
    }

    // Initialize tooltips
    function initializeTooltips() {
        const elements = document.querySelectorAll('[title]');
        
        elements.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = e.target.getAttribute('title');
                document.body.appendChild(tooltip);
                
                const rect = e.target.getBoundingClientRect();
                tooltip.style.cssText = `
                    position: fixed;
                    top: ${rect.top - 35}px;
                    left: ${rect.left + rect.width / 2}px;
                    transform: translateX(-50%);
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px;
                    font-size: 12px;
                    white-space: nowrap;
                    z-index: 10000;
                    pointer-events: none;
                `;
                
                e.target.removeAttribute('title');
                e.target.dataset.originalTitle = tooltip.textContent;
            });
            
            element.addEventListener('mouseleave', (e) => {
                const tooltip = document.querySelector('.tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
                
                if (e.target.dataset.originalTitle) {
                    e.target.setAttribute('title', e.target.dataset.originalTitle);
                    delete e.target.dataset.originalTitle;
                }
            });
        });
    }

    // Performance optimization: Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Event Listeners
    function setupEventListeners() {
        // Mobile menu
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }

        // Mobile menu links
        const mobileLinks = document.querySelectorAll('.nav-link-mobile');
        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                scrollToSection(target);
                toggleMobileMenu();
            });
        });

        // Desktop navigation links
        const desktopLinks = document.querySelectorAll('.nav-link');
        desktopLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    const target = link.getAttribute('href');
                    scrollToSection(target);
                }
            });
        });

        // Back to top button
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Contact form
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmit);
        }

        // Scroll events (throttled)
        window.addEventListener('scroll', throttle(() => {
            handleScroll();
            handleParallax();
        }, 16));

        // Resize event
        window.addEventListener('resize', throttle(() => {
            if (mobileMenuOpen && window.innerWidth > 768) {
                toggleMobileMenu();
            }
        }, 250));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    }

    // CSS Animation classes
    function addAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .animate-in {
                animation: slideInUp 0.6s ease forwards;
            }
            
            @keyframes slideInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .mobile-menu-btn.active span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }
            
            .mobile-menu-btn.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-menu-btn.active span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }
            
            .tooltip {
                animation: fadeIn 0.2s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    // Service Worker registration for PWA capabilities
    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(() => console.log('SW registered'))
                    .catch(() => console.log('SW registration failed'));
            });
        }
    }

    // Initialize everything when DOM is loaded
    function init() {
        addAnimationStyles();
        setupEventListeners();
        setupScrollAnimations();
        setupLazyLoading();
        setupPortfolioInteraction();
        initializeTooltips();
        
        // Initial calls
        handleScroll();
        
        // Optional: Register service worker for PWA
        // registerServiceWorker();
        
        console.log('Lorena Garcia Beauty website initialized successfully!');
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();