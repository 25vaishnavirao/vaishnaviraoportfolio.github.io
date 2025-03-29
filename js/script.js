// Toggle menu for mobile view
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");


// Open/close mobile navigation menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Add smooth scrolling to links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

// Smooth scrolling for anchor links
scrollLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset to avoid hidden section under header
      behavior: "smooth"
    });
  });
});

// Close menu when a link is clicked on mobile
navbar.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  }
});

// Scroll effect for sticky navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
