// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .contact-item"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveLink);

window.addEventListener("load", updateActiveLink);


// ===============================
// PROJECT CARD EFFECT
// ===============================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px)";

    });


    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


// ===============================
// CONTACT ITEM EFFECT
// ===============================

const contactItems =
    document.querySelectorAll(".contact-item");

contactItems.forEach(function (item) {

    item.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-6px)";

    });


    item.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


// ===============================
// PAGE LOAD MESSAGE
// ===============================

window.addEventListener("load", function () {

    console.log("Welcome to Shahriar Kobir Sabbir's Portfolio!");

});
