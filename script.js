document.addEventListener("DOMContentLoaded", () => {
    // 1. Highlight Active Nav Link
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "index.html")) {
            link.classList.add("active");
        }
    });

    // 2. Scroll Reveal Animations
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => revealOnScroll.observe(el));
});





/* ===== MOBILE NAVIGATION ===== */
(function () {
  function initMobileNavigation() {
    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".nav-links");

    // Exit safely if this page doesn't contain the mobile menu.
    if (!menuButton || !navigation) return;

    const mobileQuery = window.matchMedia("(max-width: 767px)");

    function setMenuOpen(open) {
      navigation.classList.toggle("is-open", open);
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute(
        "aria-label",
        open ? "Close navigation menu" : "Open navigation menu"
      );
    }

    menuButton.addEventListener("click", function () {
      const isOpen =
        menuButton.getAttribute("aria-expanded") === "true";

      setMenuOpen(!isOpen);
    });

    // Close the menu after selecting a navigation link.
    navigation.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenuOpen(false);
      }
    });

    // Allow keyboard users to close the menu with Escape.
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        menuButton.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
        menuButton.focus();
      }
    });

    // Reset menu state when returning to the desktop layout.
    function handleBreakpointChange(event) {
      if (!event.matches) {
        setMenuOpen(false);
      }
    }

    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", handleBreakpointChange);
    } else {
      // Compatibility with older browsers.
      mobileQuery.addListener(handleBreakpointChange);
    }

    setMenuOpen(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initMobileNavigation,
      { once: true }
    );
  } else {
    initMobileNavigation();
  }
})();
