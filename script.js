// Add this at the very beginning of script.js
(function() {
    // Basic protection against code copying
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('keydown', function(e) {
        // Disable Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12
        if (
            e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83) ||
            e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && e.keyCode === 73)
        ) {
            e.preventDefault();
        }
    });
})();

// Wrap all your existing code in this IIFE
(function() {
    // Your existing DOMContentLoaded code...
    document.addEventListener('DOMContentLoaded', function() {
        // All your existing code here...
        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        // ... rest of your code
    });
    
    // Obfuscate email
    function obfuscateEmail() {
        const emailElements = document.querySelectorAll('[data-email]');
        emailElements.forEach(el => {
            const email = el.getAttribute('data-email');
            const parts = email.split('@');
            if (parts.length === 2) {
                const user = parts[0];
                const domain = parts[1];
                const obfuscated = user.replace(/./g, '*') + '@' + domain;
                el.textContent = obfuscated;
                el.addEventListener('mouseover', function() {
                    this.textContent = email;
                });
                el.addEventListener('mouseout', function() {
                    this.textContent = obfuscated;
                });
            }
        });
    }
    
    // Initialize obfuscation
    obfuscateEmail();
})();

// Add performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics (remove in production)
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time: ' + pageLoadTime + 'ms');
    }
    
    // Add loading animation removal
    document.querySelectorAll('.loading').forEach(el => {
        el.classList.remove('loading');
    });
});


// Simple JavaScript without complex Intersection Observer issues
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Simple scroll animation
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 3D tilt effect for cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 25;
            const rotateX = (centerY - y) / 25;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Social buttons hover effect
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.background = 'var(--gold)';
            this.style.color = 'var(--black)';
        });
        
        btn.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.background = 'var(--glass)';
            this.style.color = 'var(--white)';
        });
    });

    // Initialize all animated elements on page load
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((element, index) => {
        // Add a small delay for staggered animation on load
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 100);
    });

    // Create particle effect
    createParticles();
});

function createParticles() {
    const heroBg = document.querySelector('.hero-bg');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(197, 167, 122, ${Math.random() * 0.5 + 0.1})`;
        particle.style.borderRadius = '50%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.left = Math.random() * 100 + '%';
        
        // Add animation
        const animationDuration = Math.random() * 10 + 10;
        particle.style.animation = `float ${animationDuration}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        heroBg.appendChild(particle);
    }
    
    // Add CSS for float animation and social buttons
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(0) translateX(20px); }
            75% { transform: translateY(20px) translateX(10px); }
        }
        
        .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background: var(--glass);
            border-radius: 15px;
            color: var(--white);
            text-decoration: none;
            font-size: 1.5rem;
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}