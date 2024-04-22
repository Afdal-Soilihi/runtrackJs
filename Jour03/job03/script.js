document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.tile');
    const resetButton = document.getElementById('resetButton');
    const message = document.getElementById('message');

    // Fonction pour mélanger les carreaux
    function shuffleTiles() {
        // Code pour mélanger les carreaux
        // ...
    }

    // Fonction pour déplacer un carreau
    function moveTile(tile) {
        // Code pour déplacer le carreau
        // ...
    }

    // Fonction pour vérifier si le joueur a gagné
    function checkWin() {
        // Code pour vérifier si les carreaux sont dans le bon ordre
        // ...
    }

    // Ajouter un écouteur d'événements à chaque carreau
    tiles.forEach(tile => {
        tile.addEventListener('click', function() {
            moveTile(tile);
            if (checkWin()) {
                message.textContent = 'Vous avez gagné';
                message.style.color = 'green';
                // Désactiver les carreaux
                tiles.forEach(tile => tile.removeEventListener('click', moveTile));
            }
        });
    });

    // Ajouter un écouteur d'événements au bouton "Recommencer"
    resetButton.addEventListener('click', function() {
        // Remettre les carreaux dans une configuration initiale aléatoire
        shuffleTiles();
        // Réinitialiser le message de victoire
        message.textContent = '';
        message.style.color = '';
        // Réactiver les carreaux
        tiles.forEach(tile => tile.addEventListener('click', moveTile));
    });

    // Mélanger les carreaux au chargement de la page
    shuffleTiles();
});