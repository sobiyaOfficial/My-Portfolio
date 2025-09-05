// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll Animation
const sections = document.querySelectorAll("section, .contact");

const revealOnScroll = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Trigger once on load

// Back to Top Button
const backToTop = document.createElement("button");
backToTop.innerText = "⬆";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
