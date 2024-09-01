// Create 16x16 grid in container
const container = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}

// prompt user for no. of boxes 


// replace existing grid of boxes with user input