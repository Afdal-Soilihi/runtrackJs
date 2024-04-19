// Sélectionnez le bouton et le paragraphe
const button = document.getElementById("button");
const compteur = document.getElementById("compteur");

// Initialisez le compteur
let nombreClics = 0;

// Ajoutez un gestionnaire d'événements au bouton
button.addEventListener("click", addOne);

// Définissez la fonction pour ajouter un clic
function addOne() {
  // Incrémentez le compteur de clics
  nombreClics++;
  // Mettez à jour le contenu du paragraphe avec le nouveau compteur
  compteur.textContent = nombreClics.toString();
}