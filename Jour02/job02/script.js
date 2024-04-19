function showhide() {
    var article = document.getElementById("article");

    // Vérifier si l'article est visible
    if (article.style.display === "none" || article.style.display === "") {
      // Si l'article est caché, le rendre visible
      article.style.display = "block";
      article.innerText = "L'important n'est pas la chute, mais l'atterrissage.";
    } else {
      // Si l'article est visible, le cacher
      article.style.display = "none";
      article.innerText = "";
    }
  }