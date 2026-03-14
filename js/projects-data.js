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
            id: "ambient-tv-lighting",
            title: "Smart Ambient TV Lighting System Using ESP32, WLED, and Hyperion",
            description: "A fully wireless ambient backlighting system for a Samsung Frame TV using ESP32 + WLED and Hyperion Screen Grabber on the TV itself, eliminating HDMI splitters, USB capture hardware, and external PCs.",
            category: "Hardware",
            tech: "ESP32, WLED, Hyperion, WS2812B",
            imageUrl: "assets/projects/ambient-tv-lighting/photos/ambient-glow-blue.png",
            tag: "DIY Entertainment Hardware",
            status: "prototype",
            order: 2,

            problem:
                "Most DIY ambilight setups still depend on <strong>HDMI splitters</strong>, <strong>USB grabbers</strong>, or an <strong>external PC/Raspberry Pi</strong> to capture screen content. That adds cost, clutter, and wiring complexity. The goal here was to build a <strong>cleaner and more modern ambient lighting system</strong> that reacts to TV content in real time while keeping the installation minimal and wireless.",

            solution:
                "This project uses an <strong>ESP32 running WLED</strong> to control a <strong>5V WS2812B addressable LED strip</strong> mounted behind a Samsung Frame TV. Instead of grabbing HDMI externally, the system uses <strong>Hyperion Screen Grabber</strong> running directly on the TV to capture screen data and send LED color data over <strong>Wi-Fi via UDP</strong> to the ESP32.<br/><br/>" +
                "<strong>Signal flow</strong>: Amazon Fire TV Stick 4K -> Samsung Frame TV -> Hyperion Screen Grabber -> Wi-Fi UDP -> ESP32 with WLED -> WS2812B LED strip.<br/><br/>" +
                "<strong>Key benefits</strong>:<br/>" +
                "<strong>• Fully wireless capture path</strong> with no HDMI splitter or USB grabber.<br/>" +
                "<strong>• Real-time sync</strong> between TV content and rear LED glow.<br/>" +
                "<strong>• WLED control</strong> for custom colors, presets, and idle effects.<br/>" +
                "<strong>• Hyperion layout mapping</strong> for precise LED placement around the TV frame.<br/>" +
                "<strong>• Low-cost build</strong> using common hobby parts and open-source software.<br/><br/>" +
                "<strong>Bill of materials from the document</strong>: ESP32 dev board, 5V WS2812B strip, 5V 10A supply, 1000uF capacitor, jumper wires, Samsung Frame TV, and Amazon Fire TV Stick 4K.<br/><br/>" +
                "<strong>Setup approach</strong>: flash WLED to the ESP32, connect it to Wi-Fi, wire the LED strip with shared ground and stable 5V power, install Hyperion Screen Grabber on the TV, then configure Hyperion NG with the correct LED count/layout and the ESP32 target IP.<br/><br/>" +
                "<strong>Observed result</strong>: the write-up notes seamless LED response with no noticeable lag over UDP, stronger immersion during night viewing, and better color accuracy after brightness/smoothing adjustments in Hyperion. It also highlights the importance of stable 5V power to avoid flicker or ESP32 resets.",

            galleryImage1: "assets/projects/ambient-tv-lighting/photos/block-diagram.png",
            galleryCaption1: "System block diagram: TV-side screen capture over Wi-Fi to ESP32 WLED and WS2812B LEDs (block-diagram.png)",
            galleryImage2: "assets/projects/ambient-tv-lighting/photos/hyperion-led-layout.png",
            galleryCaption2: "Hyperion LED layout mapping with LED counts and frame preview (hyperion-led-layout.png)",
            galleryImage3: "assets/projects/ambient-tv-lighting/photos/live-control-and-preview.png",
            galleryCaption3: "Live setup preview showing Hyperion mapping and on-screen LED simulation during calibration (live-control-and-preview.png)",
            galleryImage4: "assets/projects/ambient-tv-lighting/photos/wled-mobile-ui.jpg",
            galleryCaption4: "WLED mobile control interface used for testing colors, brightness, and presets (wled-mobile-ui.jpg)",
            galleryImage5: "assets/projects/ambient-tv-lighting/photos/live-preview-rainbow.jpg",
            galleryCaption5: "Real-time TV sync test with color-rich preview and Hyperion live mapping in foreground (live-preview-rainbow.jpg)",
            galleryImage6: "assets/projects/ambient-tv-lighting/photos/live-preview-home-screen.jpg",
            galleryCaption6: "Home-screen sync test showing frame-based LED response around the TV (live-preview-home-screen.jpg)",
            galleryImage7: "assets/projects/ambient-tv-lighting/photos/esp32-bench-board.jpg",
            galleryCaption7: "ESP32 bench wiring and power-stage prototyping during hardware setup (esp32-bench-board.jpg)",
            galleryImage8: "assets/projects/ambient-tv-lighting/photos/ambient-glow-warm.png",
            galleryCaption8: "Ambient backlight effect during warm-toned playback in a dark room (ambient-glow-warm.png)",
            galleryImage9: "assets/projects/ambient-tv-lighting/photos/ambient-glow-blue.png",
            galleryCaption9: "Ambient backlight effect during blue-dominant screen content in a dark room (ambient-glow-blue.png)",

            result1Label: "Capture",
            result1Value: "TV App",
            result1Note: "No HDMI grabber needed",
            result2Label: "Control",
            result2Value: "WLED",
            result2Note: "ESP32 over Wi-Fi",
            result3Label: "Sync",
            result3Value: "Real-Time",
            result3Note: "UDP-based LED updates",

            duration: "DIY prototype (2025)",
            teamSize: "Solo",
            tools: "ESP32, WLED, Hyperion NG, WS2812B, Samsung Frame TV, Fire TV Stick 4K",

            links: [
                {
                    url: "assets/projects/ambient-tv-lighting/docs/smart-ambient-tv-lighting-system.docx",
                    label: "Project Write-up (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "Wireless ambilight without the usual mess: TV app capture, ESP32 control, and real-time backlight sync"
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
            order: 3,

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
            order: 4,

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
            order: 5,

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
            order: 6,

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
            id: "uidai-dashboard",
            title: "UIDAI Data & Enrolment Analytics Dashboard",
            description: "A privacy-first analytics dashboard for UIDAI-style enrolment, update, and authentication datasets. It transforms raw CSV uploads into interpretable metrics, regional concentration analysis, age-based update behavior, imbalance detection, anomaly alerts, and governance-ready insights.",
            category: "Software",
            tech: "Analytics, Dashboard, Client-Side Data Processing",
            imageUrl: "assets/projects/uidai-dashboard/photos/dashboard-overview.png",
            tag: "Data Hackathon 2026",
            status: "analytics",
            order: 7,

            problem:
                "Raw operational dashboards show numbers, but administrators still struggle to answer the harder questions: <strong>where service load is concentrating</strong>, <strong>which age groups are driving updates</strong>, <strong>whether update demand is overtaking enrolment capacity</strong>, and <strong>which regions show unusual spikes or readiness gaps</strong>. For a nationwide identity ecosystem like UIDAI, decision-makers need interpreted analytics and action-oriented insights, not just charts.",

            solution:
                "This project was designed as an <strong>integrated analytics platform</strong> for the <strong>UIDAI Data Hackathon 2026</strong>. It combines <strong>core UIDAI performance analytics</strong> with <strong>deep enrolment and update behavior analysis</strong> in one dashboard.<br/><br/>" +
                "<strong>End-to-end flow</strong>: data upload -> column auto-detection -> validation and normalization -> aggregation by region/district/age -> metric computation -> trend and imbalance detection -> insight generation.<br/><br/>" +
                "<strong>Key analytical modules</strong>:<br/>" +
                "<strong>• Regional distribution analysis</strong> to identify concentration, stagnation, and administrative load hotspots.<br/>" +
                "<strong>• Age-wise enrolment and update analytics</strong> to detect update-heavy cohorts and forecast future demand.<br/>" +
                "<strong>• Update vs enrolment imbalance detection</strong> to expose saturation, awareness gaps, and stress on update centers.<br/>" +
                "<strong>• Temporal trend and seasonality analysis</strong> to support workforce and infrastructure planning.<br/>" +
                "<strong>• Automated spike and consistency detection</strong> for abnormal surges, demographic dominance, and repeat-update density.<br/>" +
                "<strong>• Service readiness integration</strong> so enrolment behavior contributes directly to readiness scoring and governance decisions.<br/><br/>" +
                "<strong>Design principles from the report</strong>: client-side processing, schema-independent uploads, privacy-first handling, explainable rule-based/statistical analytics, and a UI built for non-technical administrators.<br/><br/>" +
                "The result is a dashboard that explains <strong>what is happening</strong>, <strong>why it matters</strong>, <strong>who is affected</strong>, and <strong>where intervention is required</strong>.",

            galleryImage1: "assets/projects/uidai-dashboard/photos/upload-screen.png",
            galleryCaption1: "Client-side upload flow for CSV/ZIP data with bilingual onboarding copy (upload-screen.png)",
            galleryImage2: "assets/projects/uidai-dashboard/photos/dashboard-overview.png",
            galleryCaption2: "Main enrolment analytics dashboard with KPI cards, regional dominance insights, and intervention prompts (dashboard-overview.png)",
            galleryImage3: "assets/projects/uidai-dashboard/photos/summary-cards.png",
            galleryCaption3: "High-level indicator layer showing total enrolments, MoM growth, update pressure, and active region concentration (summary-cards.png)",
            galleryImage4: "assets/projects/uidai-dashboard/photos/trends-and-distribution.png",
            galleryCaption4: "Trend and distribution layer combining enrolment growth, update trends, regional activity, and update-share visualization (trends-and-distribution.png)",
            galleryImage5: "assets/projects/uidai-dashboard/photos/anomaly-insights.png",
            galleryCaption5: "AI-style explainable alert layer for spike detection, imbalance detection, repeat-update density, and dominant cohort consistency (anomaly-insights.png)",

            result1Label: "Processing",
            result1Value: "Client",
            result1Note: "Privacy-first local analytics",
            result2Label: "Coverage",
            result2Value: "Region+Age",
            result2Note: "Distribution, cohorts, imbalance",
            result3Label: "Output",
            result3Value: "Insights",
            result3Note: "Metrics + anomalies + action cues",

            duration: "Data Hackathon 2026",
            teamSize: "Hackathon build",
            tools: "CSV analytics, schema auto-detection, trend analysis, explainable dashboards",

            links: [
                {
                    url: "assets/projects/uidai-dashboard/docs/uidai-data-enrolment-analytics-dashboard.docx",
                    label: "Project Report (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "From raw enrolment CSVs to policy-ready insights: concentration, imbalance, readiness, and anomalies"
        },

        {
            id: "giftify",
            title: "Giftify — Send Physical Gifts to Creators Without Sharing Addresses",
            description: "A privacy-first gifting platform where fans can send real physical gifts to creators without either side exposing addresses. Creator approval, pickup logistics, inspection, delivery tracking, and admin overrides are all part of the controlled workflow.",
            category: "Software",
            tech: "React, Firebase, Tailwind, Framer Motion",
            imageUrl: "assets/projects/giftify/photos/dashboard-overview.png",
            tag: "Product Prototype",
            status: "prototype",
            order: 8,

            problem:
                "Fans may want to send <strong>physical gifts</strong> to creators, but doing that safely is hard. Donation platforms and wishlists do not manage real-world pickup, inspection, and delivery workflows, and direct gifting can expose private addresses or create trust and safety issues. Giftify was designed to solve that with a <strong>controlled physical logistics flow</strong> that protects both sides.",

            solution:
                "Giftify is a <strong>secure, privacy-first gifting platform</strong> for content creators and their fans. Instead of exposing home addresses, the product handles gifting through a controlled multi-role workflow with creator approval and logistics checkpoints.<br/><br/>" +
                "<strong>End-to-end flow</strong>:<br/>" +
                "<strong>• Fan registration and dashboard</strong> to discover creators and submit gift requests.<br/>" +
                "<strong>• Creator approval</strong> so gifts are accepted only when the creator explicitly allows them.<br/>" +
                "<strong>• Fan pickup address submission</strong> after approval, without exposing addresses to the creator.<br/>" +
                "<strong>• Logistics workflow</strong> for pickup, inspection, dispatch, and delivery handling.<br/>" +
                "<strong>• Admin dashboard</strong> for verification, moderation, privacy controls, and safety overrides.<br/><br/>" +
                "<strong>Key product principles</strong>:<br/>" +
                "<strong>• No address sharing</strong> between fan and creator.<br/>" +
                "<strong>• Real-time gift status tracking</strong> across the full lifecycle.<br/>" +
                "<strong>• Creator-controlled approvals</strong> instead of open gifting.<br/>" +
                "<strong>• Safety layers</strong> through logistics inspection and admin intervention capability.<br/>" +
                "<strong>• Firebase-backed sync</strong> for auth, state, and role-aware real-time updates.<br/><br/>" +
                "This was built as a <strong>product-focused prototype</strong> to demonstrate that physical gifting can be made safer, more transparent, and creator-approved instead of behaving like a donation or wishlist app.",

            galleryImage1: "assets/projects/giftify/photos/dashboard-overview.png",
            galleryCaption1: "Overall product dashboard / workflow snapshot for the Giftify prototype (dashboard-overview.png)",
            galleryImage2: "assets/projects/giftify/photos/creator-discovery.png",
            galleryCaption2: "Creator discovery and browsing flow for fans (creator-discovery.png)",
            galleryImage3: "assets/projects/giftify/photos/gift-request.png",
            galleryCaption3: "Gift request submission flow before creator approval (gift-request.png)",
            galleryImage4: "assets/projects/giftify/photos/logistics-tracking.png",
            galleryCaption4: "Logistics and status tracking view for pickup, inspection, and delivery stages (logistics-tracking.png)",
            galleryImage5: "assets/projects/giftify/photos/admin-dashboard.png",
            galleryCaption5: "Admin dashboard for verification, moderation, and privacy controls (admin-dashboard.png)",
            galleryImage6: "assets/projects/giftify/photos/fan-dashboard.png",
            galleryCaption6: "Fan-side dashboard with gifting flow visibility and status updates (fan-dashboard.png)",

            result1Label: "Privacy",
            result1Value: "No Share",
            result1Note: "Addresses stay hidden",
            result2Label: "Control",
            result2Value: "Creator",
            result2Note: "Approval before pickup",
            result3Label: "Backend",
            result3Value: "Firebase",
            result3Note: "Auth + sync + roles",

            duration: "Product prototype (2026)",
            teamSize: "Solo",
            tools: "React (Vite), Firebase Auth/Firestore, Tailwind CSS, Framer Motion",

            youtubeUrl: "https://youtu.be/NSCJxjpE-gE",
            youtubeCaption: "Giftify demo (YouTube)",

            links: [
                {
                    url: "https://giftify-snowy.vercel.app",
                    label: "Live Demo",
                    icon: "open_in_new"
                },
                {
                    url: "https://github.com/Prince-Tagadiya/Giftify",
                    label: "GitHub Repo",
                    icon: "code"
                }
            ],

            heroCaption: "Physical gifting with privacy built in: approval, logistics, tracking, and no address exposure"
        },

        {
            id: "smart-dice",
            title: "SMART Dice — Simulated Multigame App Integrated Robo Eyes And Time Display Dice",
            description: "A sensor-rich interactive electronic dice built around NodeMCU (ESP8266): shake-to-roll, touch control, Blynk mobile integration, OLED dice/time display, adaptive brightness, RoboEyes idle mode, and haptic + sound feedback inside a custom acrylic enclosure.",
            category: "Hardware",
            tech: "ESP8266, Sensors, OLED, IoT",
            imageUrl: "assets/projects/smart-dice/photos/final-render.png",
            tag: "IEEE Project Paper",
            status: "prototype",
            order: 9,

            problem:
                "Most assistive technology for visually impaired users focuses on <strong>navigation</strong>, <strong>reading</strong>, or <strong>scene understanding</strong>, while interactive entertainment tools remain underexplored. Traditional dice are simple for sighted users, but they are not naturally accessible, do not provide multi-sensory feedback, and offer no digital features like remote control, time display, or adaptable visibility. SMART Dice was designed to bridge that gap with a compact embedded object that is both <strong>playful</strong> and <strong>assistive</strong>.",

            solution:
                "SMART Dice is an <strong>embedded, IoT-enabled electronic dice system</strong> built on <strong>NodeMCU (ESP8266)</strong> and documented in the IEEE paper file you shared. It combines physical interaction, mobile control, and adaptive display behavior in one enclosure.<br/><br/>" +
                "<strong>Core interaction modes</strong>:<br/>" +
                "<strong>• Shake to roll</strong> using the MPU6050 accelerometer/gyroscope.<br/>" +
                "<strong>• Touch to roll / switch mode</strong> using the TTP223 capacitive touch sensor.<br/>" +
                "<strong>• Remote app control</strong> through Blynk for dice mode, brightness, timer, logs, and Wi-Fi reset.<br/>" +
                "<strong>• Countdown timer roll</strong> as an automatic software-triggered mode.<br/><br/>" +
                "<strong>Feedback system</strong>:<br/>" +
                "<strong>• OLED display</strong> for dice faces, time, mode info, and idle animations.<br/>" +
                "<strong>• Vibration motor</strong> for haptic roll feedback.<br/>" +
                "<strong>• Piezo buzzer</strong> for short roll-confirmation sound cues.<br/>" +
                "<strong>• LDR-based auto brightness</strong> for readability in changing ambient light.<br/><br/>" +
                "<strong>Smart behavior</strong>:<br/>" +
                "<strong>• NTP time synchronization</strong> over Wi-Fi for live time display.<br/>" +
                "<strong>• RoboEyes screensaver</strong> during idle periods.<br/>" +
                "<strong>• Night mode</strong> with sleepy-eyes animation when the environment becomes dark.<br/>" +
                "<strong>• Portable battery-powered design</strong> using a 3.7V Li-ion battery and TP4056 charging module.<br/><br/>" +
                "<strong>Hardware stack from the paper</strong>: NodeMCU ESP8266, MPU6050, TTP223, SSD1306 OLED, GL5528 LDR, vibration motor, passive buzzer, 2N2222 transistor driver, 1N4001 protection diode, and TP4056 charging support.<br/><br/>" +
                "<strong>Physical build</strong>: custom acrylic enclosure with an outer 4mm shell, inner 2mm mounting structure, and a 9.8cm x 9.8cm cube-like form factor. The layout was designed so the front face clearly indicates orientation for display and interaction.<br/><br/>" +
                "<strong>Result from the paper</strong>: the system demonstrated low response times across motion detection, OLED rendering, touch input, and feedback execution, showing that the prototype is responsive enough for real-time use in both recreational and assistive contexts.",

            galleryImage1: "assets/projects/smart-dice/photos/feature-flowchart.png",
            galleryCaption1: "Feature execution flowchart extracted from the IEEE document (feature-flowchart.png)",
            galleryImage2: "assets/projects/smart-dice/photos/orthographic-layout.jpeg",
            galleryCaption2: "Orthographic enclosure concept showing top/front/side layout and printed faces (orthographic-layout.jpeg)",
            galleryImage3: "assets/projects/smart-dice/photos/internal-wiring.jpeg",
            galleryCaption3: "Internal electronics view: wiring, controller, battery, and mounted modules inside the enclosure (internal-wiring.jpeg)",
            galleryImage4: "assets/projects/smart-dice/photos/testing-prototype.jpeg",
            galleryCaption4: "Prototype under testing with OLED connection flow visible on the front face (testing-prototype.jpeg)",
            galleryImage5: "assets/projects/smart-dice/photos/final-render.png",
            galleryCaption5: "Final rendered product concept showing the finished enclosure styling (final-render.png)",

            result1Label: "Inputs",
            result1Value: "4 Ways",
            result1Note: "Shake, touch, timer, app",
            result2Label: "Feedback",
            result2Value: "Multi",
            result2Note: "OLED + haptic + sound",
            result3Label: "Focus",
            result3Value: "Assistive",
            result3Note: "Playful and accessible",

            duration: "IEEE paper prototype (2025)",
            teamSize: "Student team + faculty mentor",
            tools: "Arduino IDE, ESP8266, Blynk, MPU6050, OLED, TTP223, LDR, TP4056",

            links: [
                {
                    url: "assets/projects/smart-dice/docs/IEEE_31_05_25.docx",
                    label: "Source Paper (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "An assistive, multisensory smart dice: shake, tap, or control it from the app"
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
            order: 10,
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
        },

        {
            id: "smart-classroom-concept",
            title: "AI-Based Smart Classroom Monitoring & Optimization System",
            description: "A future-build system design for campus-wide classroom monitoring using ESP32 sensor nodes, TinyML sound classification, occupancy sensing, automated voice warnings, comfort scoring, and heatmap-based analytics.",
            category: "Hardware",
            tech: "ESP32, TinyML, IoT, Analytics",
            imageUrl: "assets/projects/smart-classroom/photos/classroom-concept.png",
            tag: "System Design Concept",
            status: "concept",
            order: 11,

            problem:
                "Classroom discipline, environmental comfort, and energy efficiency are usually managed <strong>manually</strong> and <strong>reactively</strong>. Administrators do not get a campus-wide view of which rooms are noisy, underutilized, uncomfortable, or wasting power. This concept was created to explore how a sensor network plus simple AI could make classrooms more measurable, manageable, and efficient.",

            solution:
                "This is a <strong>future system-design concept</strong>, not a completed build. The idea is to deploy <strong>ESP32-based classroom nodes</strong> that measure temperature, humidity, noise, and occupancy, then send the data through <strong>ESP-MESH</strong> to a centralized dashboard.<br/><br/>" +
                "<strong>Planned intelligence layer</strong>:<br/>" +
                "<strong>• TinyML sound classification</strong> to distinguish lecture voice, crowd chatter, shouting, claps, and silence.<br/>" +
                "<strong>• Voice warning logic</strong> that triggers only when disruptive noise persists and occupancy is confirmed.<br/>" +
                "<strong>• mmWave presence sensing</strong> to avoid false occupancy detection from fan movement or passive surroundings.<br/>" +
                "<strong>• Comfort score index</strong> combining temperature, humidity, noise, and occupancy into a 0-100 KPI.<br/>" +
                "<strong>• Energy optimization mode</strong> to flag rooms that appear unused while appliances may still be running.<br/>" +
                "<strong>• Teacher mode / exam mode</strong> to adapt alert strictness to the context of the class.<br/>" +
                "<strong>• Historical graphs and room ranking</strong> for long-term discipline and efficiency analysis.<br/>" +
                "<strong>• Predictive alerts</strong> to detect recurring noisy periods and repeated inefficiencies.<br/><br/>" +
                "<strong>Planned output</strong>: a campus heatmap dashboard with color-coded room status and data-backed intervention suggestions for administrators.",

            galleryImage1: "assets/projects/smart-classroom/photos/classroom-concept.png",
            galleryCaption1: "Concept illustration of a classroom node and dashboard-driven room monitoring workflow (classroom-concept.png)",

            result1Label: "Stage",
            result1Value: "Concept",
            result1Note: "Future build planning",
            result2Label: "Scope",
            result2Value: "Campus",
            result2Note: "Mesh-connected room nodes",
            result3Label: "Goal",
            result3Value: "Optimize",
            result3Note: "Discipline, comfort, energy",

            duration: "System design concept",
            teamSize: "Idea / planning stage",
            tools: "ESP32, TinyML, mmWave, ESP-MESH, dashboard analytics",

            links: [
                {
                    url: "assets/projects/smart-classroom/docs/ai-based-smart-classroom-monitoring-system.docx",
                    label: "Concept Notes (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "Future classroom intelligence: sensor nodes, context-aware alerts, and campus-wide visibility"
        },

        {
            id: "agri-titan-x8-concept",
            title: "AGRI-TITAN X8 — Smart Modular Precision Agriculture Drone",
            description: "A future heavy-lift octacopter concept for precision agriculture with modular spraying, fertilizer broadcasting, crop-stress sensing, wildlife detection, waypoint control, and safety/power management.",
            category: "Hardware",
            tech: "Octacopter, Pixhawk, NDVI, Precision Agri",
            imageUrl: "assets/projects/agri-titan-x8/photos/spaim-ndvi-spray-concept.png",
            tag: "System Design Concept",
            status: "concept",
            order: 12,

            problem:
                "Large farms need different types of aerial support: <strong>crop stress detection</strong>, <strong>precision spraying</strong>, <strong>seed/fertilizer spreading</strong>, and <strong>wildlife protection</strong>. Most solutions are single-purpose or expensive to adapt. This concept was created as a <strong>modular agriculture platform</strong> that could perform multiple field operations using one heavy-lift drone architecture.",

            solution:
                "AGRI-TITAN X8 is a <strong>future system design</strong> for a heavy-lift <strong>X8 octacopter</strong> built around a carbon-fiber frame, Pixhawk flight controller, GPS waypoint navigation, telemetry, and swappable mission modules. It is described in your two concept documents as a <strong>logic-driven</strong> platform rather than a black-box AI system.<br/><br/>" +
                "<strong>Planned modules</strong>:<br/>" +
                "<strong>• SPAIM</strong> (Smart Precision Agri Intelligence Module): NDVI sensing + crop-stress mapping + variable-rate spraying + waypoint grid flight.<br/>" +
                "<strong>• GFSM</strong> (Granular Fertilizer & Seed Module): 8-10 kg hopper with PWM-controlled rotary broadcasting based on speed.<br/>" +
                "<strong>• LMSM</strong> (Liquid Micro-Spraying Module): 5-8 L tank, pump, and nozzle system for targeted spraying with NDVI-linked flow adjustment.<br/>" +
                "<strong>• SIWDM</strong> (Smart Intrusion & Wildlife Detection Module): PIR/thermal sensing, siren or ultrasonic repeller, and GSM SMS alert logic for crop protection.<br/>" +
                "<strong>• SSPM</strong> (Smart Safety & Power Management): low-battery return-to-home, motor-failure awareness, emergency override, geofencing, and battery management.<br/><br/>" +
                "<strong>Flight/control concept</strong>: Mission Planner + Pixhawk + GPS for pre-programmed grid missions, adjustable altitude, speed-based spray logic, telemetry, and logging.<br/><br/>" +
                "<strong>Target positioning</strong>: a modular precision-agriculture UAV that can reduce manual labor, improve input accuracy, and support monitoring plus intervention using one reusable aerial platform.<br/><br/>" +
                "<strong>Status note</strong>: this is a planning/design project for future implementation, not a built drone.",

            galleryImage1: "assets/projects/agri-titan-x8/photos/spaim-ndvi-spray-concept.png",
            galleryCaption1: "Concept art for NDVI sensing, crop-stress heatmapping, and adaptive spray control (spaim-ndvi-spray-concept.png)",
            galleryImage2: "assets/projects/agri-titan-x8/photos/wildlife-detection-concept.png",
            galleryCaption2: "Concept scene for thermal wildlife/intrusion detection during night monitoring (wildlife-detection-concept.png)",
            galleryImage3: "assets/projects/agri-titan-x8/photos/ndvi-camera-reference.png",
            galleryCaption3: "Reference visual for multispectral / NDVI imaging hardware used in crop-health workflows (ndvi-camera-reference.png)",
            galleryImage4: "assets/projects/agri-titan-x8/photos/waypoint-grid-reference.png",
            galleryCaption4: "Reference waypoint-grid planning view for field coverage missions (waypoint-grid-reference.png)",
            galleryImage5: "assets/projects/agri-titan-x8/photos/battery-dock-reference.png",
            galleryCaption5: "Reference image for drone power-management / docking style thinking used during concept planning (battery-dock-reference.png)",
            galleryImage6: "assets/projects/agri-titan-x8/photos/spreader-reference.png",
            galleryCaption6: "Reference image for granular fertilizer or seed broadcasting payload behavior (spreader-reference.png)",
            galleryImage7: "assets/projects/agri-titan-x8/photos/aerial-platform-reference.png",
            galleryCaption7: "Reference image representing the aerial-agriculture platform direction for the concept (aerial-platform-reference.png)",

            result1Label: "Stage",
            result1Value: "Concept",
            result1Note: "Future drone platform",
            result2Label: "Modules",
            result2Value: "5",
            result2Note: "Spray, seed, detect, protect, manage",
            result3Label: "Budget",
            result3Value: "<2L",
            result3Note: "Target concept estimate",

            duration: "System design concept",
            teamSize: "Idea / planning stage",
            tools: "Pixhawk, Mission Planner, GPS, NDVI sensing, spray logic, telemetry",

            links: [
                {
                    url: "assets/projects/agri-titan-x8/docs/agri-titan-x8-v1.docx",
                    label: "Concept Notes V1 (DOCX)",
                    icon: "description"
                },
                {
                    url: "assets/projects/agri-titan-x8/docs/agri-titan-x8.docx",
                    label: "Concept Notes V2 (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "Future precision-agriculture platform: one octacopter, multiple modular farm operations"
        },

        {
            id: "smart-universal-remote-concept",
            title: "Smart Universal Remote System",
            description: "A future smart-home remote concept that combines IR learning, ESP-NOW wireless communication, docking, remote-finding, charging, and multi-room appliance control into one handheld system.",
            category: "Hardware",
            tech: "ESP32, IR, ESP-NOW, Smart Home",
            imageUrl: "assets/projects/smart-universal-remote/photos/remote-concept.png",
            tag: "System Design Concept",
            status: "concept",
            order: 13,

            problem:
                "Homes often end up with <strong>too many remotes</strong> across TVs, ACs, fans, projectors, set-top boxes, and streaming devices. The result is clutter, misplacement, inconsistent user experience, and duplicated batteries/charging. This concept was created to explore a single remote system that can manage multiple rooms and both <strong>smart</strong> and <strong>traditional IR appliances</strong>.",

            solution:
                "This is a <strong>future system-design concept</strong>, not a finished build. The idea combines a handheld <strong>ESP32-based universal remote</strong> with a <strong>docking station</strong> that handles charging, remote-finding, and status feedback.<br/><br/>" +
                "<strong>Planned remote features</strong>:<br/>" +
                "<strong>• IR blaster + IR learning mode</strong> to capture and replay commands from TVs, ACs, fans, and projectors.<br/>" +
                "<strong>• OLED UI + physical buttons</strong> for device selection and status visibility.<br/>" +
                "<strong>• ESP-NOW communication</strong> for low-latency, low-power pairing with the dock and room accessories.<br/>" +
                "<strong>• Rechargeable battery</strong> with a docked charging workflow.<br/>" +
                "<strong>• Motion wake + auto-rotate</strong> using a gyroscope-based interaction layer.<br/>" +
                "<strong>• Sleep mode</strong> for battery saving during idle periods.<br/><br/>" +
                "<strong>Planned dock features</strong>:<br/>" +
                "<strong>• Charging status display</strong> on OLED.<br/>" +
                "<strong>• Find-remote mode</strong> using ESP-NOW + RSSI to estimate distance and help locate the remote.<br/>" +
                "<strong>• Buzzer / beep response</strong> when the remote is nearby.<br/>" +
                "<strong>• Fixed wall or bedside placement</strong> so the remote always has a home position.<br/><br/>" +
                "<strong>Why the concept matters</strong>: one interface, fewer remotes, easier control across rooms, and a better user experience around charging and finding a misplaced remote.",

            galleryImage1: "assets/projects/smart-universal-remote/photos/remote-concept.png",
            galleryCaption1: "Concept render showing a simplified multi-device remote interface for AC, fan, TV, and projector control (remote-concept.png)",

            result1Label: "Stage",
            result1Value: "Concept",
            result1Note: "Future smart-home build",
            result2Label: "Rooms",
            result2Value: "Multi",
            result2Note: "One remote across spaces",
            result3Label: "Core",
            result3Value: "Learn+Find",
            result3Note: "IR learning and remote tracking",

            duration: "System design concept",
            teamSize: "Idea / planning stage",
            tools: "ESP32, ESP-NOW, IR blaster, IR receiver, OLED, gyroscope, charging dock",

            links: [
                {
                    url: "assets/projects/smart-universal-remote/docs/smart-universal-remote-system.docx",
                    label: "Concept Notes (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "One remote for the whole home: learn commands, stay charged, and find it when it disappears"
        },

        {
            id: "ir-pointing-module-concept",
            title: "Automatic IR Pointing Device (Add-On Module)",
            description: "A future add-on concept for the smart remote ecosystem: a fixed-position motorized IR transmitter that automatically rotates toward a selected appliance and sends commands without needing to point the remote manually.",
            category: "Hardware",
            tech: "IR, ESP-NOW, Servo Control, Smart Home",
            imageUrl: "assets/projects/ir-pointing-module/photos/remote-plus-pointer-concept.png",
            tag: "System Design Concept",
            status: "concept",
            order: 14,

            problem:
                "Traditional IR control still depends on <strong>line-of-sight pointing</strong>. Even with a universal remote, users may still need to face the right appliance, sit in a particular direction, or deal with blocked IR paths. This concept explores a room-mounted helper module that solves the line-of-sight problem automatically.",

            solution:
                "This is a <strong>future add-on module concept</strong> designed to work with the smart remote system. The main idea is a <strong>fixed-position IR pointing unit</strong> mounted on a wall or ceiling that receives wireless commands from the remote via <strong>ESP-NOW</strong>, then rotates and aims its IR blaster at the selected appliance.<br/><br/>" +
                "<strong>Planned behavior</strong>:<br/>" +
                "<strong>• Device selection on the remote</strong> sends a wireless command to the pointing unit.<br/>" +
                "<strong>• Motorized aiming</strong> using a servo or stepper rotates the module to a saved preset angle.<br/>" +
                "<strong>• IR transmit</strong> then sends the correct command directly toward the appliance.<br/><br/>" +
                "<strong>Planned features</strong>:<br/>" +
                "<strong>• Preset positions</strong> for TV, AC, fan, and other devices.<br/>" +
                "<strong>• Wide room coverage</strong> from a single mounted location.<br/>" +
                "<strong>• Group control mode</strong> to trigger multiple devices at once, such as turning off everything in a room.<br/>" +
                "<strong>• No need to point the handheld remote</strong>, which improves comfort and accessibility anywhere in the room.<br/>" +
                "<strong>• Wall / ceiling mounting</strong> for optimal sightlines across appliances.<br/><br/>" +
                "<strong>Concept role</strong>: this is positioned as an ecosystem extension rather than a standalone product, making the universal remote more reliable in multi-device spaces.",

            galleryImage1: "assets/projects/ir-pointing-module/photos/remote-plus-pointer-concept.png",
            galleryCaption1: "Concept scene showing the handheld remote communicating with a wall-mounted automatic IR pointer near an AC unit (remote-plus-pointer-concept.png)",
            galleryImage2: "assets/projects/ir-pointing-module/photos/ir-pointing-unit-render.png",
            galleryCaption2: "Concept render of the wall-mounted IR pointing module housing and sensor/transmitter head (ir-pointing-unit-render.png)",
            galleryImage3: "assets/projects/ir-pointing-module/photos/ir-pointing-angles.png",
            galleryCaption3: "Concept render series showing different rotation/aiming angles for multi-appliance coverage (ir-pointing-angles.png)",

            result1Label: "Stage",
            result1Value: "Concept",
            result1Note: "Ecosystem add-on idea",
            result2Label: "Aim",
            result2Value: "Auto",
            result2Note: "Motorized IR direction",
            result3Label: "Benefit",
            result3Value: "Hands-Free",
            result3Note: "No manual pointing needed",

            duration: "System design concept",
            teamSize: "Idea / planning stage",
            tools: "ESP-NOW, IR blaster, servo/stepper control, preset memory, wall mount design",

            links: [
                {
                    url: "assets/projects/ir-pointing-module/docs/automatic-ir-pointing-device.docx",
                    label: "Concept Notes (DOCX)",
                    icon: "description"
                }
            ],

            heroCaption: "A room-mounted IR pointer that aims for you, so the remote doesn’t have to"
        }
    ];
})();
