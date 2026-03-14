// ==========================================
// Projects Data (Single Source of Truth)
// Used by: index.html (grid) + project.html (case study)
// ==========================================

(function () {
    // Keep this list ordered via `order` (lower = earlier in UI).
    window.PROJECTS = [
        {
            id: "smart-safety-helmet",
            title: "Automatic Smart Safety Helmet for Electrical Linemen",
            description: "A fully hardware-based safety helmet for night-time and emergency linemen work: automatic lighting, distance-based beam control, humidity alert, and an isolated SOS power path for real accidents.",
            category: "Hardware",
            tech: "Analog, Logic Gates, Sensors",
            imageUrl: "assets/projects/smart-helmet/hero.png",
            tag: "#1 TECHNOVATION 2026",
            status: "winner",
            order: 1,

            problem:
                "Electrical linemen often work at <strong>night</strong> or during <strong>emergency breakdowns</strong>, where visibility is poor and conditions can turn unsafe fast. Holding a torch is not practical, fixed beams can blind or waste power, and high humidity increases risk around live electrical work. In these environments, <strong>microcontroller-based systems can be less desirable</strong> due to EMI/noise concerns and reliability expectations, so we designed a <strong>logic-only</strong> solution.",

            solution:
                "We built a <strong>logic-based circuit system (no microcontroller)</strong> using IR + LDR + humidity sensing and transistor switching. Key modules include:<br/><br/>" +
                "<strong>• Automatic ON/OFF lighting</strong> using an LDR for hands-free operation.<br/>" +
                "<strong>• Distance-based high/low beam</strong> using IR sensing to switch beam levels automatically.<br/>" +
                "<strong>• Humidity alert</strong> (amber indication) for unsafe working conditions.<br/>" +
                "<strong>• SOS safety mode</strong> with a dedicated button that isolates the main circuit and switches to backup power, designed to keep working even in short-circuit scenarios.<br/>" +
                "<strong>• Power system</strong> with battery level indication and TP4056-based charging for stable charging.<br/>" +
                "<strong>• Safety build</strong> with an internal foam layer and strapping to prevent head contact and secure hardware.<br/><br/>" +
                "<strong>Team:</strong> Prince Tagadiya (Lead), Khushi Belani (Co-Lead), Sumona Saha, Khushi Desai, Jenil Jivrajani, Rudra Chauhan, Nisarg Patel, Diya Ankleshvaria.<br/>" +
                "<strong>Mentor:</strong> Dr. Geetali Saha.",

            galleryImage1: "assets/projects/smart-helmet/photos/screenshot-1.jpg",
            galleryCaption1: "Helmet prototype with headlamp switched ON (screenshot-1.jpg)",
            galleryImage2: "assets/projects/smart-helmet/photos/img-2733.jpg",
            galleryCaption2: "Breadboard test setup (sensors + wiring + indicators) (img-2733.jpg)",
            galleryImage3: "assets/projects/smart-helmet/hero.png",
            galleryCaption3: "Winner trophy + certificate snapshot (hero.png)",
            galleryImage4: "assets/projects/smart-helmet/photos/instagram.webp",
            galleryCaption4: "Award moment with trophy (instagram.webp)",
            galleryImage5: "assets/projects/smart-helmet/photos/linkedin-post.jpeg",
            galleryCaption5: "Award moment with certificate (linkedin-post.jpeg)",
            galleryImage6: "assets/projects/smart-helmet/photos/shastri-maidan.jpeg",
            galleryCaption6: "Public display/billboard showing TECHNOVATION highlight (shastri-maidan.jpeg)",
            galleryImage7: "assets/projects/smart-helmet/photos/team-1.jpeg",
            galleryCaption7: "Social media coverage card (Charotar No Avaj) (team-1.jpeg)",
            galleryImage8: "assets/projects/smart-helmet/photos/team-2.jpeg",
            galleryCaption8: "Gujarati newspaper coverage screenshot (team-2.jpeg)",
            galleryImage9: "assets/projects/smart-helmet/press/naya-padkar-2026-01-29.jpeg",
            galleryCaption9: "Press clipping (Naya Padkar, 29 Jan 2026) (naya-padkar-2026-01-29.jpeg)",
            galleryImage10: "assets/projects/smart-helmet/press/nav-gujarat-samay-2026-01-30.jpeg",
            galleryCaption10: "Press clipping (Nav Gujarat Samay, 30 Jan 2026) (nav-gujarat-samay-2026-01-30.jpeg)",
            galleryImage11: "assets/projects/smart-helmet/press/divya-samachar-2026-01-30.jpeg",
            galleryCaption11: "Press clipping (Divya Samachar, 30 Jan 2026) (divya-samachar-2026-01-30.jpeg)",
            galleryImage12: "assets/projects/smart-helmet/press/divya-bhaskar-1.png",
            galleryCaption12: "Press clipping (Divya Bhaskar, page 1) (divya-bhaskar-1.png)",
            galleryImage13: "assets/projects/smart-helmet/press/divya-bhaskar-2.png",
            galleryCaption13: "Press clipping (Divya Bhaskar, page 2) (divya-bhaskar-2.png)",

            result1Label: "TECHNOVATION",
            result1Value: "#1",
            result1Note: "State Level Winner (2026)",
            result2Label: "SSIP 6.0",
            result2Value: "Finalist",
            result2Note: "Only GCET team selected (Vikas Saptah Hackathon 2025)",
            result3Label: "System",
            result3Value: "No MCU",
            result3Note: "Fully hardware-driven reliability",

            duration: "Oct 2024 – Jan 2025",
            teamSize: "8-member team (Team Lead & Circuit Designer)",
            tools: "IR, LDR, Humidity, Logic ICs, Transistor Switching, TP4056",

            // Multiple CTAs
            videoUrl:
                "https://www.linkedin.com/posts/prince-tagadiya_technovation2026-engineering-hardwareproject-activity-7422655004894961664-aYVA",
            videoLabel: "Watch Demo",
            links: [
                {
                    url: "https://www.linkedin.com/posts/prince-tagadiya_hackathon-ssip-gcet-activity-7394730314784210944-gqZQ",
                    label: "Hackathon Finals",
                    icon: "emoji_events"
                }
            ],

            pressLinks: [
                { label: "Charotar No Avaj (Instagram)", url: "https://lnkd.in/dgrZ75_8" },
                { label: "Sardar Patel University (Instagram)", url: "https://lnkd.in/dTQ9aN7d" },
                { label: "Divya Bhaskar (News)", url: "https://lnkd.in/d669HgYR" },
                { label: "SPU + Divya Bhaskar (PDF)", url: "assets/projects/smart-helmet/docs/spu-divya-bhaskar.pdf" },
                { label: "SPU Technovation Jan 2026 (PDF)", url: "assets/projects/smart-helmet/docs/spu-technovation-jan-2026.pdf" },
                { label: "Winner Certificate (PDF)", url: "assets/projects/smart-helmet/docs/certificate.pdf" }
            ],

            heroCaption: "Logic-first, safety-first: hands-free beam control + SOS with isolated backup"
        },

        {
            id: "intellihire",
            title: "IntelliHire — AI-Enabled Intelligent Assessment & Hiring Platform",
            description: "An AI-driven assessment platform that turns a Job Description into a role-specific evaluation flow (MCQ + subjective + coding) and produces transparent scoring, rankings, and anti-cheat signals to reduce fake/irrelevant applications.",
            category: "Software",
            tech: "Artificial Intelligence, Assessment, Analytics",
            imageUrl: "assets/projects/intellihire/photos/candidate-review.jpg",
            tag: "Codeversity Hackathon 2026",
            status: "hackathon",
            order: 2,

            problem:
                "Recruiters waste time screening <strong>fake</strong>, <strong>irrelevant</strong>, or <strong>underqualified</strong> applications because resumes can be inflated and keyword-matched. The goal is to ensure candidates are evaluated strictly against real job requirements with measurable evidence and explainable outcomes.",

            solution:
                "We built an <strong>AI-powered assessment and evaluation platform</strong> that starts from a Job Description and generates a role-aligned assessment pipeline. Core capabilities include:<br/><br/>" +
                "<strong>• JD intelligence</strong>: extract required skills, responsibilities, and difficulty expectations.<br/>" +
                "<strong>• Automated assessment generation</strong>: balanced mix of objective, subjective, and programming questions.<br/>" +
                "<strong>• Smart evaluation</strong>: section-wise scoring and weighted skill mapping for fair shortlisting.<br/>" +
                "<strong>• Anti-fake signals</strong>: resume vs performance mismatch checks and anomaly indicators (integrity flags).<br/>" +
                "<strong>• Recruiter controls</strong>: job creation, cutoffs, leaderboards, and download-ready insights.<br/><br/>" +
                "Built during <strong>Codeversity (24-hour National Level Hackathon)</strong> at <strong>IIT Gandhinagar</strong>, alongside an <strong>AI workshop</strong> session and a campus visit.<br/><br/>" +
                "<strong>Team Creato4:</strong> Prince Tagadiya (Team Leader), Rudra Chauhan, Khushi Belani, Vrushti Budh.",

            galleryImage1: "assets/projects/intellihire/photos/candidate-review.jpg",
            galleryCaption1: "Candidate review screen with integrity flags (tab switching, unrealistic timing) (candidate-review.jpg)",
            galleryImage2: "assets/projects/intellihire/photos/recruiter-dashboard.jpg",
            galleryCaption2: "Recruiter command center dashboard (recruiter-dashboard.jpg)",
            galleryImage3: "assets/projects/intellihire/photos/candidate-dashboard.jpg",
            galleryCaption3: "Candidate portal dashboard (candidate-dashboard.jpg)",
            galleryImage4: "assets/projects/intellihire/photos/match-matrix.jpg",
            galleryCaption4: "Resume vs performance matrix + credibility scoring (match-matrix.jpg)",
            galleryImage5: "assets/projects/intellihire/photos/landing.jpg",
            galleryCaption5: "Landing page: AI-powered skill assessments (landing.jpg)",
            galleryImage6: "assets/projects/intellihire/photos/iit-campus.jpg",
            galleryCaption6: "IIT Gandhinagar campus (iit-campus.jpg)",
            galleryImage7: "assets/projects/intellihire/photos/team-iit.jpg",
            galleryCaption7: "Team photo during the IIT Gandhinagar visit (team-iit.jpg)",
            galleryImage8: "assets/projects/intellihire/photos/linkedin-og.jpg",
            galleryCaption8: "Hackathon environment snapshot (LinkedIn preview image) (linkedin-og.jpg)",
            galleryImage9: "assets/projects/intellihire/photos/hackathon-certificate.jpg",
            galleryCaption9: "Hackathon participation certificate (Codeversity 2026) (hackathon-certificate.jpg)",
            galleryImage10: "assets/projects/intellihire/photos/ai-workshop-certificate.png",
            galleryCaption10: "AI workshop participation certificate (IIT Gandhinagar, Feb 2026) (ai-workshop-certificate.png)",

            result1Label: "Event",
            result1Value: "24H",
            result1Note: "National hackathon build",
            result2Label: "Focus",
            result2Value: "Anti-Fake",
            result2Note: "Skill-first evaluation",
            result3Label: "Output",
            result3Value: "Ranks",
            result3Note: "Scores + leaderboards",

            duration: "Feb 2026",
            teamSize: "Team Creato4 (Team Leader)",
            tools: "AI assessment logic, web dashboards, scoring + analytics",

            youtubeUrl: "https://youtu.be/X3Smb8gK1PA",
            youtubeCaption: "Project demo (YouTube)",

            links: [
                {
                    url: "https://codeversity-bfb92.web.app/",
                    label: "Live Site",
                    icon: "open_in_new"
                },
                {
                    url: "https://www.linkedin.com/posts/rudra-chauhan-47bb862b3_hackathon-codeversity-iitgandhinagar-ugcPost-7430489854125453312-6DH9",
                    label: "Hackathon Post",
                    icon: "article"
                }
            ],

            heroCaption: "From JD to leaderboard: generate assessments, score transparently, and flag integrity risks"
        },

        {
            id: "mediclarify",
            title: "MediClarify — Multimodal Medical Document Simplifier",
            description: "AI-powered tool that turns complex medical documents into simple, educational explanations with a two-phase multimodal pipeline (fast extraction + deep insights). Built using Gemini 3 Pro Preview.",
            category: "Software",
            tech: "Gemini 3 Pro Preview, Multimodal",
            imageUrl: "assets/projects/mediclarify/photos/cover.jpg",
            tag: "Kaggle x Google DeepMind",
            status: "hackathon",
            order: 3,

            problem:
                "Medical documents like <strong>lab reports</strong>, <strong>prescriptions</strong>, and <strong>radiology scans</strong> are often hard to understand for non-medical readers. People need a way to interpret values, ranges, and observations safely without receiving diagnoses or treatment advice.",

            solution:
                "MediClarify uses a <strong>two-phase multimodal pipeline</strong> to keep the UI fast and the insights useful:<br/><br/>" +
                "<strong>Phase 1 — Fast Extraction</strong>: instantly extracts patient details, lab values, units, reference ranges, medicines, and radiology observations.<br/>" +
                "<strong>Phase 2 — Deep Insights</strong>: generates health scores, simplified explanations, comparison insights, and suggested follow-up questions.<br/><br/>" +
                "<strong>Safety-first</strong>: strict rules prevent diagnosis and treatment suggestions; outputs are educational only.<br/>" +
                "<strong>Structured JSON output</strong>: predictable, stable UI rendering.<br/>" +
                "<strong>UX tools</strong>: color-coded ranges, tooltips, trend arrows (↑ ↓ →), skeleton loading, and a clean print/PDF summary.<br/><br/>" +
                "<strong>Hackathon context</strong>: Built for <em>Google DeepMind - Vibe Code with Gemini 3 Pro in AI Studio</em> on Kaggle (Dec 5–12, 2025). Submissions are evaluated mainly via the <strong>video demo + working app</strong>, with scoring focused on impact, technical depth, creativity, and presentation quality.",

            galleryImage1: "assets/projects/mediclarify/photos/cover.jpg",
            galleryCaption1: "Upload + compare mode (wireframe fills section-by-section as AI responds) (cover.jpg)",
            galleryImage2: "assets/projects/mediclarify/photos/result.jpg",
            galleryCaption2: "Deep insights view with health score + summary (patient info redacted) (result.jpg)",
            galleryImage3: "assets/projects/mediclarify/photos/xray.jpg",
            galleryCaption3: "Radiology scan understanding: findings and confidence indicators (xray.jpg)",
            galleryImage4: "assets/projects/mediclarify/photos/chat.jpg",
            galleryCaption4: "Context-aware chat with suggested follow-up questions (chat.jpg)",

            result1Label: "Pipeline",
            result1Value: "2-Phase",
            result1Note: "Fast + deep",
            result2Label: "Docs",
            result2Value: "3 Types",
            result2Note: "Lab / Rx / Radiology",
            result3Label: "Safety",
            result3Value: "Strict",
            result3Note: "Educational only",

            duration: "Dec 2025",
            teamSize: "Solo",
            tools: "Google AI Studio (Build), Gemini 3 Pro Preview",

            youtubeUrl: "https://youtu.be/PWLa_NbjJKg",
            youtubeCaption: "MediClarify demo (YouTube)",

            links: [
                {
                    url: "https://kaggle.com/competitions/gemini-3",
                    label: "Kaggle Competition",
                    icon: "open_in_new"
                }
            ],

            heroCaption: "Explain medical docs safely: instant extraction, then deep, readable insights"
        },

        {
            id: "dayflow-hrms",
            title: "Dayflow — Human Resource Management System (HRMS)",
            description: "An HRMS built in an 8-hour Odoo x GCET hackathon: HR creates employees, onboarding email invites them to set a password, and role-based dashboards keep HR control and employee access clean.",
            category: "Software",
            tech: "HRMS, Role-Based Access, Email Onboarding",
            imageUrl: "assets/projects/dayflow-hrms/photos/landing.png",
            tag: "Odoo x GCET Hackathon",
            status: "hackathon",
            order: 4,

            problem:
                "HR teams need a fast, structured way to onboard employees, manage attendance/leave, and keep employee identity data consistent. In many setups, onboarding is manual, credentials are shared insecurely, and employee IDs can be edited, which breaks auditability.",

            solution:
                "We built <strong>Dayflow</strong>, a lightweight HRMS prototype in <strong>8 hours</strong> with a clean split between <strong>HR controls</strong> and <strong>employee self-service</strong>.<br/><br/>" +
                "<strong>Onboarding flow</strong>: HR creates an employee profile and the system sends an email invitation to the employee’s email ID. The employee sets their own password and logs in.<br/>" +
                "<strong>Immutable identity</strong>: employee ID is auto-generated and <strong>cannot be changed</strong> by the employee (only password can be updated).<br/>" +
                "<strong>HR management</strong>: HR can manage all employees from a dashboard (create, view, and track key stats).<br/>" +
                "<strong>Employee dashboard</strong>: employees get a personal portal for day-to-day actions and visibility.",

            galleryImage1: "assets/projects/dayflow-hrms/photos/landing.png",
            galleryCaption1: "Landing page / product overview (landing.png)",
            galleryImage2: "assets/projects/dayflow-hrms/photos/hr-dashboard.png",
            galleryCaption2: "HR dashboard: manage employees + key metrics (hr-dashboard.png)",
            galleryImage3: "assets/projects/dayflow-hrms/photos/employee-dashboard.png",
            galleryCaption3: "Employee portal dashboard (employee-dashboard.png)",
            galleryImage4: "assets/projects/dayflow-hrms/photos/employee-id-auto.png",
            galleryCaption4: "Employee creation modal with auto-generated ID (redacted) (employee-id-auto.png)",

            result1Label: "Build",
            result1Value: "8H",
            result1Note: "Hackathon sprint",
            result2Label: "Onboarding",
            result2Value: "Email",
            result2Note: "Employee sets password",
            result3Label: "Access",
            result3Value: "Roles",
            result3Note: "HR vs employee",

            duration: "8 Hours (Hackathon)",
            teamSize: "Team Project",
            tools: "Role-based dashboards, email invitation onboarding, employee management",

            youtubeUrl: "https://youtu.be/JBCKNFq0oUw",
            youtubeCaption: "Hackathon demo (YouTube)",

            links: [
                {
                    url: "assets/projects/dayflow-hrms/docs/dayflow-hrms-pitch.pdf",
                    label: "Pitch Deck (PDF)",
                    icon: "picture_as_pdf"
                },
                {
                    url: "https://youtu.be/JBCKNFq0oUw",
                    label: "Watch on YouTube",
                    icon: "play_circle"
                }
            ],

            heroCaption: "Hackathon HRMS: secure onboarding, immutable employee IDs, and role-based dashboards"
        },

        {
            id: "campusflow",
            title: "CampusFlow — AI-Enabled Student Management System (MVP)",
            description: "An AI-powered student management system (MVP) with a customizable dashboard, assignment/exam/material tracking, notifications, storage management, and early-stage OCR + AI extraction to turn PDFs into structured tasks.",
            category: "Software",
            tech: "React, TypeScript, Tailwind, Firebase, AI/OCR",
            imageUrl: "assets/projects/campusflow/photos/landing.jpg",
            tag: "AI CampusFlow (MVP)",
            status: "wip",
            order: 5,

            problem:
                "Students juggle <strong>assignments</strong>, <strong>exams</strong>, <strong>study materials</strong>, and deadlines across scattered tools. Tracking priorities, finding files, and remembering what’s next becomes noisy, and PDF-based instructions often require manual copying into a task list.",

            solution:
                "CampusFlow is a <strong>modern student management system</strong> built with <strong>React + TypeScript + Tailwind</strong> and powered by <strong>Firebase (Auth, Firestore, Storage)</strong>. It focuses on fast day-to-day workflows plus early-stage AI assistance:<br/><br/>" +
                "<strong>• Smart dashboard</strong>: draggable widgets, real-time sync, and personalization.<br/>" +
                "<strong>• Assignments</strong>: deadlines + priority, PDF upload/view, and status tracking.<br/>" +
                "<strong>• Exam planning</strong>: calendar/timeline, countdown widgets, and subject links.<br/>" +
                "<strong>• Study materials</strong>: organized uploads, subject filtering, and quick access.<br/>" +
                "<strong>• Smart notifications</strong>: real-time alerts with unread counts and urgent reminders.<br/>" +
                "<strong>• Storage management</strong>: quota tracking, usage breakdown, and cleanup tools.<br/>" +
                "<strong>• AI (early stage)</strong>: OCR + PDF text extraction, assignment detail extraction (title/summary/deadline/requirements), auto-detect missing fields, and “Campus Intelligence” suggestions.<br/>" +
                "<strong>AI pipeline</strong>: PDF.js attempts fast text extraction first; if the PDF is scanned, it falls back to image-based OCR. Extracted text is sent to Gemini prompts that return strict JSON; if AI quota/key isn’t available, it falls back to local parsing.<br/><br/>" +
                "<strong>How it works (MVP architecture)</strong>: Google sign-in for authentication, Firestore collections for subjects/assignments/exams/materials/notifications (real-time via snapshots), and Firebase Storage for file uploads. Dashboard layouts and semester-specific preferences are persisted locally per semester for fast UX.<br/><br/>" +
                "Note: this is an <strong>MVP</strong> and may contain bugs, but the foundation is designed to scale into a full student + faculty workflow.",

            galleryImage1: "assets/projects/campusflow/photos/dashboard.jpg",
            galleryCaption1: "Smart dashboard overview with quick stats + assistant card (dashboard.jpg)",
            galleryImage2: "assets/projects/campusflow/photos/assignments.jpg",
            galleryCaption2: "Assignments page: deadline tracking + priority workflow (assignments.jpg)",
            galleryImage3: "assets/projects/campusflow/photos/exams.jpg",
            galleryCaption3: "Exam planning page: schedule + subject integration (exams.jpg)",
            galleryImage4: "assets/projects/campusflow/photos/materials.jpg",
            galleryCaption4: "Study materials: upload + filtering (materials.jpg)",
            galleryImage5: "assets/projects/campusflow/photos/storage.jpg",
            galleryCaption5: "Storage management: quota bar + per-file usage tracking (storage.jpg)",
            galleryImage6: "assets/projects/campusflow/photos/upgrade.jpg",
            galleryCaption6: "Upgrade plan screen (SaaS-style tiers) (upgrade.jpg)",
            galleryImage7: "assets/projects/campusflow/photos/ai-extract.jpg",
            galleryCaption7: "AI extraction from an assignment document (ai-extract.jpg)",
            galleryImage8: "assets/projects/campusflow/photos/ai-missing-info.jpg",
            galleryCaption8: "AI prompts for missing assignment fields (ai-missing-info.jpg)",
            galleryImage9: "assets/projects/campusflow/photos/ai-campus-intelligence.jpg",
            galleryCaption9: "Campus Intelligence: AI reading an assignment and generating insights (ai-campus-intelligence.jpg)",

            result1Label: "UI",
            result1Value: "Widgets",
            result1Note: "Draggable dashboard",
            result2Label: "Backend",
            result2Value: "Firebase",
            result2Note: "Auth + DB + Storage",
            result3Label: "AI",
            result3Value: "OCR + GenAI",
            result3Note: "PDF extraction + insights",

            duration: "MVP Build (2025)",
            teamSize: "Solo (Builder)",
            tools: "React, TS, Tailwind, Firebase Auth/Firestore/Storage, PDF.js, Tesseract OCR, Gemini API",

            youtubeUrl: "https://youtu.be/jWQNTMpu1VA",
            youtubeCaption: "CampusFlow demo (YouTube)",

            links: [
                {
                    url: "https://lnkd.in/dQkEz9vQ",
                    label: "Live Demo",
                    icon: "open_in_new"
                },
                {
                    url: "https://lnkd.in/dt5G2ywx",
                    label: "Demo Video",
                    icon: "play_circle"
                },
                {
                    url: "https://lnkd.in/dC5zfD59",
                    label: "GitHub Repo",
                    icon: "code"
                },
                {
                    url: "https://www.linkedin.com/posts/prince-tagadiya_im-excited-to-share-my-latest-project-activity-7370880563748036608-FB1w",
                    label: "LinkedIn Post",
                    icon: "article"
                }
            ],

            heroCaption: "All-in-one student workflow: dashboard, deadlines, materials, storage, plus OCR-powered AI helpers"
        },

        {
            id: "traffic-light-controller",
            title: "Density-Based Traffic Light Controller",
            description:
                "A DIY smart traffic management system published in Electronics For You Magazine (Jan 2026). Uses Arduino Uno & Nano with ultrasonic sensors to dynamically adjust traffic signal timing based on real-time vehicle density at a 4-way intersection.",
            category: "Hardware",
            tech: "Arduino, C++, I2C",
            imageUrl: "assets/projects/traffic-light/main-image.jpeg",
            tag: "Published in EFY",
            status: "published",
            order: 6,
            solution:
                "We built an <strong>intelligent density-based traffic system</strong> using an Arduino Uno (master) and Arduino Nano (slave) with <strong>4 HC-SR04 ultrasonic sensors</strong>, one per lane. Sensors continuously measure vehicle distance — if a vehicle is detected within 15cm, the lane gets a <strong>10-second green signal</strong>; otherwise, only a brief <strong>2-second green phase</strong>. The I2C protocol enables seamless communication between the sensor unit and control unit, dynamically optimising traffic flow at a four-way intersection.",
            problem:
                "Traditional traffic light systems operate on fixed timing cycles, regardless of actual traffic conditions. This leads to <strong>unnecessary waiting at empty intersections</strong> and <strong>congestion buildup</strong> in busy lanes. With increasing urbanisation, fixed-cycle traffic signals cause idle delays, fuel wastage, and increased commute times — especially during fluctuating or uneven traffic flow.",
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
})();
