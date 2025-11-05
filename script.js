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

    // Community buttons functionality
    const discordBtn = document.getElementById('discord-btn');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const telegramBtn = document.getElementById('telegram-btn');
    
    // Replace these with your actual links
    const DISCORD_LINK = 'https://discord.gg/YOUR_INVITE_CODE';
    const WHATSAPP_LINK = 'https://chat.whatsapp.com/YOUR_INVITE_CODE';
    const TELEGRAM_LINK = 'https://t.me/YOUR_CHANNEL_NAME';
    
    discordBtn.addEventListener('click', function() {
        window.open(DISCORD_LINK, '_blank');
    });
    
    whatsappBtn.addEventListener('click', function() {
        window.open(WHATSAPP_LINK, '_blank');
    });
    
    telegramBtn.addEventListener('click', function() {
        window.open(TELEGRAM_LINK, '_blank');
    });
    
    // CTA buttons functionality
    const primaryCtaButtons = document.querySelectorAll('.btn.primary');
    primaryCtaButtons.forEach(button => {
        if (!button.id) { // Only apply to non-community CTA buttons
            button.addEventListener('click', function() {
                // Replace with your actual signup link
                window.open('https://your-platform.com/signup', '_blank');
            });
        }
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
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
    document.querySelectorAll('.feature-card, .channel-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
