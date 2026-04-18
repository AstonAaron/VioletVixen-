const splash = document.getElementById("splash-screen");
const mainContent = document.getElementById("main-content");
const enterBtn = document.getElementById("enter-btn");
const exitBtn = document.getElementById("exit-btn");

// Enter site
enterBtn.addEventListener("click", () => {
  splash.style.display = "none";
  mainContent.style.display = "block";
});

// Leave site
exitBtn.addEventListener("click", () => {
  window.location.href = "https://www.google.com"; // redirect anywhere
});

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const toggle = document.getElementById("menuToggle");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    toggle.textContent = "✕";
  } else {
    toggle.textContent = "☰";
  }
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-floating");
  } else {
    navbar.classList.remove("navbar-floating");
  }
});

// Scroll-Responsive CTA Track
let lastScrollY = window.scrollY;
let trackOffset = 0;

window.addEventListener("scroll", function () {
  const track = document.getElementById("ctaTrack");
  if (!track) return;

  const currentScrollY = window.scrollY;
  const maxShift = track.scrollWidth / 2;

  if (currentScrollY > lastScrollY) {
    trackOffset -= 18;
  } else if (currentScrollY < lastScrollY) {
    trackOffset += 18;
  }

  if (trackOffset < -maxShift) {
    trackOffset = 0;
  }

  if (trackOffset > 0) {
    trackOffset = -maxShift;
  }

  track.style.transform = `translateX(${trackOffset}px)`;

  lastScrollY = currentScrollY;
});

// carousel animation and flip effect
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev");

  let current = 0;

  function updateSlides(newIndex, direction) {
    slides.forEach((slide) => {
      slide.classList.remove("active", "next", "flip-out");
    });

    if (direction === "next") {
      slides[current].classList.add("flip-out");
    }

    if (direction === "prev") {
      slides[newIndex].classList.add("flip-out");
    }

    current = newIndex;

    slides[current].classList.add("active");

    let nextIndex = (current + 1) % slides.length;
    slides[nextIndex].classList.add("next");
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      let newIndex = (current + 1) % slides.length;
      updateSlides(newIndex, "next");
    });

    prevBtn.addEventListener("click", () => {
      let newIndex = (current - 1 + slides.length) % slides.length;
      updateSlides(newIndex, "prev");
    });
  }
});

//modal
const socialModal = document.getElementById("socialModal");
const openSocialModal = document.getElementById("openSocialModal");
const closeSocialModal = document.getElementById("closeSocialModal");

// Open modal
if (openSocialModal) {
  openSocialModal.addEventListener("click", () => {
    socialModal.style.display = "block";
  });
}

// Close modal (X button)
if (closeSocialModal) {
  closeSocialModal.addEventListener("click", () => {
    socialModal.style.display = "none";
  });
}

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === socialModal) {
    socialModal.style.display = "none";
  }
});

// Helpers / Function

const yearEl = document.getElementById("year");
const mobileMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuToggle");
const heading = document.querySelector("h1"); // optional

// Updates current year in the footer
const setCurrentYear = () => {
  if (!yearEl) return;
  yearEl.textContent = new Date().getFullYear();
};

// --- Event Listeners ---

// 1) set year on page load
setCurrentYear();

// 3) close mobile menu when a link is clicked
if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    // if the clicked an <a> inside the menu, close the menu
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}
function closeMobileMenu() {
  const menu = document.getElementById("navMenu");
  const toggle = document.getElementById("menuToggle");

  menu.classList.remove("active");
  toggle.textContent = "☰";
}
