(function () {
    const STORAGE_KEY = "portfolio-custom-certificates";

    const BASE_CERTIFICATES = [
        {
            id: "technovation-2026-winner",
            title: "1st Place Winner - Technovation Hackathon 2026",
            issuer: "Sardar Patel University (SPU), Vallabh Vidyanagar",
            issued: "Jan 2026",
            credentialId: "COD034VER",
            credentialUrl: "",
            imageUrl: "assets/certificates/technovation-2026-winner/technovation-winner.jpeg",
            imageLabel: "technovation-winner.jpeg",
            note: "State-level winner for Automatic Smart Safety Helmet for Electrical Linemen.",
            skills: ["IoT / Embedded Systems", "Team Leadership", "Problem Solving", "Product Development", "Product Design"],
            featured: true,
            accent: "yellow",
            year: "2026"
        },
        {
            id: "vikas-saptah-hackathon-2025",
            title: "Vikas Saptah Hackathon 2025",
            issuer: "SSIP Gujarat",
            issued: "Oct 2025",
            credentialId: "TM000338",
            credentialUrl: "",
            imageUrl: "assets/certificates/vikas-saptah-hackathon-2025/vikas-saptah.jpeg",
            imageLabel: "vikas-saptah.jpeg",
            note: "Final round selection; only GCET team selected for the finals.",
            skills: ["Team Leadership", "Circuit Design", "Critical Thinking"],
            featured: true,
            accent: "blue",
            year: "2025"
        },
        {
            id: "wordpress-website-development",
            title: "WordPress - Website Development",
            issuer: "Billi4You",
            issued: "Nov 2023",
            credentialId: "",
            credentialUrl: "",
            imageUrl: "assets/certificates/wordpress-website-development/billi4you-wordpress.jpeg",
            imageLabel: "billi4you-wordpress.jpeg",
            note: "Completed in Nov 2021 and officially claimed in Nov 2023.",
            skills: ["WordPress", "Website Development"],
            featured: true,
            accent: "green",
            year: "2023"
        },
        {
            id: "hackerrank-python-basic",
            title: "python_basic certificate",
            issuer: "HackerRank",
            issued: "Feb 2023",
            credentialId: "b405c7dc2c65",
            credentialUrl: "https://www.hackerrank.com/certificates/b405c7dc2c65",
            imageUrl: "assets/certificates/hackerrank-python-basic/hackerrank-python.jpeg",
            imageLabel: "hackerrank-python.jpeg",
            note: "",
            skills: ["Python (Programming Language)"],
            accent: "red",
            year: "2023"
        },
        {
            id: "hackerrank-java-basic",
            title: "java_basic certificate",
            issuer: "HackerRank",
            issued: "Feb 2023",
            credentialId: "7B0A04878372",
            credentialUrl: "https://www.hackerrank.com/certificates/7b0a04878372",
            imageUrl: "assets/certificates/hackerrank-java-basic/hackerrank-java.jpeg",
            imageLabel: "hackerrank-java.jpeg",
            note: "",
            skills: ["Java"],
            accent: "indigo",
            year: "2023"
        },
        {
            id: "sololearn-html",
            title: "HTML Sololearn",
            issuer: "Sololearn",
            issued: "Dec 2022",
            credentialId: "CT-BDBDPP7X",
            credentialUrl: "",
            imageUrl: "assets/certificates/sololearn-html/sololearn-html.jpeg",
            imageLabel: "sololearn-html.jpeg",
            note: "",
            skills: ["HTML5"],
            accent: "orange",
            year: "2022"
        },
        {
            id: "edywo-ultimate-edit",
            title: "Ultimate Edit by edywo",
            issuer: "Edywo",
            issued: "Feb 2023",
            credentialId: "cert_ngrn2kxc",
            credentialUrl: "",
            imageUrl: "assets/certificates/edywo-ultimate-edit/video-editing.jpeg",
            imageLabel: "video-editing.jpeg",
            note: "",
            skills: ["Video Editing"],
            accent: "pink",
            year: "2023"
        },
        {
            id: "google-digital-marketing",
            title: "The Fundamental of Digital Marketing",
            issuer: "Google Digital Garage",
            issued: "Jun 2021",
            credentialId: "M82 6NZ ZPG",
            credentialUrl: "",
            imageUrl: "assets/certificates/google-digital-marketing/google-digital-marketing.jpeg",
            imageLabel: "google-digital-marketing.jpeg",
            note: "",
            skills: ["Digital Marketing"],
            accent: "slate",
            year: "2021"
        },
        {
            id: "codeversity-2026-participation",
            title: "Codeversity National Level Hackathon 2026",
            issuer: "Codeversity",
            issued: "Feb 2026",
            credentialId: "COD1035VER",
            credentialUrl: "",
            imageUrl: "assets/certificates/codeversity-2026-participation/codeversity-participation.jpeg",
            imageLabel: "codeversity-participation.jpeg",
            note: "Certificate of participation for Team Creato4 under the Artificial Intelligence domain at IIT Gandhinagar, held from 6th to 8th February 2026.",
            skills: ["Artificial Intelligence", "Hackathon", "Team Creato4"],
            accent: "yellow",
            year: "2026"
        },
        {
            id: "codeversity-ai-workshop-2026",
            title: "Artificial Intelligence Workshop",
            issuer: "Codeversity",
            issued: "Feb 2026",
            credentialId: "COD034VER",
            credentialUrl: "",
            imageUrl: "assets/certificates/codeversity-ai-workshop-2026/codeversity-ai-workshop.png",
            imageLabel: "codeversity-ai-workshop.png",
            note: "Certificate for participating in the Artificial intelligence workshop held at IIT Gandhinagar on 6th February 2026.",
            skills: ["Artificial Intelligence", "Workshop", "IIT Gandhinagar"],
            accent: "blue",
            year: "2026"
        }
    ];

    function slugify(value) {
        return String(value || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function normalizeCertificate(raw) {
        const title = String(raw?.title || "").trim();
        const issuer = String(raw?.issuer || "").trim();
        const id = String(raw?.id || slugify(title || `${issuer}-certificate`)).trim();

        return {
            id,
            title: title || "Untitled Certificate",
            issuer: issuer || "Unknown Issuer",
            issued: String(raw?.issued || "").trim(),
            credentialId: String(raw?.credentialId || "").trim(),
            credentialUrl: String(raw?.credentialUrl || "").trim(),
            imageUrl: String(raw?.imageUrl || "").trim(),
            imageLabel: String(raw?.imageLabel || "").trim(),
            note: String(raw?.note || "").trim(),
            skills: Array.isArray(raw?.skills) ? raw.skills.filter(Boolean).map(String) : [],
            featured: Boolean(raw?.featured),
            accent: String(raw?.accent || "yellow").trim(),
            year: String(raw?.year || raw?.issued || "").trim()
        };
    }

    function getCustomCertificates() {
        try {
            const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            return Array.isArray(parsed) ? parsed.map(normalizeCertificate) : [];
        } catch (error) {
            return [];
        }
    }

    function getCertificates() {
        const merged = [...BASE_CERTIFICATES.map(normalizeCertificate), ...getCustomCertificates()];
        const seen = new Set();
        return merged.filter((item) => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
        });
    }

    function getCertificateById(id) {
        return getCertificates().find((item) => item.id === id) || null;
    }

    function saveCustomCertificate(cert) {
        const next = normalizeCertificate(cert);
        const current = getCustomCertificates().filter((item) => item.id !== next.id);
        current.unshift(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
        return next;
    }

    window.CERTIFICATES = BASE_CERTIFICATES.map(normalizeCertificate);
    window.getCertificates = getCertificates;
    window.getCertificateById = getCertificateById;
    window.saveCustomCertificate = saveCustomCertificate;
    window.slugifyCertificate = slugify;
})();
