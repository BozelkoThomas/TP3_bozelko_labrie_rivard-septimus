// Cartes

// const pizza1 = document.getElementsById("pizza1");
// const pizza2 = document.getElementsById("pizza1");
// const pizza3 = document.getElementsById("pizza1");
// const pizza4 = document.getElementsById("pizza1");
// const form = document.createElement("form");
// const titre = document.createElement("h2");
 
// titre.textContent = "La pizza de Freddy";
// form.appendChild(titre);
// carte[0].appendChild(form);
 


// Mode de paiement --------------------------------------------------------------------------------------------------------------------------------x

// BASE
const paiement = document.getElementById("paiement");
const titrePaiement = document.createElement("h2");
titrePaiement.textContent = "Mode de paiement"
paiement.appendChild(titrePaiement);

// Container de tous les choix
const checkboxContainer = document.createElement("div");
paiement.appendChild(checkboxContainer);

// Container pour chaque choix
const paiementChoix1 = document.createElement("div");
checkboxContainer.appendChild(paiementChoix1);
const paiementChoix2 = document.createElement("div");
checkboxContainer.appendChild(paiementChoix2);
const paiementChoix3 = document.createElement("div");
checkboxContainer.appendChild(paiementChoix3);

// Choix 1
const paiementCheckboxes1 = document.createElement("input");
paiementCheckboxes1.setAttribute("type", "checkbox");
paiementCheckboxes1.setAttribute("name", "checkbox");
paiementCheckboxes1.setAttribute("id", "paiement1");
paiementChoix1.appendChild(paiementCheckboxes1);

const checkboxTitle1 = document.createElement("label");
checkboxTitle1.setAttribute("for", "checkbox")
checkboxTitle1.textContent = "Carte de crédit (en ligne)";
paiementChoix1.appendChild(checkboxTitle1);

// Choix 2
const paiementCheckboxes2 = document.createElement("input");
paiementCheckboxes2.setAttribute("type", "checkbox");
paiementCheckboxes2.setAttribute("name", "checkbox");
paiementCheckboxes1.setAttribute("id", "paiement2");
paiementChoix2.appendChild(paiementCheckboxes2);

const checkboxTitle2 = document.createElement("label");
checkboxTitle2.setAttribute("for", "checkbox")
checkboxTitle2.textContent = "Carte de crédit ou débit (à la porte)";
paiementChoix2.appendChild(checkboxTitle2);

// Choix 3
const paiementCheckboxes3 = document.createElement("input");
paiementCheckboxes3.setAttribute("type", "checkbox");
paiementCheckboxes3.setAttribute("name", "checkbox");
paiementCheckboxes1.setAttribute("id", "paiement3");
paiementChoix3.appendChild(paiementCheckboxes3);

const checkboxTitle3 = document.createElement("label");
checkboxTitle3.setAttribute("for", "checkbox")
checkboxTitle3.textContent = "Espèces (à la porte)";
paiementChoix3.appendChild(checkboxTitle3);













// Informations sur le client et pour la livraison ----------------------------------------------------------------------------------------------

const livraison = document.getElementById("livraison");
const titreLivraison = document.createElement("h2");
titreLivraison.textContent = "Informations pour la livraison";
livraison.appendChild(titreLivraison);

const inputNom = document.createElement("input");
inputNom.setAttribute("type", "text");
inputNom.textContent = "Nom et prénom";

inputNom.setAttribute("placeholder", "Nom et prénom");
inputNom.setAttribute("id", "nomLivraison");
livraison.appendChild(inputNom);







