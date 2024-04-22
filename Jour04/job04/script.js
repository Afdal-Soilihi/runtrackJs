document.getElementById("updateButton").addEventListener("click", function() {
    fetch("utilisateur.json")
    .then(response => response.json())
    .then(data => {
        const userTableBody = document.getElementById("userTableBody");
        userTableBody.innerHTML = ""; // Vide le contenu actuel du tableau

        data.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.nom}</td>
                <td>${user.prenom}</td>
                <td>${user.email}</td>
            `;
            userTableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Erreur lors de la récupération du fichier :', error);
    });
});
