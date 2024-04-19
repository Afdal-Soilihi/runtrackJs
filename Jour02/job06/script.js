// Code Konami: Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Ajout d'un gestionnaire d'événements pour les touches du clavier
document.addEventListener('keydown', function(event) {
  // Récupérer la touche pressée
  const key = event.key;

  // Vérifier si la touche correspond à la prochaine étape du code Konami
  if (key === konamiCode[konamiIndex]) {
    konamiIndex++;

    // Si le code Konami est terminé, appliquer les styles de La Plateforme
    if (konamiIndex === konamiCode.length) {
      document.body.classList.add('la-plateforme');
      konamiIndex = 0; // Réinitialiser l'index pour permettre de réutiliser le code
    }
  } else {
    // Réinitialiser l'index si la touche pressée ne correspond pas à la prochaine étape du code
    konamiIndex = 0;
  }
});