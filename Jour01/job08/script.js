function estPremier(nombre) {
    if (nombre <= 1) {
        return false; // Les nombres négatifs, 0 et 1 ne sont pas premiers
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Si le nombre est divisible par un nombre autre que 1 et lui-même, alors il n'est pas premier
        }
    }
    return true; // Si aucune division n'a de reste, le nombre est premier
}

// Fonction pour calculer la somme des nombres premiers
function sommeNombresPremiers(nombre1, nombre2) {
    // Vérifier si les deux nombres sont premiers
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2; // Si les deux nombres sont premiers, renvoyer leur somme
    } else {
        return false; // Sinon, renvoyer false
    }
}

// Exemple d'utilisation de la fonction
var resultat = sommeNombresPremiers(5, 7); // Les nombres 5 et 7 sont premiers
console.log(resultat); // Affiche 12, la somme de 5 et 7