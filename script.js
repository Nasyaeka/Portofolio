// ================================
// ===== Muat Section Secara Dinamis =====
// ================================
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
loadSection("education-section", "education.html");
loadSection("contact-section", "contact.html");


// ================================
// ===== Smooth Scrolling =====
// ================================
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

// ================================
// ===== Scroll Animation =====
// ================================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Jalankan saat pertama kali halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  revealOnScroll();
});

// ================================
// ===== Toggle Navbar (untuk HP) =====
// ================================
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('menu');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('show');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const icon = themeToggle.querySelector('i');

  // Fungsi untuk mengatur tema berdasarkan preferensi
  function setTheme(isDark) {
    if (isDark) {
      body.classList.add('dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    } else {
      body.classList.remove('dark');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Cek preferensi dari localStorage saat halaman dimuat
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // Event listener untuk tombol toggle
  themeToggle.addEventListener('click', function() {
    const isDark = body.classList.contains('dark');
    setTheme(!isDark);
  });
});


// ================================
// ===== Efek Mengetik Hello + Nama =====
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const helloSpan = document.querySelector('.hello');
  const nameSpan = document.querySelector('.name');
  const cursor = document.querySelector('.cursor');

  if (!helloSpan || !nameSpan || !cursor) return;

  const helloText = "Hello, I'm ";
  const nameText = "Nasya Eka Pratiwi";
  let i = 0;
  let j = 0;

  function typeHello() {
    if (i < helloText.length) {
      helloSpan.textContent += helloText.charAt(i);
      i++;
      setTimeout(typeHello, 100);
    } else {
      setTimeout(typeName, 400);
    }
  }

  function typeName() {
    if (j < nameText.length) {
      nameSpan.textContent += nameText.charAt(j);
      j++;
      setTimeout(typeName, 100);
    }
  }

  typeHello(); // mulai mengetik
});

