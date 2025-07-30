const canvas = document.querySelector(".matrix-bg");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const letters = "アァイィウヴエカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = Math.floor(width / fontSize);
const drops = Array(columns).fill(1);

function draw() {
  // Use a semi-transparent black rectangle to create the fading trail effect
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, width, height);

  // Set text color and font
  ctx.fillStyle = "#00FF00"; // Classic matrix green
  ctx.font = `${fontSize}px monospace`;

  // Loop through each column
  for (let i = 0; i < drops.length; i++) {
    // Pick a random character
    const char = letters.charAt(Math.floor(Math.random() * letters.length));
    
    // Draw the character at its current position
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    // Reset the drop to the top if it goes off-screen, with a random chance
    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Move the drop down for the next frame
    drops[i]++;
  }
}

// ---- Animation Loop using requestAnimationFrame ----
let lastTime = 0;
const fps = 30; // Frames per second
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    if (timer > nextFrame) {
        draw();
        timer = 0;
    } else {
        timer += deltaTime;
    }
    
    requestAnimationFrame(animate);
}

// Start the animation
animate(0);


// --- Handle window resize ---
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  // Note: On resize, you might want to recalculate columns and reset drops array
  // This simple version will adapt but might have visual artifacts until it settles.
});