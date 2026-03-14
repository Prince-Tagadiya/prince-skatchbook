(function () {
    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function accentClasses(accent) {
        const map = {
            yellow: {
                pin: "bg-yellow-400 border-yellow-600",
                badge: "bg-yellow-100 text-yellow-900 border-yellow-300"
            },
            blue: {
                pin: "bg-blue-500 border-blue-700",
                badge: "bg-blue-100 text-blue-900 border-blue-300"
            },
            green: {
                pin: "bg-green-500 border-green-700",
                badge: "bg-green-100 text-green-900 border-green-300"
            },
            red: {
                pin: "bg-red-500 border-red-700",
                badge: "bg-red-100 text-red-900 border-red-300"
            },
            indigo: {
                pin: "bg-indigo-500 border-indigo-700",
                badge: "bg-indigo-100 text-indigo-900 border-indigo-300"
            },
            orange: {
                pin: "bg-orange-500 border-orange-700",
                badge: "bg-orange-100 text-orange-900 border-orange-300"
            },
            pink: {
                pin: "bg-pink-500 border-pink-700",
                badge: "bg-pink-100 text-pink-900 border-pink-300"
            },
            slate: {
                pin: "bg-slate-500 border-slate-700",
                badge: "bg-slate-100 text-slate-900 border-slate-300"
            }
        };
        return map[accent] || map.yellow;
    }

    function imageMarkup(certificate, extraClass) {
        if (!certificate.imageUrl) {
            return `
                <div class="w-full h-full cert-placeholder border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center p-6 ${extraClass || ""}">
                    <span class="material-symbols-outlined text-5xl text-gray-300 dark:text-gray-600 mb-3">workspace_premium</span>
                    <p class="font-hand text-2xl text-gray-500 dark:text-gray-400">Add certificate image</p>
                    <p class="text-sm text-gray-400 mt-3">${escapeHtml(certificate.imageLabel || "No preview linked yet")}</p>
                </div>
            `;
        }

        return `<img src="${escapeHtml(certificate.imageUrl)}" alt="${escapeHtml(certificate.title)}" class="w-full h-full object-contain ${extraClass || ""}" />`;
    }

    function certificateCard(certificate, index) {
        const accent = accentClasses(certificate.accent);
        const rotations = ["rotate-1", "-rotate-2", "rotate-2", "-rotate-1"];
        const rotation = rotations[index % rotations.length];

        return `
            <a href="#cert-modal" data-cert-id="${escapeHtml(certificate.id)}" class="certificate-trigger relative bg-[#fffdf5] dark:bg-[#2a2a2a] p-4 shadow-md border border-gray-200 dark:border-gray-700 ${rotation} hover:rotate-0 transition-transform duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group hover:z-20 no-underline text-[#181111] dark:text-white">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-sm border z-10 ${accent.pin}"></div>
                <div>
                    <div class="flex justify-between items-start gap-3 mb-2">
                        <span class="material-symbols-outlined text-3xl text-primary">workspace_premium</span>
                        <span class="text-xs font-bold font-mono text-gray-400">${escapeHtml(certificate.year || certificate.issued || "")}</span>
                    </div>
                    <h4 class="font-bold text-lg leading-tight mb-1 font-display group-hover:text-primary transition-colors">${escapeHtml(certificate.title)}</h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${escapeHtml(certificate.issuer)}</p>
                    <p class="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">${escapeHtml(certificate.note || "Credential ID, original link, and preview open in the popup.")}</p>
                </div>
                <div class="mt-4 pt-2 border-t border-gray-200 dark:border-gray-600 flex items-center justify-between gap-3">
                    <span class="text-xs font-mono px-2 py-1 rounded border ${accent.badge}">
                        ${escapeHtml(certificate.credentialId ? `ID: ${certificate.credentialId}` : certificate.issued || "Open")}
                    </span>
                    <span class="font-hand text-sm text-primary">Open</span>
                </div>
            </a>
        `;
    }

    function renderCertificatesSection() {
        const container = document.getElementById("certificates-grid");
        if (!container || typeof window.getCertificates !== "function") return;
        container.innerHTML = window.getCertificates().map(certificateCard).join("");
    }

    function renderCertificatesPage() {
        const container = document.getElementById("all-certificates-grid");
        if (!container || typeof window.getCertificates !== "function") return;
        container.innerHTML = window.getCertificates().map(certificateCard).join("");
    }

    function closeCertificateModal() {
        const modal = document.getElementById("cert-modal");
        if (!modal) return;
        modal.classList.remove("open");
        window.location.hash = "";
    }

    function openCertificateModal(certificateId) {
        const modal = document.getElementById("cert-modal");
        const body = document.getElementById("cert-modal-body");
        if (!modal || !body || typeof window.getCertificateById !== "function") return;

        const certificate = window.getCertificateById(certificateId);
        if (!certificate) return;

        const accent = accentClasses(certificate.accent);
        const skills = certificate.skills.map((skill) => `<span class="px-3 py-1 bg-gray-100 rounded-full text-sm">${escapeHtml(skill)}</span>`).join("");

        body.innerHTML = `
            <div class="flex flex-col gap-6 items-center text-center">
                <h2 class="font-hand text-3xl md:text-5xl font-bold leading-tight">${escapeHtml(certificate.title)}</h2>
                <p class="font-hand text-xl text-gray-600">${escapeHtml(certificate.issuer)}</p>

                <div class="w-full aspect-[4/3] border-4 border-double border-gray-300 p-4 bg-white relative overflow-hidden shadow-inner">
                    ${imageMarkup(certificate)}
                </div>

                ${certificate.credentialId ? `
                    <div class="relative mt-1 rotate-[-1deg]">
                        <div class="absolute inset-0 bg-yellow-100 transform skew-x-[-10deg] border border-black/10"></div>
                        <div class="relative px-6 py-2 font-mono text-sm tracking-wider text-gray-700 flex flex-col">
                            <span class="text-[10px] uppercase text-gray-400 mb-0.5">Credential ID</span>
                            <span class="font-bold">${escapeHtml(certificate.credentialId)}</span>
                        </div>
                    </div>
                ` : ""}

                ${certificate.note ? `<p class="font-hand text-xl text-gray-700 max-w-2xl">${escapeHtml(certificate.note)}</p>` : ""}
                ${skills ? `<div class="flex flex-wrap justify-center gap-3">${skills}</div>` : ""}
                ${certificate.imageLabel ? `<p class="text-sm text-gray-400 font-mono">Original file: ${escapeHtml(certificate.imageLabel)}</p>` : ""}

                ${certificate.credentialUrl ? `
                    <div class="flex flex-wrap justify-center gap-4 mt-2">
                        <a class="group relative inline-block mt-1 no-underline text-[#181111]" href="${escapeHtml(certificate.credentialUrl)}" target="_blank" rel="noreferrer">
                            <span class="absolute inset-0 bg-yellow-100 transform skew-y-[-2deg] rounded-sm opacity-70 group-hover:opacity-100 transition-opacity"></span>
                            <span class="relative px-8 py-3 font-hand font-bold text-xl flex items-center gap-2">
                                View Original Link
                                <span class="material-symbols-outlined text-base">open_in_new</span>
                            </span>
                        </a>
                    </div>
                ` : ""}
            </div>
        `;

        const pin = modal.querySelector(".pin");
        if (pin) {
            pin.className = `pin ${accent.pin}`;
        }

        modal.classList.add("open");
        window.location.hash = "cert-modal";
    }

    function wireCertificateTriggers() {
        document.querySelectorAll(".certificate-trigger").forEach((trigger) => {
            trigger.addEventListener("click", function (event) {
                event.preventDefault();
                openCertificateModal(this.getAttribute("data-cert-id"));
            });
        });

        const closeButtons = document.querySelectorAll("[data-close-cert-modal]");
        closeButtons.forEach((button) => {
            button.addEventListener("click", function (event) {
                event.preventDefault();
                closeCertificateModal();
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        renderCertificatesSection();
        renderCertificatesPage();
        wireCertificateTriggers();
    });
})();
