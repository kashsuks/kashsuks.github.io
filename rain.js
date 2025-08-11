function createRain() {
    const rainContainer = document.querySelector('.rain-container');
    const numberOfDrops = 50;
    
    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'raindrop';
        
        const size = Math.random() * 3 + 1;
        const xPos = Math.random() * 100;
        const animationDuration = Math.random() * 2 + 1;
        const animationDelay = Math.random() * 5;
        
        drop.style.left = `${xPos}%`;
        drop.style.width = `${size}px`;
        drop.style.height = `${size * 20}px`;
        drop.style.animationDuration = `${animationDuration}s`;
        drop.style.animationDelay = `${animationDelay}s`;
        
        rainContainer.appendChild(drop);
    }
}

function createMatrixRain() {
    const matrixContainer = document.querySelector('.matrix-rain');
    const characters = '01アカサタナハマヤラワ';
    const numberOfColumns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < numberOfColumns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        
        let columnText = '';
        for (let j = 0; j < 50; j++) {
            columnText += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        
        column.innerHTML = columnText;
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 10 + 5}s`;
        column.style.animationDelay = `${Math.random() * 5}s`;
        
        matrixContainer.appendChild(column);
    }
}

createRain();
createMatrixRain();

setInterval(() => {
    const rainContainer = document.querySelector('.rain-container');
    const drops = rainContainer.querySelectorAll('.raindrop');
    
    if (drops.length > 0) {
        const randomDrop = drops[Math.floor(Math.random() * drops.length)];
        randomDrop.remove();
        
        const newDrop = document.createElement('div');
        newDrop.className = 'raindrop';
        const size = Math.random() * 3 + 1;
        const xPos = Math.random() * 100;
        const animationDuration = Math.random() * 2 + 1;
        
        newDrop.style.left = `${xPos}%`;
        newDrop.style.width = `${size}px`;
        newDrop.style.height = `${size * 20}px`;
        newDrop.style.animationDuration = `${animationDuration}s`;
        
        rainContainer.appendChild(newDrop);
    }
}, 200);

window.addEventListener('resize', () => {
    const matrixContainer = document.querySelector('.matrix-rain');
    matrixContainer.innerHTML = '';
    createMatrixRain();
});