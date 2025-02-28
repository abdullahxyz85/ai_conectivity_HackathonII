// Header scroll effect
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScroll = window.pageYOffset;

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    // Hide header on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 80) {
      header.classList.add("scroll-down");
    } else {
      header.classList.remove("scroll-down");
    }
  } else {
    header.classList.remove("scrolled");
    header.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});

// Mobile menu functionality
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    navLinks.classList.remove("active");
  });
});
