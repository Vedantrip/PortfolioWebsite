const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// 2. Custom Cursor Logic
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, .card, .hero-image').forEach(item => {
    item.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)'; // Grow
        cursor.style.opacity = '0.5';
    });
    item.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)'; // Shrink
        cursor.style.opacity = '1';
    });
});

gsap.registerPlugin(ScrollTrigger);


gsap.from(".hero-title span", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.out"
});

gsap.from(".hero-image", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    ease: "power2.out"
});

gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});