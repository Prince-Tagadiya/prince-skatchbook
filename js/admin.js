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
// Auth State Observer
// ==========================================
auth.onAuthStateChanged((user) => {
    if (user) {
        showAdminView();
        loadCurrentData();
        checkConnection();
    } else {
        showLoginView();
    }
});

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
                // If no document exists, create one with defaults
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

    // Show photo preview if URL exists
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
                // Convert comma-separated to array
                data[field] = el.value.split(',').map(r => r.trim()).filter(r => r.length > 0);
            } else {
                data[field] = el.value;
            }
        }
    });

    // Add timestamp
    data.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    db.collection('portfolio').doc('main').set(data, { merge: true })
        .then(() => {
            showToast('✅ Saved! Changes are live.');
            // Update photo preview
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
    // Remove existing toasts
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
        bio: 'Building digital products that feel handmade. I specialize in bridging the gap between <strong class="font-medium text-[#181111] dark:text-white border-b-2 border-primary/30">clean code</strong> and <strong class="font-medium text-[#181111] dark:text-white border-b-2 border-primary/30">creative chaos</strong>.',
        photoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqASgq1tz50HGvbHXymO7eYMDVyEMQgwmEwwqle4IEn5MC-cwknASqLdGjLtaePqEAny6_8k40jq9FooO7NiPfEszAG8QpwMccGpoVTFyrXnGVRK-2Ju8glv-D-52dJAOQQXtu0Sk4VwliIg63Ds0qiTwHMTR7Vw9WW2EFI_VR6RygqfIetggcYFqbJwicJoKEDN_R7J7eclkcZMR5dub2K9tdsYD_0myEIzcxXll4SCSR-p-5NGoS7UNGd-ntaVu9jzExHMpzDFk',
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

    // Enter key on login password field
    const loginPassword = document.getElementById('login-password');
    if (loginPassword) {
        loginPassword.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    }
});
