// ==========================================
// Portfolio App — Main Script
// 3-Phase Flow: Splash → Loading → Portfolio
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const portfolioWrapper = document.getElementById('portfolio-wrapper');
    const enterBtn = document.getElementById('enter-btn');

    let dataLoaded = false;
    let animationDone = false;

    // ------- PHASE 1: Splash Screen -------
    // Listen for Enter key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && splashScreen.style.display !== 'none') {
            triggerEnter();
        }
    });

    // Listen for Enter button click
    enterBtn?.addEventListener('click', () => {
        triggerEnter();
    });

    function triggerEnter() {
        // Add exit animation to splash
        splashScreen.classList.add('splash-exit');
        
        setTimeout(() => {
            splashScreen.style.display = 'none';
            startLoadingPhase();
        }, 600);
    }

    // ------- PHASE 2: Loading Screen -------
    function startLoadingPhase() {
        loadingScreen.style.opacity = '1';
        loadingScreen.style.pointerEvents = 'auto';
        loadingScreen.classList.add('loading-active');

        // Start loading Firebase data
        loadPortfolioData();

        // Set animation done after loading animation finishes (3.5s)
        setTimeout(() => {
            animationDone = true;
            checkReady();
        }, 4000);
    }

    // ------- PHASE 3: Show Portfolio -------
    function checkReady() {
        if (dataLoaded && animationDone) {
            showPortfolio();
        }
    }

    function showPortfolio() {
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.pointerEvents = 'none';

        setTimeout(() => {
            loadingScreen.style.display = 'none';
            
            // Show portfolio with reveal animation
            portfolioWrapper.style.opacity = '1';
            portfolioWrapper.style.pointerEvents = 'auto';
            portfolioWrapper.classList.add('portfolio-reveal');
        }, 500);
    }

    // ------- Dark Mode Toggle -------
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        htmlEl.classList.add('dark');
        htmlEl.classList.remove('light');
        if (themeIcon) themeIcon.textContent = 'light_mode';
    }

    themeToggle?.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        htmlEl.classList.toggle('light');
        const isDark = htmlEl.classList.contains('dark');
        if (themeIcon) themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
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

    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
        });
    });

    // ------- Load Portfolio Data from Firestore -------
    function loadPortfolioData() {
        function connectFirestore() {
            try {
                db.collection('portfolio').doc('main').onSnapshot((doc) => {
                    if (doc.exists) {
                        const data = doc.data();
                        updateUI(data);
                    } else {
                        console.log('No portfolio data found. Using defaults.');
                    }
                    dataLoaded = true;
                    checkReady();
                }, (error) => {
                    console.warn('Firestore connection error, using defaults:', error.message);
                    dataLoaded = true;
                    checkReady();
                });
            } catch (error) {
                console.warn('Firebase not configured yet. Using default content.');
                dataLoaded = true;
                checkReady();
            }
        }

        // Wait for firebase-ready event from env.js
        if (typeof db !== 'undefined' && db) {
            connectFirestore();
        } else {
            window.addEventListener('firebase-ready', connectFirestore);
        }
    }

    // ------- Parallax-like subtle mouse move effect on hero image -------
    const heroCard = document.querySelector('.animate-pop-in');
    if (heroCard) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            heroCard.style.transform = `rotate(${2 + x * 0.3}deg) translate(${x * 0.5}px, ${y * 0.5}px)`;
        });
    }
});

// ==========================================
// Update UI with Firestore data
// ==========================================
function updateUI(data) {
    // Branding
    if (data.brandName) {
        const brandParts = data.brandName.split('.');
        const brandBase = brandParts[0] || data.brandName;
        setHTMLSafe('sidebar-brand', `${brandBase}<span class="text-primary">.</span>`);
        setHTMLSafe('mobile-brand', `${brandBase}<span class="text-primary">.</span>`);
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

    // Photo — only override if it's a real custom URL (not the old stock photo)
    if (data.photoUrl && !data.photoUrl.includes('lh3.googleusercontent.com/aida-public')) {
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
