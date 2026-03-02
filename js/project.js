// ==========================================
// Project Detail Page — Case Study
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (themeToggle) {
        // Check saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.replace('light', 'dark');
            if (themeIcon) themeIcon.textContent = 'light_mode';
        }
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.contains('dark');
            if (isDark) {
                document.documentElement.classList.replace('dark', 'light');
                if (themeIcon) themeIcon.textContent = 'dark_mode';
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.replace('light', 'dark');
                if (themeIcon) themeIcon.textContent = 'light_mode';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Get project ID from URL or fallback to localStorage (solves clean-URL redirect dropping query strings)
    const params = new URLSearchParams(window.location.search);
    let projectId = params.get('id');

    if (projectId) {
        localStorage.setItem('currentProjectId', projectId);
    } else {
        projectId = localStorage.getItem('currentProjectId');
    }

    if (!projectId) {
        showError();
        return;
    }

    // Hardcoded project data since Firebase is removed
    const allProjects = [
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

    function loadProject() {
        const project = allProjects.find(p => p.id === projectId);
        if (project) {
            renderProject(project);
            loadNextProject(project.order || 999);
        } else {
            showError();
        }
    }

    loadProject();
});

// ==========================================
// Render Project Detail
// ==========================================
function renderProject(project) {
    // Hide loading, show content
    document.getElementById('project-loading').style.display = 'none';
    document.getElementById('project-dynamic').style.display = 'block';

    // Page title
    document.title = `${project.title || 'Project'} — Case Study`;

    // Header
    const caseNum = document.getElementById('proj-case-number');
    if (project.caseNumber) {
        caseNum.textContent = `Case Study ${String(project.caseNumber).padStart(2, '0')}`;
    } else {
        caseNum.textContent = 'Case Study';
    }

    const tagLabel = document.getElementById('proj-tag-label');
    if (project.tag) {
        tagLabel.textContent = project.tag;
    }

    // Title — split on spaces for line break effect
    const titleEl = document.getElementById('proj-title');
    titleEl.textContent = project.title || 'Untitled';

    // Meta info (duration, team, tools)
    const metaEl = document.getElementById('proj-meta');
    let metaHTML = '';
    if (project.tech) {
        metaHTML += `<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">build</span> ${project.tech}</span>`;
    }
    if (project.teamSize) {
        if (metaHTML) metaHTML += '<span class="text-gray-300 dark:text-gray-600 mx-2">|</span>';
        metaHTML += `<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">group</span> ${project.teamSize}</span>`;
    }
    if (project.tools) {
        if (metaHTML) metaHTML += '<span class="text-gray-300 dark:text-gray-600 mx-2">|</span>';
        metaHTML += `<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">handyman</span> ${project.tools}</span>`;
    }
    if (project.duration) {
        if (metaHTML) metaHTML += '<span class="text-gray-300 dark:text-gray-600 mx-2">|</span>';
        metaHTML += `<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">calendar_month</span> ${project.duration}</span>`;
    }
    metaEl.innerHTML = metaHTML;

    // Hero image
    if (project.imageUrl) {
        const heroWrapper = document.getElementById('proj-hero-wrapper');
        heroWrapper.style.display = 'block';
        heroWrapper.classList.add('cursor-pointer', 'lightbox-trigger');
        heroWrapper.dataset.img = project.imageUrl;
        heroWrapper.title = "Click to view full screen";
        
        document.getElementById('proj-hero-image').src = project.imageUrl;
        document.getElementById('proj-hero-image').alt = project.title || '';
        document.getElementById('proj-hero-caption').textContent = project.heroCaption || `The ${project.title} project`;
    }

    // Problem section
    if (project.problem) {
        document.getElementById('section-problem').style.display = 'block';
        document.getElementById('proj-problem-text').innerHTML = project.problem;
    }

    // Solution section
    if (project.solution || project.galleryImage1) {
        document.getElementById('section-solution').style.display = 'block';

        // Gallery images
        const galleryImgs = [];
        if (project.galleryImage1) galleryImgs.push({ url: project.galleryImage1, caption: project.galleryCaption1 || 'Project screenshot' });
        if (project.galleryImage2) galleryImgs.push({ url: project.galleryImage2, caption: project.galleryCaption2 || 'Project screenshot' });

        if (galleryImgs.length > 0) {
            const galleryEl = document.getElementById('proj-gallery');
            galleryEl.style.display = 'grid';
            galleryEl.innerHTML = galleryImgs.map((img, i) => `
                <div class="flex flex-col gap-3 group ${i % 2 === 1 ? 'mt-8 md:mt-0' : ''}">
                    <div class="bg-white dark:bg-[#1a1a1a] p-2 border-2 ${i === 0 ? 'border-dashed border-gray-300 dark:border-gray-600 rounded-lg' : 'border-black dark:border-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'} relative cursor-pointer hover:scale-[1.02] transition-transform lightbox-trigger" data-img="${img.url}">
                        ${i === 0 ? '<div class="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rotate-6 shadow-md">Preview</div>' : ''}
                        <div class="aspect-[4/3] bg-gray-50 dark:bg-black/40 overflow-hidden flex items-center justify-center p-2">
                            <img alt="${img.caption}" class="w-full h-full object-contain drop-shadow-sm pointer-events-none" src="${img.url}" />
                        </div>
                    </div>
                    <p class="font-hand text-center text-gray-500">${img.caption}</p>
                </div>
            `).join('');
        }

        if (project.solution) {
            document.getElementById('proj-solution-text').innerHTML = project.solution;
        } else {
            document.getElementById('proj-solution-wrapper').style.display = 'none';
        }
    }

    // Results
    const results = [];
    if (project.result1Value) results.push({ value: project.result1Value, label: project.result1Label || '', note: project.result1Note || '' });
    if (project.result2Value) results.push({ value: project.result2Value, label: project.result2Label || '', note: project.result2Note || '' });
    if (project.result3Value) results.push({ value: project.result3Value, label: project.result3Label || '', note: project.result3Note || '' });

    if (results.length > 0) {
        document.getElementById('section-results').style.display = 'block';
        const resultsGrid = document.getElementById('proj-results-grid');
        const bgColors = ['bg-[#fef08a]', 'bg-white dark:bg-gray-800', 'bg-white dark:bg-gray-800'];
        const borderStyles = ['border-4 border-black dark:border-white', 'border-4 border-dashed border-gray-400', 'border-4 border-black dark:border-white'];

        resultsGrid.innerHTML = results.map((r, i) => `
            <div class="flex flex-col gap-2 items-center">
                <div class="w-32 h-32 rounded-full ${borderStyles[i % 3]} flex items-center justify-center relative ${bgColors[i % 3]} shadow-lg">
                    <span class="font-display font-bold text-3xl ${i === 0 ? 'text-black' : ''}">${r.value}</span>
                    ${i === 2 ? '<span class="absolute -top-2 -right-2 text-2xl">⭐</span>' : ''}
                </div>
                <h3 class="font-bold font-mono uppercase mt-2">${r.label}</h3>
                <p class="font-hand text-sm text-gray-500">${r.note}</p>
            </div>
        `).join('');
    }

    // Description (fallback if no problem/solution)
    if (!project.problem && !project.solution && project.description) {
        document.getElementById('section-description').style.display = 'block';
        document.getElementById('proj-description-text').textContent = project.description;
    }

    // External link
    if (project.link) {
        document.getElementById('proj-link-wrapper').style.display = 'block';
        const linkEl = document.getElementById('proj-external-link');
        linkEl.href = project.link;
        if (project.link.includes('fliphtml5.com') || project.link.toLowerCase().includes('efy')) {
            linkEl.innerHTML = `<span class="material-symbols-outlined">menu_book</span> Read EFY Magazine`;
        } else {
            linkEl.innerHTML = `<span class="material-symbols-outlined">open_in_new</span> View Live Project`;
        }
    }
    
    // Initialize lightbox after content is rendered
    initLightbox();
}

// ==========================================
// Load Next Project
// ==========================================
function loadNextProject(currentOrder) {
    const allProjects = [
        {
            id: "traffic-light-controller",
            title: "Density-Based Traffic Light Controller"
        }
    ];
    // With only one project, we don't really have a "next" project, but if we did we would loop here.
    // We'll hide it for now since there's only 1.
    document.getElementById('next-project-wrapper').style.display = 'none';
}

function showNextProject(id, title) {
    const wrapper = document.getElementById('next-project-wrapper');
    wrapper.style.display = 'block';
    const linkEl = document.getElementById('next-project-link');
    linkEl.href = `project.html?id=${id}`;
    linkEl.onclick = () => localStorage.setItem('currentProjectId', id);
    document.getElementById('next-project-title').textContent = title;
}

// ==========================================
// Lightbox Implementation
// ==========================================
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    
    // Add click listeners to triggers
    const triggers = document.querySelectorAll('.lightbox-trigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const imgSrc = trigger.dataset.img;
            if (imgSrc) {
                lightboxImg.src = imgSrc;
                lightbox.style.display = 'flex';
                // Trigger reflow then set opacity
                void lightbox.offsetWidth;
                lightbox.classList.remove('opacity-0');
                lightbox.classList.add('opacity-100');
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
                document.body.style.overflow = 'hidden'; // prevent scrolling behind
            }
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('opacity-100');
        lightbox.classList.add('opacity-0');
        lightboxImg.classList.remove('scale-100');
        lightboxImg.classList.add('scale-95');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300); // match transition duration
    };

    lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    lightboxClose?.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
}

// ==========================================
// Error State
// ==========================================
function showError() {
    document.getElementById('project-loading').style.display = 'none';
    document.getElementById('project-error').style.display = 'block';
}
