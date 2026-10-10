/* =========================
   MOBILE NAVIGATION MENU
========================= */

const navbar = document.querySelector(".navbar");

const menuButton = document.createElement("button");
menuButton.className = "menu-toggle";
menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
menuButton.setAttribute("aria-label", "Toggle navigation");
menuButton.setAttribute("aria-expanded", "false");

const navLinks = document.querySelector(".nav-links");

if (navbar && navLinks) {
    navbar.insertBefore(menuButton, navLinks);

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");

        const isOpen = navLinks.classList.contains("show");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll(
    "#home, #about, #skills, #projects, #contact"
);

const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

/* =========================
   PROJECT CARD ANIMATION
========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
        card.style.transform = "translateY(-5px)";
    });

    card.addEventListener("mouseleave", function () {
        card.style.transform = "";
    });
});

/* =========================
   CONTACT EMAIL
========================= */

const contactButtons = document.querySelectorAll(
    'a[href="mailto:harsh@example.com"]'
);

contactButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("Opening email application...");
    });
});

/* =========================
   FOOTER YEAR
========================= */

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        "© " + new Date().getFullYear() +
        " Harsh Vardhan Shukla. All rights reserved.";
}