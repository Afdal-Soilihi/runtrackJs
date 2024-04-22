function filterPokemon() {
    const id = document.getElementById("id").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const type = document.getElementById("type").value.trim();

    fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
        const filteredPokemon = data.filter(pokemon => {
            return (id === "" || pokemon.id.includes(id)) &&
                   (nom === "" || pokemon.nom.toLowerCase().includes(nom.toLowerCase())) &&
                   (type === "" || pokemon.type.includes(type));
        });

        displayPokemon(filteredPokemon);
    })
    .catch(error => {
        console.error('Erreur lors de la récupération du fichier :', error);
    });
}