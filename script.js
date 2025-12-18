// Handle welcome overlay (reveal after load, remove after animation)
window.addEventListener('load', () => {
    const overlay = document.getElementById('welcomeOverlay');

    // Show page only after everything is loaded
    document.body.style.visibility = 'visible';

    // Reveal overlay
    if (overlay) {
        overlay.style.opacity = '1';
    }

    // Remove overlay after animation
    setTimeout(() => {
        if (overlay) {
            overlay.remove();
        }
    }, 5000);
});

// Smooth scroll to menu section
function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({
        behavior: 'smooth'
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    navbar.style.backgroundColor =
        window.scrollY > 50 ? '#D8CFC0' : '#E8E0D5';
});

// Animate menu items on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

