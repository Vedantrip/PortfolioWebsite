// 1. Initialize Lenis (Smooth Scroll)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Custom Cursor Logic (Desktop Only)
const cursor = document.querySelector('.cursor');

if (cursor && window.matchMedia("(min-width: 992px)").matches) {
    
    // Move the cursor
    document.addEventListener('mousemove', (e) => {
        // Since we centered it with CSS transform, we just set raw top/left
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover Effects (Grow on links/cards)
    const hoverTargets = document.querySelectorAll('a, button, .project-card, .contact-tile, .hero-image');
    
    hoverTargets.forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(3)'; // Grow
            cursor.style.opacity = '0.5';
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)'; // Shrink
            cursor.style.opacity = '1';
        });
    });
}

// 3. GSAP Animations (Entrance)
gsap.registerPlugin(ScrollTrigger);

// Hero Text Slide-Up
gsap.from(".hero-title span", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.out"
});

// Photo Fade In
gsap.from(".hero-image", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out"
});

// Staggered Cards Reveal
gsap.utils.toArray('.project-card, .exp-item').forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});
