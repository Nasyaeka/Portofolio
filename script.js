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
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Tutup menu setelah diklik (untuk HP)
    const menu = document.getElementById("menu");
    const toggle = document.getElementById("menu-toggle");
    if (menu && toggle) {
      menu.classList.remove("show");
      toggle.classList.remove("active");
    }
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

// === TOGGLE MENU ===
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const themeIcon = document.getElementById("theme-icon");

// Toggle navbar menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("show");
});

// === DARK/LIGHT MODE ===
const body = document.body;

// Cek tema dari localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Toggle mode
themeIcon.addEventListener("click", (e) => {
  e.stopPropagation(); // Biar nggak bentrok sama menu toggle
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }

  // Efek animasi halus
  body.style.transition = "background 0.4s ease, color 0.4s ease";
});
