function jourTravaille(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1;
    const jour = date.getDate();
    const jourSemaine = date.getDay(); // 0 pour dimanche, 1 pour lundi, ..., 6 pour samedi

    // Liste des jours fériés en 2024 sous forme de chaînes de caractères représentant les dates au format court (jj/mm)
    const jours_feries_2024 = [
        "01/01", // Nouvel An
        "01/04", // Lundi de Pâques
        "01/05", // Fête du Travail
        "08/05", // Victoire 1945
        "30/05", // Ascension
        "14/07", // Fête Nationale
        "15/08", // Assomption
        "01/11", // Toussaint
        "11/11", // Armistice
        "25/12"  // Noël
    ];

    const dateCourte = `${jour}/${mois}`;

    const isJourFerie = jours_feries_2024.includes(dateCourte);
    const isWeekend = jourSemaine === 0 || jourSemaine === 6;

    let message;

    if (isJourFerie) {
        message = `Le ${jour} ${mois} ${annee} est un jour férié.`;
    } else if (isWeekend) {
        message = `Non, ${jour} ${mois} ${annee} est un week-end.`;
    } else {
        message = `Oui, ${jour} ${mois} ${annee} est un jour travaillé.`;
    }

    console.log(message);
}

// Exemple d'utilisation :
const date_test1 = new Date(2024, 4, 1); // Fête du Travail
const date_test2 = new Date(2024, 4, 4); // Jour travaillé
const date_test3 = new Date(2024, 3, 28); // Weekend

jourTravaille(date_test1);
jourTravaille(date_test2);
jourTravaille(date_test3);