// ==========================================
// Admin Panel — Portfolio Management
// ==========================================

// All field IDs that map to Firestore document keys
const FIELDS = [
    'firstName', 'lastName', 'brandName', 'tagline',
    'greeting', 'roles', 'bio',
    'photoUrl', 'photoCaption', 'stickerText',
    'email', 'twitterUrl', 'githubUrl', 'linkedinUrl',
    'footerText'
];

// ==========================================
// Wait for Firebase to be ready
// ==========================================
function initAdmin() {
    auth.onAuthStateChanged((user) => {
        if (user) {
            showAdminView();
            loadCurrentData();
            loadAdminProjects();
            checkConnection();
        } else {
            showLoginView();
        }
    });
}

// Check if Firebase is ready
if (typeof auth !== 'undefined' && auth) {
    initAdmin();
} else {
    window.addEventListener('firebase-ready', initAdmin);
}

// ==========================================
// Login / Logout
// ==========================================
function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    if (!email || !password) {
        showError('Please enter email and password.');
        return;
    }

    btn.disabled = true;
    btn.textContent = 'Signing in...';

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            errorEl.style.display = 'none';
        })
        .catch((error) => {
            let message = 'Login failed.';
            if (error.code === 'auth/user-not-found') message = 'No account found with this email.';
            else if (error.code === 'auth/wrong-password') message = 'Incorrect password.';
            else if (error.code === 'auth/invalid-email') message = 'Invalid email format.';
            else if (error.code === 'auth/invalid-credential') message = 'Invalid credentials. Check email & password.';
            showError(message);
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerHTML = '<span class="material-symbols-outlined" style="vertical-align: middle; margin-right: 6px;">login</span> Sign In';
        });
}

function handleLogout() {
    auth.signOut();
}

function showError(msg) {
    const errorEl = document.getElementById('login-error');
    errorEl.textContent = msg;
    errorEl.style.display = 'block';
}

function showLoginView() {
    document.getElementById('login-view').style.display = 'block';
    document.getElementById('admin-view').style.display = 'none';
}

function showAdminView() {
    document.getElementById('login-view').style.display = 'none';
    document.getElementById('admin-view').style.display = 'block';
}

// ==========================================
// Load Data from Firestore
// ==========================================
function loadCurrentData() {
    db.collection('portfolio').doc('main').get()
        .then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                populateForm(data);
                showToast('✓ Data loaded successfully');
            } else {
                const defaults = getDefaultData();
                db.collection('portfolio').doc('main').set(defaults)
                    .then(() => {
                        populateForm(defaults);
                        showToast('✓ Default data created');
                    });
            }
        })
        .catch((error) => {
            console.error('Error loading data:', error);
            showToast('⚠ Error loading data');
        });
}

// ==========================================
// Populate Form Fields
// ==========================================
function populateForm(data) {
    FIELDS.forEach(field => {
        const el = document.getElementById(`field-${field}`);
        if (el && data[field] !== undefined) {
            if (field === 'roles' && Array.isArray(data[field])) {
                el.value = data[field].join(', ');
            } else {
                el.value = data[field];
            }
        }
    });

    if (data.photoUrl) {
        const preview = document.getElementById('photo-preview');
        const previewImg = document.getElementById('photo-preview-img');
        preview.style.display = 'block';
        previewImg.src = data.photoUrl;
    }
}

// ==========================================
// Save Data to Firestore
// ==========================================
function handleSave(event) {
    event.preventDefault();

    const saveBtn = document.getElementById('save-btn');
    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span class="material-symbols-outlined" style="vertical-align: middle; font-size: 18px; margin-right: 4px;">hourglass_top</span> Saving...';

    const data = {};
    FIELDS.forEach(field => {
        const el = document.getElementById(`field-${field}`);
        if (el) {
            if (field === 'roles') {
                data[field] = el.value.split(',').map(r => r.trim()).filter(r => r.length > 0);
            } else {
                data[field] = el.value;
            }
        }
    });

    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    db.collection('portfolio').doc('main').set(data, { merge: true })
        .then(() => {
            showToast('✅ Saved! Changes are live.');
            if (data.photoUrl) {
                const preview = document.getElementById('photo-preview');
                const previewImg = document.getElementById('photo-preview-img');
                preview.style.display = 'block';
                previewImg.src = data.photoUrl;
            }
        })
        .catch((error) => {
            console.error('Save error:', error);
            showToast('❌ Error saving data. Check console.');
        })
        .finally(() => {
            saveBtn.disabled = false;
            saveBtn.innerHTML = '<span class="material-symbols-outlined" style="vertical-align: middle; font-size: 18px; margin-right: 4px;">save</span> Save Changes';
        });
}

// ==========================================
// Connection Status
// ==========================================
function checkConnection() {
    const statusEl = document.getElementById('connection-status');
    try {
        db.collection('portfolio').doc('main').get()
            .then(() => {
                statusEl.className = 'admin-status connected';
                statusEl.innerHTML = '<span style="width: 8px; height: 8px; border-radius: 50%; background: currentColor; display: inline-block;"></span> Connected';
            })
            .catch(() => {
                statusEl.className = 'admin-status disconnected';
                statusEl.innerHTML = '<span style="width: 8px; height: 8px; border-radius: 50%; background: currentColor; display: inline-block;"></span> Disconnected';
            });
    } catch (e) {
        statusEl.className = 'admin-status disconnected';
        statusEl.innerHTML = '<span style="width: 8px; height: 8px; border-radius: 50%; background: currentColor; display: inline-block;"></span> Error';
    }
}

// ==========================================
// Toast Notification
// ==========================================
function showToast(message) {
    document.querySelectorAll('.admin-toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'admin-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// Default Data
// ==========================================
function getDefaultData() {
    return {
        firstName: 'Prince',
        lastName: 'Tagadiya',
        brandName: 'Prince.',
        tagline: 'Available for hire!',
        greeting: '👋 Hello, world!',
        roles: ['Designer', 'Developer', 'Creative Thinker'],
        bio: 'Building digital products that feel handmade.',
        photoUrl: '',
        photoCaption: 'Me @ Work',
        stickerText: 'Open for<br/>Collabs!',
        email: 'prince@example.com',
        twitterUrl: 'https://twitter.com/',
        githubUrl: 'https://github.com/',
        linkedinUrl: 'https://linkedin.com/in/',
        footerText: '2025 Prince Tagadiya. Built with passion.'
    };
}

// ==========================================
// PROJECTS MANAGEMENT (CRUD)
// ==========================================

function loadAdminProjects() {
    db.collection('projects').orderBy('order', 'asc').onSnapshot((snapshot) => {
        const projects = [];
        snapshot.forEach(doc => {
            projects.push({ id: doc.id, ...doc.data() });
        });
        renderAdminProjectsList(projects);
    }, (error) => {
        console.warn('Error loading projects:', error.message);
        const listEl = document.getElementById('projects-list');
        if (listEl) {
            listEl.innerHTML = `
                <div class="admin-card" style="text-align: center; color: #999; padding: 40px;">
                    <span class="material-symbols-outlined" style="font-size: 40px; opacity: 0.3;">warning</span>
                    <p style="margin-top: 8px;">Could not load projects. The 'projects' collection may not exist yet. Add your first project!</p>
                </div>`;
        }
    });
}

function renderAdminProjectsList(projects) {
    const listEl = document.getElementById('projects-list');
    if (!listEl) return;

    if (projects.length === 0) {
        listEl.innerHTML = `
            <div class="admin-card" style="text-align: center; color: #999; padding: 40px;">
                <span class="material-symbols-outlined" style="font-size: 40px; opacity: 0.3;">folder_open</span>
                <p style="margin-top: 8px;">No projects yet. Click "Add Project" to create your first one.</p>
            </div>`;
        return;
    }

    listEl.innerHTML = projects.map(project => `
        <div class="admin-card" style="display: flex; align-items: center; gap: 16px; padding: 16px;">
            <div style="width: 80px; height: 60px; border-radius: 6px; overflow: hidden; flex-shrink: 0; background: #222; border: 1px solid #333;">
                ${project.imageUrl
                    ? `<img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />`
                    : `<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #555;"><span class="material-symbols-outlined">image</span></div>`
                }
            </div>
            <div style="flex: 1; min-width: 0;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <h4 style="font-size: 16px; font-weight: 700; color: white;">${project.title || 'Untitled'}</h4>
                    ${project.status === 'wip' ? '<span style="background: #ec1313; color: white; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 700;">WIP</span>' : '<span style="background: #22c55e; color: white; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 700;">Live</span>'}
                    ${project.category ? `<span style="background: #333; color: #ccc; font-size: 10px; padding: 2px 6px; border-radius: 4px;">${project.category}</span>` : ''}
                </div>
                <p style="color: #888; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px;">${project.description || 'No description'}</p>
            </div>
            <div style="display: flex; gap: 8px; flex-shrink: 0;">
                <button class="admin-btn admin-btn-secondary" onclick="editProject('${project.id}')" style="font-size: 12px; padding: 6px 12px;">
                    <span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle;">edit</span>
                </button>
                <button class="admin-btn admin-btn-secondary" onclick="deleteProject('${project.id}', '${(project.title || '').replace(/'/g, "\\'")}')" style="font-size: 12px; padding: 6px 12px; color: #ef4444;">
                    <span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle;">delete</span>
                </button>
            </div>
        </div>
    `).join('');
}

function showProjectForm(data) {
    const wrapper = document.getElementById('project-form-wrapper');
    wrapper.style.display = 'block';

    // Reset form
    document.getElementById('project-edit-id').value = '';
    document.getElementById('proj-title').value = '';
    document.getElementById('proj-category').value = '';
    document.getElementById('proj-description').value = '';
    document.getElementById('proj-tag').value = '';
    document.getElementById('proj-tech').value = '';
    document.getElementById('proj-imageUrl').value = '';
    document.getElementById('proj-link').value = '';
    document.getElementById('proj-status').value = 'published';
    document.getElementById('proj-order').value = '1';
    document.getElementById('proj-image-preview').style.display = 'none';
    document.getElementById('project-form-title').textContent = 'Add New Project';

    if (data) {
        document.getElementById('project-edit-id').value = data.id || '';
        document.getElementById('proj-title').value = data.title || '';
        document.getElementById('proj-category').value = data.category || '';
        document.getElementById('proj-description').value = data.description || '';
        document.getElementById('proj-tag').value = data.tag || '';
        document.getElementById('proj-tech').value = data.tech || '';
        document.getElementById('proj-imageUrl').value = data.imageUrl || '';
        document.getElementById('proj-link').value = data.link || '';
        document.getElementById('proj-status').value = data.status || 'published';
        document.getElementById('proj-order').value = data.order || 1;
        document.getElementById('project-form-title').textContent = 'Edit Project';

        if (data.imageUrl) {
            document.getElementById('proj-image-preview').style.display = 'block';
            document.getElementById('proj-image-preview-img').src = data.imageUrl;
        }
    }

    wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideProjectForm() {
    document.getElementById('project-form-wrapper').style.display = 'none';
}

function saveProject() {
    const editId = document.getElementById('project-edit-id').value;
    const title = document.getElementById('proj-title').value.trim();
    const category = document.getElementById('proj-category').value.trim();

    if (!title) {
        showToast('⚠ Title is required');
        return;
    }
    if (!category) {
        showToast('⚠ Category is required');
        return;
    }

    const projectData = {
        title,
        category,
        description: document.getElementById('proj-description').value.trim(),
        tag: document.getElementById('proj-tag').value.trim(),
        tech: document.getElementById('proj-tech').value.trim(),
        imageUrl: document.getElementById('proj-imageUrl').value.trim(),
        link: document.getElementById('proj-link').value.trim(),
        status: document.getElementById('proj-status').value,
        order: parseInt(document.getElementById('proj-order').value) || 1,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    let promise;
    if (editId) {
        promise = db.collection('projects').doc(editId).update(projectData);
    } else {
        projectData.createdAt = firebase.firestore.FieldValue.serverTimestamp();
        promise = db.collection('projects').add(projectData);
    }

    promise
        .then(() => {
            showToast(editId ? '✅ Project updated!' : '✅ Project added!');
            hideProjectForm();
        })
        .catch((error) => {
            console.error('Save project error:', error);
            showToast('❌ Error saving project.');
        });
}

function editProject(id) {
    db.collection('projects').doc(id).get()
        .then((doc) => {
            if (doc.exists) {
                showProjectForm({ id: doc.id, ...doc.data() });
            }
        });
}

function deleteProject(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    db.collection('projects').doc(id).delete()
        .then(() => {
            showToast('🗑 Project deleted');
        })
        .catch((error) => {
            console.error('Delete error:', error);
            showToast('❌ Error deleting project.');
        });
}

// ==========================================
// Photo URL Preview (live)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const photoInput = document.getElementById('field-photoUrl');
    if (photoInput) {
        photoInput.addEventListener('input', () => {
            const url = photoInput.value.trim();
            const preview = document.getElementById('photo-preview');
            const previewImg = document.getElementById('photo-preview-img');
            if (url) {
                preview.style.display = 'block';
                previewImg.src = url;
            } else {
                preview.style.display = 'none';
            }
        });
    }

    // Project image URL preview
    const projImageInput = document.getElementById('proj-imageUrl');
    if (projImageInput) {
        projImageInput.addEventListener('input', () => {
            const url = projImageInput.value.trim();
            const preview = document.getElementById('proj-image-preview');
            const previewImg = document.getElementById('proj-image-preview-img');
            if (url) {
                preview.style.display = 'block';
                previewImg.src = url;
            } else {
                preview.style.display = 'none';
            }
        });
    }

    // Enter key on login password field
    const loginPassword = document.getElementById('login-password');
    if (loginPassword) {
        loginPassword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }
});
