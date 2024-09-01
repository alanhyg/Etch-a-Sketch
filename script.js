// Create 16x16 grid in container
const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);

    // Add hover effect and leave a trail of colors
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    });
}

// prompt user for no. of boxes 


// replace existing grid of boxes with user input