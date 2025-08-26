function portfolioWindow() {
    if (document.querySelector('.portfolio-window')) {
        return;
    }

    const windowDiv = document.createElement('div')
    windowDiv.className = 'portfolio-window'

    windowDiv.innerHTML = `
        <div class="window-titlebar">
            <div class="window-title">Portfolio</div>
            <div class="window-controls">
                <div class="window-button minimize"></div>
                <div class="window-button maximize"></div>
                <div class="window-button close"></div>
            </div>
        </div>
        <div class="window-content">
            <p>Portfolio content coming soon...</p>
        </div>
    `;

    document.body.appendChild(windowDiv);
    
    const rect = windowDiv.getBoundingClientRect();
    const centerX = (window.innerWidth - rect.width) / 2;
    const centerY = (window.innerHeight - rect.height) / 2;
    windowDiv.style.transform = `translate(${centerX}px, ${centerY}px)`;

    makeWindowDraggable(windowDiv);

    const closeButton = windowDiv.querySelector('.close');
    closeButton.addEventListener('click', () => {
        windowDiv.remove();
    });
}

function makeWindowDraggable(windowElement) {
    const titlebar = windowElement.querySelector('.window-titlebar');

    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    titlebar.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        const transform = window.getComputedStyle(windowElement).transform;
        if (transform !== 'none') {
            const matrix = new WebKitCSSMatrix(transform);
            xOffset = matrix.m41;
            yOffset = matrix.m42;
        }
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        if (e.target === titlebar || titlebar.contains(e.target)) {
            if (!e.target.classList.contains('window-button')) {
                isDragging = true;
                titlebar.style.cursor = 'grabbing';
            }
        }
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            const rect = windowElement.getBoundingClientRect();
            const maxX = window.innerWidth - rect.width;
            const maxY = window.innerHeight - rect.height;

            xOffset = Math.max(0, Math.min(xOffset, maxX));
            yOffset = Math.max(0, Math.min(yOffset, maxY));

            windowElement.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        }
    }

    function dragEnd() {
        isDragging = false;
        titlebar.style.cursor = 'grab';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const portfolioLinks = document.querySelectorAll('a[href="#"]');
    portfolioLinks.forEach(link => {
        if (link.textContent.trim() === 'Portfolio') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                portfolioWindow();
            });
        }
    });
});