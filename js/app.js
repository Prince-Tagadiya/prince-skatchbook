// ==========================================
// Portfolio App — Main Script
// Loads data from Firestore and populates UI
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // ------- Loading Screen -------
    const loadingScreen = document.getElementById('loading-screen');
    
    // Remove loading screen after animations + data load
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 700);
    }, 2200);

    // ------- Dark Mode Toggle -------
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    // Check saved preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
        themeIcon.textContent = 'light_mode';
    }

    themeToggle?.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        htmlEl.classList.toggle('light');
        const isDark = htmlEl.classList.contains('dark');
        themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
        localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });

    // ------- Mobile Menu -------
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    mobileMenuToggle?.addEventListener('click', () => {
        mobileMenu.classList.add('show');
        mobileMenu.style.display = 'flex';
    });

    mobileMenuClose?.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        mobileMenu.style.display = 'none';
    });

    // Close mobile menu on link click
    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
        });
    });

    // ------- Load Portfolio Data from Firestore -------
    loadPortfolioData();

    // ------- Parallax-like subtle mouse move effect on hero image -------
    const heroCard = document.querySelector('.tilt-card, .animate-pop-in');
    if (heroCard) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            heroCard.style.transform = `rotate(${2 + x * 0.3}deg) translate(${x * 0.5}px, ${y * 0.5}px)`;
        });
    }
});

// ==========================================
// Load data from Firestore
// ==========================================
function loadPortfolioData() {
    try {
        // Listen to real-time changes
        db.collection('portfolio').doc('main').onSnapshot((doc) => {
            if (doc.exists) {
                const data = doc.data();
                updateUI(data);
            } else {
                console.log('No portfolio data found. Using defaults.');
            }
        }, (error) => {
            console.warn('Firestore connection error, using defaults:', error.message);
        });
    } catch (error) {
        console.warn('Firebase not configured yet. Using default content.');
    }
}

// ==========================================
// Update UI with Firestore data
// ==========================================
function updateUI(data) {
    // Branding
    if (data.brandName) {
        const brandParts = data.brandName.split('.');
        const brandBase = brandParts[0] || data.brandName;
        setTextSafe('sidebar-brand', `${brandBase}<span class="text-primary">.</span>`);
        setTextSafe('mobile-brand', `${brandBase}<span class="text-primary">.</span>`);
    }

    if (data.tagline) setTextSafe('sidebar-tagline', data.tagline);

    // Hero section
    if (data.greeting) setTextSafe('hero-greeting', data.greeting);
    if (data.firstName) setTextSafe('hero-first-name', data.firstName.toUpperCase());
    if (data.lastName) setTextSafe('hero-last-name', data.lastName.toUpperCase());

    // Roles
    if (data.roles && Array.isArray(data.roles)) {
        const rolesEl = document.getElementById('hero-roles');
        if (rolesEl) {
            rolesEl.innerHTML = data.roles.map((role, i) => {
                if (i < data.roles.length - 1) {
                    return `<span>${role}</span><span class="text-primary font-bold">/</span>`;
                }
                return `<span>${role}</span>`;
            }).join('');
        }
    }

    // Bio
    if (data.bio) setHTMLSafe('hero-bio', data.bio);

    // Photo
    if (data.photoUrl) {
        const photoEl = document.getElementById('hero-photo');
        if (photoEl) photoEl.src = data.photoUrl;
    }

    if (data.photoCaption) setTextSafe('hero-photo-caption', data.photoCaption);
    if (data.stickerText) setHTMLSafe('hero-sticker', data.stickerText);

    // Social Links
    if (data.twitterUrl) setLinkSafe('footer-twitter', data.twitterUrl);
    if (data.githubUrl) {
        setLinkSafe('footer-github', data.githubUrl);
        setLinkSafe('nav-github-link', data.githubUrl);
    }
    if (data.linkedinUrl) setLinkSafe('footer-linkedin', data.linkedinUrl);
    if (data.email) {
        const emailLink = document.getElementById('nav-email-link');
        if (emailLink) emailLink.href = `mailto:${data.email}`;
    }

    // Footer text
    if (data.footerText) setTextSafe('footer-text', data.footerText);

    // Page title
    if (data.firstName && data.lastName) {
        document.title = `${data.firstName} ${data.lastName} — Portfolio`;
    }
}

// ==========================================
// Helpers
// ==========================================
function setTextSafe(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setHTMLSafe(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

function setLinkSafe(id, url) {
    const el = document.getElementById(id);
    if (el) el.href = url;
}
