(function () {
    function getMode() {
        try {
            return localStorage.getItem("portfolio-view-mode") === "simple" ? "simple" : "fun";
        } catch (error) {
            return "fun";
        }
    }

    function applyMode(mode) {
        const html = document.documentElement;
        const isSimple = mode === "simple";
        html.classList.toggle("simple-mode", isSimple);
        html.dataset.viewMode = mode;

        try {
            localStorage.setItem("portfolio-view-mode", mode);
            if (isSimple) {
                sessionStorage.setItem("hasSeenSplash", "true");
            }
        } catch (error) {
            // Ignore storage issues.
        }
    }

    function updateToggleUi() {
        const isSimple = document.documentElement.classList.contains("simple-mode");
        const labelEls = document.querySelectorAll("[data-view-mode-label]");
        const iconEls = document.querySelectorAll("[data-view-mode-icon]");

        labelEls.forEach((el) => {
            el.textContent = isSimple ? "Simple" : "Fun";
        });

        iconEls.forEach((el) => {
            el.textContent = isSimple ? "dashboard" : "brush";
        });
    }

    function initToggles() {
        document.querySelectorAll("[data-view-mode-toggle]").forEach((btn) => {
            btn.addEventListener("click", () => {
                document.documentElement.classList.add("mode-switching");
                const nextMode = document.documentElement.classList.contains("simple-mode") ? "fun" : "simple";
                applyMode(nextMode);
                updateToggleUi();
                window.setTimeout(() => {
                    document.documentElement.classList.remove("mode-switching");
                }, 450);
            });
        });

        updateToggleUi();
    }

    window.applyPortfolioViewMode = applyMode;

    document.addEventListener("DOMContentLoaded", () => {
        applyMode(getMode());
        initToggles();
    });
})();
