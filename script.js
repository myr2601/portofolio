// === Smooth scroll untuk navigasi internal ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        console.log('Anchor clicked:', this.getAttribute('href'));
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            console.log('Scrolling to target:', target);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Tutup menu mobile (jika terbuka)
        const mobileMenu = document.getElementById("mobileMenu");
        const hamburger = document.querySelector(".hamburger");
        if (mobileMenu && hamburger && mobileMenu.classList.contains("show")) {
            console.log('Closing mobile menu');
            mobileMenu.classList.remove("show");
            hamburger.classList.remove("active");
        }
    });
});

// === Animasi fade-in saat elemen muncul di layar ===
const fadeElements = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log('Observer entry:', entry.target, 'is intersecting:', entry.isIntersecting);
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing setelah muncul
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => {
    console.log('Observing element:', el);
    observer.observe(el);
});

// === Toggle menu hamburger ===
function toggleMenu(el) {
    console.log("Toggle hamburger clicked");
    el.classList.toggle("active");
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show");
}

