document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((link) => {
        const href = link.getAttribute("href");
        if (href && href.split("#")[0] === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });

    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, instance) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    instance.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("active"));
    }

    document.querySelectorAll("nav").forEach((header) => {
        const button = header.querySelector(".menu-toggle");
        const navigation = header.querySelector(".nav-links");
        if (!button || !navigation) return;

        const mobileQuery = window.matchMedia("(max-width: 767px)");
        const setOpen = (open) => {
            navigation.classList.toggle("is-open", open);
            button.setAttribute("aria-expanded", String(open));
            button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        };

        button.addEventListener("click", () => {
            setOpen(button.getAttribute("aria-expanded") !== "true");
        });
        navigation.addEventListener("click", (event) => {
            if (event.target.closest("a")) setOpen(false);
        });
        header.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
                setOpen(false);
                button.focus();
            }
        });

        const resetOnDesktop = (event) => { if (!event.matches) setOpen(false); };
        if (mobileQuery.addEventListener) mobileQuery.addEventListener("change", resetOnDesktop);
        else mobileQuery.addListener(resetOnDesktop);
        setOpen(false);
    });
});
