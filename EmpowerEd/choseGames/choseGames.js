// Get the dots container element
const dotsContainer = document.querySelector('.dots-container');

// Function to create a snowflake element
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}%`; // Randomize the left position
    snowflake.style.animationDelay = `${Math.random() * 2}s`; // Randomize the animation delay
    snowflake.style.top = `${Math.random() * -100}px`; // Randomize the top position
    return snowflake;
}

// Add 50 snowflakes to the animation
for (let i = 0; i < 50; i++) {
    const snowflake = createSnowflake();
    dotsContainer.appendChild(snowflake);
}

// Animate the snowflakes
setInterval(() => {
    const snowflakes = dotsContainer.children;
    for (let i = 0; i < snowflakes.length; i++) {
        const snowflake = snowflakes[i];
        const top = parseInt(snowflake.style.top);
        if (top > window.innerHeight) {
            snowflake.style.top = `${Math.random() * -100}px`;
        } else {
            snowflake.style.top = `${top + 2}px`;
        }
    }
}, 16); // 16ms = 60fps