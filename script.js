// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // WhatsApp button functionality
    const whatsappBtn = document.getElementById('whatsapp-btn');
    
    // YOUR WHATSAPP CHANNEL LINK - READY TO USE
    const WHATSAPP_CHANNEL = 'https://whatsapp.com/channel/0029VbBYoy33LdQTZWgY1t0e';
    
    whatsappBtn.addEventListener('click', function() {
        window.open(WHATSAPP_CHANNEL, '_blank');
    });
    
    // CTA buttons functionality
    const primaryCtaButtons = document.querySelectorAll('.btn.primary');
    primaryCtaButtons.forEach(button => {
        if (!button.id) {
            button.addEventListener('click', function() {
                // You can replace this with your actual application link later
                alert('Get Funded feature coming soon! Join our WhatsApp channel for updates.');
                // window.open('https://your-platform.com/application', '_blank');
            });
        }
    });

    // Secondary buttons functionality
    const secondaryButtons = document.querySelectorAll('.btn.secondary');
    secondaryButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Join our WhatsApp channel for performance updates and signals!');
        });
    });

    // Card button functionality
    const cardButtons = document.querySelectorAll('.card-btn');
    cardButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.open(WHATSAPP_CHANNEL, '_blank');
        });
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 15, 28, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(10, 15, 28, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
        }
    });
    
    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .signal-card, .premium-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add loading animation
    const loadingElements = document.querySelectorAll('.hero-text, .community-text');
    loadingElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    setTimeout(() => {
        loadingElements.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateX(0)';
        });
    }, 300);

    // Add click tracking for analytics
    console.log('InstantFunded PRO Website Loaded Successfully');
    console.log('WhatsApp Channel:', WHATSAPP_CHANNEL);
});
