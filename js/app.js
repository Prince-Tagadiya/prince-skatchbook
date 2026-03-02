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

    // Check if we should skip splash (if navigating via hash or already seen)
    const hasHash = window.location.hash && window.location.hash !== '#home';
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');

    if (hasHash || hasSeenSplash) {
        // Skip splash entirely
        if (splashScreen) splashScreen.style.display = 'none';
        if (loadingScreen) loadingScreen.style.display = 'none';
        if (portfolioWrapper) {
            portfolioWrapper.style.opacity = '1';
            portfolioWrapper.style.pointerEvents = 'auto';
        }
        
        // Start loading data immediately
        loadPortfolioData();
        loadProjects();
        return; // Skip attaching enter listeners
    }

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
        loadProjects();

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
            if (portfolioWrapper) {
                portfolioWrapper.style.opacity = '1';
                portfolioWrapper.style.pointerEvents = 'auto';
                portfolioWrapper.classList.add('portfolio-reveal');
            }
            sessionStorage.setItem('hasSeenSplash', 'true');
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

    // ------- Skip Firebase -------
    function loadPortfolioData() {
        dataLoaded = true;
        checkReady();
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

    // ------- Nav active state on scroll using IntersectionObserver -------
    const sectionIds = ['home', 'awards', 'projects', 'about', 'contact'];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
    const navLinks = document.querySelectorAll('.nav-link');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: document.getElementById('main-content'),
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && (href === `#${currentId}` || href === `index.html#${currentId}`)) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(sec => observer.observe(sec));
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
// Load Projects from Firestore
// ==========================================
let allProjects = [
    {
        id: "traffic-light-controller",
        title: "Density-Based Traffic Light Controller",
        description: "A DIY smart traffic management system published in Electronics For You Magazine (Jan 2026). Uses Arduino Uno & Nano with ultrasonic sensors to dynamically adjust traffic signal timing based on real-time vehicle density at a 4-way intersection.",
        category: "IoT",
        tech: "Arduino, C++, I2C",
        imageUrl: "assets/projects/traffic-light/main-image.jpeg",
        tag: "Published in EFY",
        status: "published",
        order: 1,
        solution: "We built an <strong>intelligent density-based traffic system</strong> using an Arduino Uno (master) and Arduino Nano (slave) with <strong>4 HC-SR04 ultrasonic sensors</strong>, one per lane. Sensors continuously measure vehicle distance — if a vehicle is detected within 15cm, the lane gets a <strong>10-second green signal</strong>; otherwise, only a brief <strong>2-second green phase</strong>. The I2C protocol enables seamless communication between the sensor unit and control unit, dynamically optimising traffic flow at a four-way intersection.",
        problem: "Traditional traffic light systems operate on fixed timing cycles, regardless of actual traffic conditions. This leads to <strong>unnecessary waiting at empty intersections</strong> and <strong>congestion buildup</strong> in busy lanes. With increasing urbanisation, fixed-cycle traffic signals cause idle delays, fuel wastage, and increased commute times — especially during fluctuating or uneven traffic flow.",
        galleryImage1: "assets/projects/traffic-light/magazine-cover.png",
        galleryCaption1: "EFY Magazine Jan 2026 Cover",
        galleryImage2: "assets/projects/traffic-light/block-diagram.jpeg",
        galleryCaption2: "System Block Diagram",
        galleryImage3: "assets/projects/traffic-light/circuit.jpeg",
        galleryCaption3: "Circuit Diagram",
        result1Title: "EFY Magazine",
        result1Label: "Published",
        result1Value: "EFY",
        result1Note: "Jan 2026 Issue",
        result2Label: "Smart Control",
        result2Value: "4-Lane",
        result2Note: "Real-time detection",
        result3Label: "Protocol",
        result3Value: "I2C",
        result3Note: "Master-Slave",
        duration: "4 Weeks",
        teamSize: "Solo + Faculty Mentor",
        tools: "Arduino IDE, HC-SR04, I2C Protocol",
        link: "https://online.fliphtml5.com/oxomv/EFY-Express_Jan-26_PDFisation/#p=80",
        heroCaption: "Working prototype with serial monitor output"
    }
];

function loadProjects() {
    renderProjects(allProjects);
    buildFilterChips(allProjects);
}

// ==========================================
// Render Projects Grid
// ==========================================
function renderProjects(projects) {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    if (projects.length === 0) {
        renderEmptyState();
        return;
    }

    const rotations = ['rotate-[1deg]', 'rotate-[-1deg]', 'rotate-[0.5deg]', 'rotate-[-1.5deg]', 'rotate-[2deg]', 'rotate-[-0.5deg]'];
    const tagColors = [
        'bg-yellow-200 dark:bg-yellow-600 text-black',
        'bg-blue-100 dark:bg-blue-800 text-black dark:text-white',
        'bg-green-100 dark:bg-green-800 text-black dark:text-white',
        'bg-pink-100 dark:bg-pink-800 text-black dark:text-white',
        'bg-purple-100 dark:bg-purple-800 text-black dark:text-white',
        'bg-orange-100 dark:bg-orange-700 text-black dark:text-white',
    ];
    const tagPositions = [
        'absolute -top-3 -right-3 rotate-[5deg]',
        'absolute -top-3 -left-2 rotate-[-3deg]',
        'absolute -top-3 right-8 rotate-[2deg]',
        'absolute -top-3 left-8 rotate-[-2deg]',
    ];

    grid.innerHTML = projects.map((project, i) => {
        const rot = rotations[i % rotations.length];
        const tagColor = tagColors[i % tagColors.length];
        const tagPos = tagPositions[i % tagPositions.length];
        const imageUrl = project.imageUrl || '';
        const wip = project.status === 'wip';
        const detailUrl = `project.html?id=${project.id}`;

        return `
        <a href="${detailUrl}" onclick="localStorage.setItem('currentProjectId', '${project.id}')" class="group relative flex flex-col bg-white dark:bg-[#1a1a1a] p-4 text-[#181111] dark:text-white border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#ec1313] dark:hover:shadow-[8px_8px_0px_0px_#ec1313] transition-all duration-200 ${rot} no-underline cursor-pointer" data-category="${(project.category || '').toLowerCase()}">
            ${project.tag ? `<div class="${tagPos} ${tagColor} px-2 py-1 text-xs font-bold border border-black shadow-sm z-10">${project.tag}</div>` : ''}
            ${wip ? `<div class="absolute -bottom-3 right-4 bg-primary text-white px-3 py-1 text-xs font-bold border border-black shadow-sm rotate-[2deg] z-10">Work in Progress</div>` : ''}
            <div class="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 border border-black dark:border-white mb-4 overflow-hidden">
                ${imageUrl ? `<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="${imageUrl}" alt="${project.title || ''}" />` : `<div class="w-full h-full flex items-center justify-center text-gray-300"><span class="material-symbols-outlined text-6xl">image</span></div>`}
            </div>
            <div class="flex flex-col gap-2">
                <h3 class="text-xl font-bold">${project.title || 'Untitled'}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">${project.description || ''}</p>
                <div class="mt-4 pt-3 border-t-2 border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <span class="text-xs font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">${project.tech || project.category || ''}</span>
                    <span class="text-primary font-bold text-sm flex items-center hover:gap-2 transition-all">View Study <span class="material-symbols-outlined text-lg ml-1">arrow_right_alt</span></span>
                </div>
            </div>
        </a>`;
    }).join('');

    // Add the "More cooking" placeholder at the end
    grid.innerHTML += `
        <div class="flex flex-col items-center justify-center bg-gray-50 dark:bg-[#1a1a1a] p-4 text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg min-h-[300px]">
            <div class="flex gap-2 mb-2">
                <span class="material-symbols-outlined text-4xl opacity-50 animate-bounce text-orange-500">local_fire_department</span>
                <span class="material-symbols-outlined text-4xl opacity-50 animate-pulse text-gray-500">restaurant</span>
            </div>
            <p class="font-hand font-bold text-lg rotate-[-2deg]">More cooking...</p>
        </div>`;
}

function renderEmptyState() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
    grid.innerHTML = `
        <div class="flex flex-col items-center justify-center bg-gray-50 dark:bg-white/5 p-4 text-gray-400 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg min-h-[300px] col-span-full">
            <span class="material-symbols-outlined text-4xl mb-2 opacity-50">edit</span>
            <p class="font-hand font-bold text-lg rotate-[-2deg]">No projects yet... More cooking!</p>
            <p class="text-sm mt-1">Add projects from the admin panel</p>
        </div>`;
}

// ==========================================
// Filter Chips
// ==========================================
function buildFilterChips(projects) {
    const filtersEl = document.getElementById('project-filters');
    if (!filtersEl) return;

    // Collect unique categories
    const categories = [...new Set(projects.map(p => p.category).filter(Boolean))];
    const chipRotations = ['-1deg', '1deg', '-2deg', '2deg', '-1.5deg', '1.5deg'];

    filtersEl.innerHTML = `
        <button class="project-filter active px-4 py-1.5 bg-[#181111] dark:bg-white text-white dark:text-black font-bold text-sm rotate-[-1deg] shadow-lg transform transition hover:scale-105 border-2 border-black dark:border-white cursor-pointer" data-filter="all">
            All Work
        </button>
    `;

    categories.forEach((cat, i) => {
        const rot = chipRotations[i % chipRotations.length];
        filtersEl.innerHTML += `
            <button class="project-filter px-4 py-1.5 bg-[#f0f0f0] dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-medium text-sm transform hover:bg-primary/10 transition shadow-sm cursor-pointer" style="rotate: ${rot}" data-filter="${cat.toLowerCase()}">
                ${cat}
            </button>
        `;
    });

    // Add click handlers
    filtersEl.querySelectorAll('.project-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filtersEl.querySelectorAll('.project-filter').forEach(b => {
                b.classList.remove('active', 'bg-[#181111]', 'dark:bg-white', 'text-white', 'dark:text-black', 'font-bold', 'shadow-lg');
                b.classList.add('bg-[#f0f0f0]', 'dark:bg-gray-800', 'font-medium');
            });
            btn.classList.add('active', 'bg-[#181111]', 'dark:bg-white', 'text-white', 'dark:text-black', 'font-bold', 'shadow-lg');
            btn.classList.remove('bg-[#f0f0f0]', 'dark:bg-gray-800', 'font-medium');

            const filter = btn.dataset.filter;
            if (filter === 'all') {
                renderProjects(allProjects);
            } else {
                renderProjects(allProjects.filter(p => (p.category || '').toLowerCase() === filter));
            }
        });
    });
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
