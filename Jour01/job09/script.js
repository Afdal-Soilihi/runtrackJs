function tri(numbers, order) {
    // Vérifier le paramètre "order"
    if (order === "asc") {
        // Utiliser la méthode sort() avec une fonction de comparaison pour trier dans l'ordre ascendant
        numbers.sort(function(a, b) {
            return a - b; // Tri ascendant
        });
    } else if (order === "desc") {
        // Utiliser la méthode sort() avec une fonction de comparaison pour trier dans l'ordre descendant
        numbers.sort(function(a, b) {
            return b - a; // Tri descendant
        });
    } else {
        // Si le paramètre "order" n'est ni "asc" ni "desc", retourner null ou un message d'erreur
        return null; // Ou retourner un message d'erreur
    }

    // Retourner le tableau trié
    return numbers;
}

// Exemple d'utilisation de la fonction
var numbers = [3, 1, 5, 2, 4];
console.log(tri(numbers, "asc")); // Tri ascendant
console.log(tri(numbers, "desc")); // Tri descendant