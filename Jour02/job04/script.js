const textarea = document.getElementById("keylogger");

  // Ajoutez un gestionnaire d'événements pour les touches du clavier
  document.addEventListener("keydown", function(event) {
    // Récupérez la touche frappée
    const key = event.key.toLowerCase();

    // Vérifiez si la touche est une lettre de l'alphabet (a-z)
    if (/^[a-z]$/.test(key)) {
      // Vérifiez si le focus est dans le textarea
      const isTextAreaFocused = document.activeElement === textarea;

      // Ajoutez la lettre au contenu du textarea
      textarea.value += key;

      // Si le focus est dans le textarea, ajoutez la lettre une deuxième fois
      if (isTextAreaFocused) {
        textarea.value += key;
      }
    }
  });