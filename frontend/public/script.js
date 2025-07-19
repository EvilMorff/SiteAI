// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeParticles();
    initializeNavigation();
    initializeContactForm();
    initializeScrollEffects();
});

// Navigation functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Initialize navigation active states
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = ['hero', 'services', 'about', 'contact'];
    
    // Update active navigation button based on scroll position
    function updateActiveNav() {
        let current = 'hero';
        
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 150) {
                    current = sectionId;
                }
            }
        });
        
        navButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Find and activate the current section button
        const sectionMap = {
            'hero': -1, // No button for hero
            'services': 0,
            'about': 1,
            'contact': 2
        };
        
        const activeIndex = sectionMap[current];
        if (activeIndex >= 0 && navButtons[activeIndex]) {
            navButtons[activeIndex].classList.add('active');
        }
    }
    
    // Listen for scroll events
    let ticking = false;
    function handleScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNav();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    updateActiveNav();
}

// Initialize floating particles
function initializeParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    const particleCount = 50;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random positioning
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (6 + Math.random() * 4) + 's';
        
        // Random size
        const size = 2 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random opacity
        particle.style.opacity = 0.3 + Math.random() * 0.7;
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        particle.addEventListener('animationend', () => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
    }
    
    // Create initial particles
    for (let i = 0; i < particleCount; i++) {
        setTimeout(createParticle, i * 100);
    }
    
    // Continuously create new particles
    setInterval(createParticle, 200);
}

// Initialize contact form
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showNotification('Дякуємо за ваше повідомлення! Ми зв\'яжемося з вами найближчим часом.', 'success');
            
            // Reset form
            form.reset();
            
            // In a real application, you would send the data to a server
            console.log('Form submitted:', data);
        });
    }
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Header background opacity on scroll
    const header = document.getElementById('header');
    
    function updateHeaderOpacity() {
        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / 100, 0.95);
        header.style.background = `rgba(0, 0, 0, ${0.6 + opacity * 0.35})`;
    }
    
    window.addEventListener('scroll', updateHeaderOpacity);
    
    // Parallax effect for hero background
    const heroSection = document.getElementById('hero');
    const networkPattern = document.querySelector('.network-pattern');
    
    function updateParallax() {
        const scrollY = window.scrollY;
        const rate = scrollY * -0.5;
        
        if (networkPattern) {
            networkPattern.style.transform = `translateY(${rate}px)`;
        }
    }
    
    window.addEventListener('scroll', updateParallax);
    
    // Animate elements on scroll (simple intersection observer)
    const animateElements = document.querySelectorAll('.service-card, .advantage-card, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? '#10b981' : '#3b82f6',
        color: '#fff',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        maxWidth: '400px',
        wordWrap: 'break-word'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Smooth button interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        // Add click animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Handle form inputs with better UX
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('form-group-focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('form-group-focused');
            
            // Add validation feedback
            if (this.required && !this.value.trim()) {
                this.style.borderColor = '#ef4444';
            } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '#4b5563';
            }
        });
        
        input.addEventListener('input', function() {
            // Reset border color on input
            this.style.borderColor = '#3b82f6';
        });
    });
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Performance optimization: debounce scroll events
function debounce(func, wait) {
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

// Add CSS for form group focus state
const style = document.createElement('style');
style.textContent = `
    .form-group-focused .form-label {
        color: #60a5fa !important;
    }
    
    .form-group-focused .form-input,
    .form-group-focused .form-textarea {
        border-color: #3b82f6 !important;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }
`;
document.head.appendChild(style);

// Add some extra interactivity
document.addEventListener('mousemove', function(e) {
    // Subtle mouse tracking effect for hero section
    const hero = document.getElementById('hero');
    if (hero && e.clientY < window.innerHeight) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        const networkPattern = document.querySelector('.network-pattern');
        if (networkPattern) {
            networkPattern.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`;
        }
    }
});

// Console welcome message
console.log(`
🚀 UAdmin Website
💻 Професійна IT підтримка та технічні рішення
📧 info@uadmin.com.ua
🌐 По всій Україні

Built with vanilla HTML, CSS, and JavaScript
`);

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`⚡ Page loaded in ${Math.round(perfData.loadEventEnd - perfData.navigationStart)}ms`);
        }, 0);
    });
}