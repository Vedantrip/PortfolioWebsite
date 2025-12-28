:root {
    --bg: #0b0b0b;          
    --card-bg: #141414;     
    --text: #ffffff;
    --neon: #D2FF00;        /* Lando Lime */
    --dim: #888888;
    --font-head: 'Syne', sans-serif;
    --font-body: 'Inter', sans-serif;
}

/* Base Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 1. HIDE SYSTEM CURSOR (Desktop Only) */
@media (min-width: 992px) {
    * {
        cursor: none !important; /* Force hide default arrow */
    }
}

body {
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    overflow-x: hidden;
}

/* --- CUSTOM CURSOR --- */
.cursor {
    display: none; /* Hidden by default (for mobile) */
}

@media (min-width: 992px) {
    .cursor {
        display: block; /* Show only on desktop */
        width: 20px;
        height: 20px;
        background: var(--neon);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none; /* CRITICAL: Lets you click "through" the dot */
        z-index: 99999; /* Higher than everything */
        mix-blend-mode: difference;
        transition: transform 0.15s ease-out; /* Smooth movement lag */
        transform: translate(-50%, -50%); /* Centers dot on mouse */
    }
}

/* --- NAVIGATION --- */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 5vw;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(11, 11, 11, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
}

.logo {
    font-family: var(--font-head);
    font-weight: 800;
    font-size: 1.5rem;
    color: var(--text) !important;
    text-decoration: none;
    text-transform: uppercase;
}

.menu { display: flex; gap: 30px; }
.menu a {
    text-decoration: none;
    color: var(--dim);
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: color 0.3s;
}
.menu a:hover { color: var(--neon); }

/* --- HERO SECTION (FIXED VISIBILITY) --- */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5vw;
    position: relative;
    overflow: hidden;
}

/* Layer 1: Image (Background) */
.hero-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60vw;
    max-width: 500px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto; /* Allow hover */
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    
    /* FIX: Increased brightness to 0.9 so we can see you */
    filter: grayscale(100%) contrast(1.1) brightness(0.9);
    opacity: 0.9;
    
    /* Fade edges into black */
    -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Layer 2: Content (Foreground) */
.hero-content {
    z-index: 10;
    text-align: center;
    width: 100%;
    pointer-events: none; /* Let clicks pass to image/buttons */
}

.hero-title {
    font-size: 11vw;
    line-height: 0.8;
    font-weight: 800;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 10;
    
    /* FIX: Make text transparent (Hollow) so face shows through */
    color: transparent;
    -webkit-text-stroke: 2px var(--text); /* White Outline */
    
    /* Remove shadow so it doesn't muddy the face */
    text-shadow: none; 
}

.hero-title span { display: block; }

/* We don't need .outline class specifically anymore since parent is outlined, 
   but keeping it for safety/thickness control */
.outline {
    -webkit-text-stroke: 2px var(--text);
    color: transparent;
}

/* Hero Interaction */
.hero:hover .hero-image img {
    filter: grayscale(0%) contrast(1) brightness(1); /* Full Color */
    opacity: 1;
    transform: scale(1.05);
}

/* Bio Box */
.hero-sub {
    /* FIX: Pushed down significantly so it doesn't cover chin */
    margin-top: 35vh; 
    
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    background: rgba(0,0,0,0.85); /* Darker background for contrast */
    padding: 25px;
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    pointer-events: auto; /* Re-enable buttons */
    position: relative;
    z-index: 20;
}

.role-tag {
    color: var(--neon);
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
    margin-bottom: 10px;
    display: block;
}

.bio-text {
    color: #ddd;
    line-height: 1.6;
    font-size: 1rem;
    margin-bottom: 20px;
}
.bio-text strong { color: white; font-weight: 600; }

.hero-actions { display: flex; gap: 15px; justify-content: center; }
.cta-button {
    background: var(--neon);
    color: black;
    padding: 12px 30px;
    text-decoration: none;
    font-weight: 700;
    border-radius: 4px;
    font-family: var(--font-head);
    text-transform: uppercase;
    transition: all 0.3s;
}
.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(210, 255, 0, 0.3);
}

.outline-btn {
    background: transparent;
    border: 1px solid var(--neon);
    color: var(--neon);
}
.outline-btn:hover { background: var(--neon); color: black; }

/* --- MARQUEE --- */
.marquee-container {
    width: 100%;
    background: var(--neon);
    padding: 12px 0;
    transform: rotate(-2deg) scale(1.05);
    margin: 60px 0;
}

.marquee-content {
    display: flex;
    white-space: nowrap;
    animation: scroll 20s linear infinite;
}

.marquee-content span {
    color: #000;
    font-family: var(--font-head);
    font-weight: 800;
    font-size: 1.2rem;
    margin-right: 40px;
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* --- EXPERIENCE & SECTIONS --- */
.section-title {
    font-size: 3rem;
    margin-bottom: 40px;
    color: var(--dim);
    font-family: var(--font-head);
}
.experience, .work, .contact-section { padding: 80px 5vw; }

.exp-item {
    border-top: 1px solid #333;
    padding: 40px 0;
    display: flex;
    gap: 40px;
    transition: background 0.3s;
}
.exp-item:hover { background: #0f0f0f; }

.exp-date {
    font-family: 'Courier New', monospace;
    color: var(--neon);
    font-size: 0.9rem;
    min-width: 160px;
}

.exp-details h3 { font-size: 1.8rem; margin-bottom: 5px; font-family: var(--font-head); }
.exp-details h4 { color: #888; font-weight: 400; margin-bottom: 15px; font-size: 1.1rem; }
.exp-details ul { list-style: none; }
.exp-details li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;
    color: #ccc;
    line-height: 1.5;
}
.exp-details li::before {
    content: "►";
    position: absolute;
    left: 0;
    color: var(--neon);
    font-size: 0.7rem;
    top: 4px;
}

/* --- PROJECTS (BENTO) --- */
.bento-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}

.project-card {
    background: var(--card-bg);
    border: 1px solid #222;
    border-radius: 16px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.4s ease;
    min-height: 400px;
}
.project-card:hover {
    border-color: var(--neon);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.item-large { grid-column: span 2; }

.project-tagline {
    color: var(--neon);
    font-size: 0.9rem;
    margin-bottom: 15px;
    font-family: 'Courier New', monospace;
}

.project-desc { color: #ccc; line-height: 1.5; margin-bottom: 20px; }

.tech-stack { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
.tech-stack span {
    font-size: 0.75rem;
    background: #222;
    padding: 5px 12px;
    border-radius: 20px;
    color: #aaa;
    border: 1px solid #333;
}

.project-bullets { list-style: none; margin-bottom: 20px; }
.project-bullets li {
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #999;
    padding-left: 15px;
    border-left: 2px solid #333;
}

.card-links a {
    text-decoration: none;
    color: white;
    font-weight: 600;
    margin-right: 20px;
    font-size: 0.9rem;
    transition: color 0.3s;
}
.card-links a:hover { color: var(--neon); }

.cert-list li { margin-bottom: 10px; color: #ccc; }
.cert-list strong { color: white; }

/* --- CONTACT --- */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.contact-tile {
    background: #1a1a1a;
    padding: 30px;
    border-radius: 12px;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    border: 1px solid #333;
    transition: all 0.3s;
}
.contact-tile i { font-size: 2rem; color: #888; transition: color 0.3s; }
.contact-tile:hover { border-color: var(--neon); background: #222; }
.contact-tile:hover i { color: var(--neon); }
.resume-tile { border-color: var(--neon); }
.resume-tile i { color: var(--neon); }

.site-footer {
    text-align: center;
    margin-top: 80px;
    color: #555;
    font-size: 0.8rem;
    border-top: 1px solid #222;
    padding-top: 40px;
}

/* --- MOBILE RESPONSIVE --- */
@media (max-width: 768px) {
    .hero-title { font-size: 14vw; }
    
    /* Reset margin on mobile since layout is different */
    .hero-sub { margin-top: 2vh; padding: 20px; width: 95%; }
    
    .bento-grid { grid-template-columns: 1fr; }
    .item-large { grid-column: span 1; }
    .exp-item { flex-direction: column; gap: 10px; }
    
    /* Tweaks for image on mobile */
    .hero-image { width: 90vw; opacity: 0.5; }
    
    /* Hide top menu on small screens */
    .menu { display: none; }
}
