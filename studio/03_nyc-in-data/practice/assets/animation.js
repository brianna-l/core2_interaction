// FALL DOWN
// --------------------

document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    const numberOfLines = 20;
    const lineThickness = 1;
    const spacing = 2;

    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.classList.add('line');
        const randomRotation = Math.random() * 20 - 10;
        const randomLeft = Math.random() * 50;

        line.style.top = `${Math.random() * 100 - 100}%`;
        line.style.left = `${randomLeft}%`;
        line.style.animationDuration = `${3 - (i * 0.2)}s`;
        line.style.animationDelay = `${i * 0.5}s`;
        line.style.transform = `rotate(${randomRotation}deg)`;
        main.appendChild(line);

        line.addEventListener('animationstart', function() {
            const finalTop = `calc(100% - ${lineThickness}px - ${(numberOfLines - 1 - i) * (lineThickness + spacing)}px)`;
            line.style.top = finalTop;
        });
    }
});
