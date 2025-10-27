// ===== Muat Section Secara Dinamis =====
function loadSection(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      revealOnScroll(); // aktifkan animasi setelah konten dimuat
    })
    .catch(err => console.error("Gagal memuat:", err));
}

loadSection("skills-section", "skills.html");
loadSection("projects-section", "projects.html");
loadSection("contact-section", "contact.html");

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ===== Scroll Animation =====
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

// Jalankan saat pertama kali halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
});
