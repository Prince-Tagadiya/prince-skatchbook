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

    // Get project ID from URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');

    if (!projectId) {
        showError();
        return;
    }

    // Load project data
    function loadProject() {
        try {
            db.collection('projects').doc(projectId).get()
                .then((doc) => {
                    if (doc.exists) {
                        const project = { id: doc.id, ...doc.data() };
                        renderProject(project);
                        loadNextProject(project.order || 999);
                    } else {
                        showError();
                    }
                })
                .catch((error) => {
                    console.error('Error loading project:', error);
                    showError();
                });
        } catch (e) {
            console.error('Firebase not ready:', e);
            showError();
        }
    }

    if (typeof db !== 'undefined' && db) {
        loadProject();
    } else {
        window.addEventListener('firebase-ready', loadProject);
    }
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
                    <div class="bg-white dark:bg-[#1a1a1a] p-2 border-2 ${i === 0 ? 'border-dashed border-gray-300 dark:border-gray-600 rounded-lg' : 'border-black dark:border-white rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]'} relative">
                        ${i === 0 ? '<div class="absolute -top-3 -right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rotate-6 shadow-md">Preview</div>' : ''}
                        <div class="aspect-[4/3] bg-gray-50 dark:bg-black/40 overflow-hidden">
                            <img alt="${img.caption}" class="w-full h-full object-cover ${i === 0 ? 'opacity-80 mix-blend-multiply dark:mix-blend-normal grayscale contrast-125' : 'grayscale contrast-125'}" src="${img.url}" />
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
        document.getElementById('proj-external-link').href = project.link;
    }
}

// ==========================================
// Load Next Project
// ==========================================
function loadNextProject(currentOrder) {
    try {
        db.collection('projects')
            .orderBy('order', 'asc')
            .where('order', '>', currentOrder)
            .limit(1)
            .get()
            .then((snapshot) => {
                if (snapshot.empty) {
                    // Wrap around to first project
                    db.collection('projects').orderBy('order', 'asc').limit(1).get()
                        .then((firstSnap) => {
                            if (!firstSnap.empty) {
                                const nextDoc = firstSnap.docs[0];
                                const nextProject = nextDoc.data();
                                if (nextDoc.id !== new URLSearchParams(window.location.search).get('id')) {
                                    showNextProject(nextDoc.id, nextProject.title);
                                }
                            }
                        });
                } else {
                    const nextDoc = snapshot.docs[0];
                    showNextProject(nextDoc.id, nextDoc.data().title);
                }
            });
    } catch (e) {
        // No next project
    }
}

function showNextProject(id, title) {
    const wrapper = document.getElementById('next-project-wrapper');
    wrapper.style.display = 'block';
    document.getElementById('next-project-link').href = `project.html?id=${id}`;
    document.getElementById('next-project-title').textContent = title;
}

// ==========================================
// Error State
// ==========================================
function showError() {
    document.getElementById('project-loading').style.display = 'none';
    document.getElementById('project-error').style.display = 'block';
}
