// ==========================================
// Firebase Configuration — REPLACE with your own
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyBdlqyv_YkBm5zdX3wozUwaedi8MSK5fcU",
    authDomain: "prince-portfolio-8f685.firebaseapp.com",
    projectId: "prince-portfolio-8f685",
    storageBucket: "prince-portfolio-8f685.firebasestorage.app",
    messagingSenderId: "201201926767",
    appId: "1:201201926767:web:ccc8116ef4ebb20a3d439a",
    measurementId: "G-CS7RWF25GK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
