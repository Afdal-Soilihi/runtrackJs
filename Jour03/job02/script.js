const container = document.getElementById('container');
const shuffleButton = document.getElementById('shuffleButton');
const message = document.getElementById('message');

// Mélanger les images
shuffleButton.addEventListener('click', function() {
    for (let i = container.children.length; i >= 0; i--) {
        container.appendChild(container.children[Math.random() * i | 0]);
    }
});

// Vérifier si les images sont dans le bon ordre
function checkOrder() {
    const images = container.querySelectorAll('img');
    const correctOrder = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];
    let isCorrect = true;

    images.forEach((img, index) => {
        if (img.getAttribute('src') !== correctOrder[index]) {
            isCorrect = false;
        }
    });

    if (isCorrect) {
        message.textContent = 'Vous avez gagné';
        message.style.color = 'green';
    } else {
        message.textContent = 'Vous avez perdu';
        message.style.color = 'red';
    }
}

// Vérifier l'ordre lorsque le bouton de mélange est cliqué
shuffleButton.addEventListener('click', checkOrder);

// Vérifier l'ordre lorsque les images sont déplacées
container.addEventListener('dragend', checkOrder);