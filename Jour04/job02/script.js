function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        const jsonObject = JSON.parse(jsonString);
        
        // Vérifier si la clé existe dans l'objet
        if (key in jsonObject) {
            // Retourner la valeur liée à la clé
            return jsonObject[key];
        } else {
            return "Clé non trouvée";
        }
    } catch (error) {
        // Gérer les erreurs de parsing JSON
        console.error("Erreur de parsing JSON :", error);
        return null;
    }
}

// Exemple d'utilisation :
const jsonString = '{"name": "John", "age": 30, "city": "Marseille"}';
const key = "city";
const value = jsonValueKey(jsonString, key);
console.log(value); // Output : Marseille