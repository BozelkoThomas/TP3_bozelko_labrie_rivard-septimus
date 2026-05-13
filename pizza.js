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

// Facture --------------------------------------------------------------------------------------------------------------------------------------------

// BASE
const facture = document.getElementById("facture-header");
const titreFacture = document.createElement("h2");
titreFacture.textContent = "Pizzeria Freddy Fazbear"
facture.appendChild(titreFacture);


// Commande
const commande = document.getElementById("facture-commande");
const titreCommande = document.createElement("div");
titreCommande.setAttribute("id", "commande-header");
facture.appendChild(titreCommande);

const pizza1Container = document.createElement("div");
pizza1Container.setAttribute("id", "pizza1Container");
facture.appendChild(pizza1Container);

const pizza2Container = document.createElement("div");
pizza2Container.setAttribute("id", "pizza2Container");
facture.appendChild(pizza2Container);

const pizza3Container = document.createElement("div");
pizza3Container.setAttribute("id", "pizza3Container");
facture.appendChild(pizza3Container);

const pizza4Container = document.createElement("div");
pizza4Container.setAttribute("id", "pizza4Container");
facture.appendChild(pizza4Container);

const titreCommandeNom = document.createElement("h3");
titreCommandeNom.textContent = "Détails de la commande"
titreCommande.appendChild(titreCommandeNom);

const titreCommandeQt = document.createElement("h3");
titreCommandeQt.textContent = "Quantité"
titreCommande.appendChild(titreCommandeQt);

const titreCommandePrix = document.createElement("h3");
titreCommandePrix.textContent = "Prix"
titreCommande.appendChild(titreCommandePrix);
// Freddy
const pizza1 = document.createElement("p");
pizza1.textContent = "Pizza Freddy"
pizza1Container.appendChild(pizza1);

const qt1 = document.createElement("input");
qt1.setAttribute("type", "number")
pizza1Container.appendChild(qt1);

const prix1 = document.createElement("input");
prix1.setAttribute("type", "number")
pizza1Container.appendChild(prix1);
// Bonnie
const pizza2 = document.createElement("p");
pizza2.textContent = "Pizza Bonnie"
pizza2Container.appendChild(pizza2);

const qt2 = document.createElement("input");
qt2.setAttribute("type", "number")
pizza2Container.appendChild(qt2);

const prix2 = document.createElement("input");
prix2.setAttribute("type", "number")
pizza2Container.appendChild(prix2);
// Chica
const pizza3 = document.createElement("p");
pizza3.textContent = "Pizza Chica"
pizza3Container.appendChild(pizza3);

const qt3 = document.createElement("input");
qt3.setAttribute("type", "number")
pizza3Container.appendChild(qt3);

const prix3 = document.createElement("input");
prix3.setAttribute("type", "number")
pizza3Container.appendChild(prix3);
// Foxy
const pizza4 = document.createElement("p");
pizza4.textContent = "Pizza Chica"
pizza4Container.appendChild(pizza4);

const qt4 = document.createElement("input");
qt4.setAttribute("type", "number")
pizza4Container.appendChild(qt4);

const prix4 = document.createElement("input");
prix4.setAttribute("type", "number")
pizza4Container.appendChild(prix4);


// Client
const client = document.getElementById("facture-client");
const titreClient = document.createElement("h3");
titreClient.textContent = "Informations sur le client"
facture.appendChild(titreClient);

const clientContainer = document.createElement("div");
clientContainer.setAttribute("id", "clientContainer");
facture.appendChild(clientContainer);

const nomPrenom = document.createElement("input");
nomPrenom.setAttribute("type", "text");
clientContainer.appendChild(nomPrenom);

const telephone = document.createElement("input");
telephone.setAttribute("type", "tel");
clientContainer.appendChild(telephone);

const courriel = document.createElement("input");
courriel.setAttribute("type", "email");
clientContainer.appendChild(courriel);

const adresse = document.createElement("input");
adresse.setAttribute("type", "text");
clientContainer.appendChild(adresse);