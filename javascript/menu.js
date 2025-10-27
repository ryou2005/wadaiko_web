document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', function() {
            // toggle button/menu active state
            const isActive = hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');

            // update aria-expanded for accessibility
            hamburgerBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');

            // stagger animation: set per-item animationDelay when opening
            const items = navMenu.querySelectorAll('ul li');
            // base delay (ms) to allow panel expand animation to start/finish before items
            const baseDelayMs = 220; // matches CSS panel transition (320ms) with slight overlap
            const staggerMs = 80; // per-item stagger
            items.forEach((li, idx) => {
                if (isActive) {
                    // delay each item so they start after the panel reveal
                    li.style.animationDelay = `${baseDelayMs + idx * staggerMs}ms`;
                    // ensure animation restarts when opening repeatedly
                    li.style.animationName = 'slideDown';
                } else {
                    // clear inline styles when closing so animation restarts next open
                    li.style.animationDelay = '';
                    li.style.animationName = '';
                }
            });
        });
    }
});
