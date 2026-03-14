// ==========================================
// Project Detail Page — Case Study
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    if (themeToggle) {
        // Check saved preference
        const htmlEl = document.documentElement;
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme === 'dark') {
            htmlEl.classList.add('dark');
            htmlEl.classList.remove('light');
            if (themeIcon) themeIcon.textContent = 'light_mode';
        }
        themeToggle.addEventListener('click', () => {
            const isDark = htmlEl.classList.contains('dark');
            if (isDark) {
                htmlEl.classList.remove('dark');
                htmlEl.classList.add('light');
                if (themeIcon) themeIcon.textContent = 'dark_mode';
                localStorage.setItem('portfolio-theme', 'light');
            } else {
                htmlEl.classList.add('dark');
                htmlEl.classList.remove('light');
                if (themeIcon) themeIcon.textContent = 'light_mode';
                localStorage.setItem('portfolio-theme', 'dark');
            }
        });
    }

    // Mobile menu (project page doesn't load app.js)
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');

    mobileMenuToggle?.addEventListener('click', () => {
        mobileMenu?.classList.add('show');
        if (mobileMenu) mobileMenu.style.display = 'flex';
    });

    mobileMenuClose?.addEventListener('click', () => {
        mobileMenu?.classList.remove('show');
        if (mobileMenu) mobileMenu.style.display = 'none';
    });

    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenu.style.display = 'none';
        });
    });

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

    const allProjects = (Array.isArray(window.PROJECTS) ? window.PROJECTS : [])
        .slice()
        .sort((a, b) => (a?.order ?? 999) - (b?.order ?? 999));

    function loadProject() {
        const project = allProjects.find(p => p.id === projectId);
        if (project) {
            renderProject(project);
            loadNextProject(project.id);
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
        for (let n = 1; n <= 20; n += 1) {
            const url = project[`galleryImage${n}`];
            if (!url) continue;
            galleryImgs.push({
                url,
                caption: project[`galleryCaption${n}`] || 'Project screenshot'
            });
        }

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

    // Links (buttons)
    const links = [];
    if (Array.isArray(project.links)) {
        project.links.forEach(l => {
            if (l?.url && l?.label) links.push({ url: l.url, label: l.label, icon: l.icon || 'open_in_new' });
        });
    } else if (project.link) {
        if (project.link.includes('fliphtml5.com') || project.link.toLowerCase().includes('efy')) {
            links.push({ url: project.link, label: 'Read EFY Magazine', icon: 'menu_book' });
        } else {
            links.push({ url: project.link, label: 'View Live Project', icon: 'open_in_new' });
        }
    }
    if (project.videoUrl) {
        links.unshift({ url: project.videoUrl, label: project.videoLabel || 'Watch Demo', icon: 'play_circle' });
    }

    if (links.length > 0) {
        const wrapper = document.getElementById('proj-links-wrapper');
        const linksEl = document.getElementById('proj-links');
        wrapper.style.display = 'block';
        linksEl.innerHTML = links.map((l, i) => {
            const isPrimary = i === 0;
            const cls = isPrimary
                ? 'bg-black dark:bg-white text-white dark:text-black shadow-[4px_4px_0px_0px_#ec1313] hover:shadow-[6px_6px_0px_0px_#ec1313]'
                : 'bg-white dark:bg-[#1a1a1a] text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_#ec1313]';

            return `
                <a href="${l.url}" target="_blank" class="inline-flex items-center gap-3 font-bold px-8 py-4 border-2 border-black dark:border-white hover:-translate-y-1 transition-all no-underline ${cls}">
                    <span class="material-symbols-outlined">${l.icon}</span>
                    ${l.label}
                </a>
            `;
        }).join('');
    }

    // Press links
    if (Array.isArray(project.pressLinks) && project.pressLinks.length > 0) {
        const section = document.getElementById('section-press');
        const pressEl = document.getElementById('proj-press-links');
        section.style.display = 'block';
        pressEl.innerHTML = project.pressLinks
            .filter(p => p?.url && p?.label)
            .map(p => `
                <a href="${p.url}" target="_blank" class="inline-flex items-center gap-2 font-bold text-[#181111] dark:text-white hover:text-primary no-underline">
                    <span class="material-symbols-outlined text-primary">link</span>
                    <span class="border-b-2 border-dashed border-primary/30 hover:border-primary">${p.label}</span>
                </a>
            `)
            .join('');
    }

    // YouTube embed (optional)
    const yt = getYouTubeId(project.youtubeUrl || project.videoUrl || '');
    if (yt) {
        const section = document.getElementById('section-video');
        const iframe = document.getElementById('proj-video-iframe');
        const caption = document.getElementById('proj-video-caption');

        section.style.display = 'block';
        iframe.src = `https://www.youtube-nocookie.com/embed/${yt}?rel=0&modestbranding=1`;
        caption.textContent = project.youtubeCaption || project.videoLabel || 'Demo video';
    }
    
    // Initialize lightbox after content is rendered
    initLightbox();
}

function getYouTubeId(input) {
    if (!input || typeof input !== 'string') return '';
    const s = input.trim();
    const m =
        s.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/) ||
        s.match(/youtube\.com\/watch\?v=([A-Za-z0-9_-]{6,})/) ||
        s.match(/youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/);
    return m ? m[1] : '';
}

// ==========================================
// Load Next Project
// ==========================================
function loadNextProject(currentId) {
    const projects = (Array.isArray(window.PROJECTS) ? window.PROJECTS : [])
        .slice()
        .sort((a, b) => (a?.order ?? 999) - (b?.order ?? 999));

    if (projects.length < 2) {
        document.getElementById('next-project-wrapper').style.display = 'none';
        return;
    }

    const idx = projects.findIndex(p => p.id === currentId);
    const safeIdx = idx === -1 ? 0 : idx;
    const next = projects[(safeIdx + 1) % projects.length];
    if (!next || next.id === currentId) {
        document.getElementById('next-project-wrapper').style.display = 'none';
        return;
    }

    showNextProject(next.id, next.title || 'Next Project');
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
