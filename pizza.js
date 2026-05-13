// Cartes

const pizza1 = document.getElementsById("pizza1");
const pizza2 = document.getElementsById("pizza1");
const pizza3 = document.getElementsById("pizza1");
const pizza4 = document.getElementsById("pizza1");
const form = document.createElement("form");
const titre = document.createElement("h2");
 
titre.textContent = "La pizza de Freddy";
form.appendChild(titre);
carte[0].appendChild(form);
 
// Mode de paiement et informations sur le client

const paiement = document.getElementById("paiement");
const titrePaiement = document.createElement("h2");
titrePaiement.textContent = "Mode de paiement"
paiement.appendChild(titrePaiement);














// Informations pour la livraison

const livraison = document.getElementById("livraison");
const titreLivraison = document.createElement("h3");
titreLivraison.textContent = "Informations pour la livraison";
livraison.appendChild(titreLivraison);

const labelNom = document.createElement("label");
labelNom.textContent = "Nom et prénom";
const inputNom = document.createElement("input");
inputNom.setAttribute("type", "text");

inputNom.setAttribute("placeholder", "Nom et prénom");
inputNom.setAttribute("id", "nomLivraison");
livraison.appendChild(labelNom);







