// Sélectionner le bouton pour afficher le texte
const showTextButton = document.getElementById('showTextButton');

// Sélectionner le bouton pour cacher l'élément
const hideElementButton = document.getElementById('hideElementButton');

// Sélectionner l'élément de citation
const quoteElement = document.getElementById('quote');

// Définir le texte de la citation
const quoteText = "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.";

// Ajouter un écouteur d'événements pour le bouton d'affichage
showTextButton.addEventListener('click', function() {
    // Afficher le texte de la citation dans l'élément de citation
    quoteElement.textContent = quoteText;
});

// Ajouter un écouteur d'événements pour le bouton de masquage
hideElementButton.addEventListener('click', function() {
    // Cacher l'élément de citation
    quoteElement.style.display = 'none';
});