document.getElementById("year").textContent = new Date().getFullYear();

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const scrollTopBtn = document.querySelector('.scroll-top');
const testimonialSlides = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const currentYear = document.getElementById('year');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});


// Close mobile menu when clicking a link
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
  });
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// ======================
// About Page Specific JS
// ======================

// Animate timeline items as they come into view
if (document.querySelector('.timeline-item')) {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });
}

const marqueeTrack = document.getElementById("certificates-track");
const marqueeContainer = document.getElementById("certificates-marquee");

marqueeContainer.addEventListener("mouseenter", () => {
  marqueeTrack.style.animationPlayState = "paused";
});

marqueeContainer.addEventListener("mouseleave", () => {
  marqueeTrack.style.animationPlayState = "running";
});

const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    const progress = card.querySelector(".progress");
    progress.style.animation = "none";
    void progress.offsetWidth;
    progress.style.animation = "fillProgress 2s ease-out forwards";
  });
});




