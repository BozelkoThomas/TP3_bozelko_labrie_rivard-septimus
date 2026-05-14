// Title 
const header = document.getElementById("header");
const mainTitle = document.createElement("h1");
mainTitle.textContent = "Pizzeria Freddy Fazbear";
header.appendChild(mainTitle);


// Pizzas
const nomsPizzas = ["Freddy", "Bonnie", "Chica", "Foxy"];
const pizzas = [document.getElementById("pizza1"), document.getElementById("pizza2"), document.getElementById("pizza3"), document.getElementById("pizza4")];
const choixPizzas = [
    ["Choix 1a", "Choix 2a", "Choix 3a"],
    ["Choix 1b", "Choix 2b", "Choix 3b"],
    ["Choix 1c", "Choix 2c", "Choix 3c"],
    ["Choix 1d", "Choix 2d", "Choix 3d"]
]

let i = 0;
let n = 0;

while (i < nomsPizzas.length) {
    const imagePizza = document.createElement("div");
    imagePizza.setAttribute("id", "imagePizza" + (i + 1));
    pizzas[i].appendChild(imagePizza);

    const titrePizza = document.createElement("h2");
    titrePizza.textContent = "La pizza de " + nomsPizzas[i];
    pizzas[i].appendChild(titrePizza);

    const formPizza = document.createElement("form");
    pizzas[i].appendChild(formPizza);

    while (n < (choixPizzas.length - 1)) {
        const conteneurChoixPizza = document.createElement("div");
        formPizza.appendChild(conteneurChoixPizza);

        const chkPizza = document.createElement("input");
        chkPizza.setAttribute("type", "checkbox");
        chkPizza.setAttribute("name", "checkbox");
        chkPizza.setAttribute("id", "chk" + (n + 1) + "Pizza" + (i + 1));
        conteneurChoixPizza.appendChild(chkPizza);

        const descChoixPizza = document.createElement("label");
        descChoixPizza.setAttribute("for", "chk" + (n + 1) + "Pizza" + (i + 1));
        descChoixPizza.textContent = choixPizzas[i][n];
        conteneurChoixPizza.appendChild(descChoixPizza); 

        n++;
    }

    const conteneurQtyPizza = document.createElement("div");
    formPizza.appendChild(conteneurQtyPizza);

    const btnMoinsPizza = document.createElement("button");
    btnMoinsPizza.setAttribute("id", "btnMoinsPizza" + (i + 1));
    btnMoinsPizza.textContent = "-";
    conteneurQtyPizza.appendChild(btnMoinsPizza);

    const qtyPizza = document.createElement("input");
    qtyPizza.setAttribute("id", "qtyPizza" + (i + 1));
    qtyPizza.setAttribute("value", "0");
    conteneurQtyPizza.appendChild(qtyPizza);

    const btnPlusPizza = document.createElement("button");
    btnPlusPizza.setAttribute("id", "btnPlusPizza" + (i + 1));
    btnPlusPizza.textContent = "+";
    conteneurQtyPizza.appendChild(btnPlusPizza);

    i++;
    n = 0;
}

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
paiementCheckboxes1.setAttribute("type", "radio");
paiementCheckboxes1.setAttribute("name", "checkbox");
paiementCheckboxes1.setAttribute("id", "paiement1");
paiementChoix1.appendChild(paiementCheckboxes1);

const checkboxTitle1 = document.createElement("label");
checkboxTitle1.setAttribute("for", "checkbox")
checkboxTitle1.textContent = "Carte de crédit (en ligne)";
paiementChoix1.appendChild(checkboxTitle1);

// Choix 2
const paiementCheckboxes2 = document.createElement("input");
paiementCheckboxes2.setAttribute("type", "radio");
paiementCheckboxes2.setAttribute("name", "checkbox");
paiementCheckboxes2.setAttribute("id", "paiement2");
paiementChoix2.appendChild(paiementCheckboxes2);

const checkboxTitle2 = document.createElement("label");
checkboxTitle2.setAttribute("for", "checkbox")
checkboxTitle2.textContent = "Carte de crédit ou débit (à la porte)";
paiementChoix2.appendChild(checkboxTitle2);

// Choix 3
const paiementCheckboxes3 = document.createElement("input");
paiementCheckboxes3.setAttribute("type", "radio");
paiementCheckboxes3.setAttribute("name", "checkbox");
paiementCheckboxes3.setAttribute("id", "paiement3");
paiementChoix3.appendChild(paiementCheckboxes3);

const checkboxTitle3 = document.createElement("label");
checkboxTitle3.setAttribute("for", "checkbox")
checkboxTitle3.textContent = "Espèces (à la porte)";
paiementChoix3.appendChild(checkboxTitle3);

// Informations sur le client ----------------------------------------------------------------------------------------------
const client = document.getElementById("client");

// TITRE

const clientTitre = document.createElement("h2");
clientTitre.textContent = "Informations sur le client"
client.appendChild(clientTitre);


// NOM

const inputNomClient = document.createElement("input");
inputNomClient.setAttribute("type", "text");
inputNomClient.setAttribute("placeholder", "Nom");
inputNomClient.setAttribute("id", "nomClient");


client.appendChild(inputNomClient);

// PRÉNOM

const labelPrenomClient = document.createElement("label");
labelPrenomClient.textContent = "Prénom";

const inputPrenomClient = document.createElement("input");
inputPrenomClient.setAttribute("type", "text");
inputPrenomClient.setAttribute("placeholder", "Prénom");
inputPrenomClient.setAttribute("id", "prenomClient");

client.appendChild(inputPrenomClient);


// TÉLÉPHONE

const inputTelephoneClient = document.createElement("input");
inputTelephoneClient.setAttribute("type", "tel");
inputTelephoneClient.setAttribute("placeholder", "Téléphone");
inputTelephoneClient.setAttribute("id", "telephoneClient");

client.appendChild(inputTelephoneClient);

// COURRIEL

const inputCourrielClient = document.createElement("input");
inputCourrielClient.setAttribute("type", "email");
inputCourrielClient.setAttribute("placeholder", "Adresse courriel");
inputCourrielClient.setAttribute("id", "courrielClient");

client.appendChild(inputCourrielClient);
client.appendChild(document.createElement("br"));


// Sélection du div livraison
const livraison = document.getElementById("livraison");

// TITRE
const titreLivraison = document.createElement("h2");
titreLivraison.textContent = "Informations pour la livraison";

livraison.appendChild(titreLivraison);

// NOM ET PRÉNOM

const inputNomLivraison = document.createElement("input");
inputNomLivraison.setAttribute("type", "text");
inputNomLivraison.setAttribute("placeholder", "Nom et prénom");
inputNomLivraison.setAttribute("id", "nomLivraison");

livraison.appendChild(inputNomLivraison);

// TÉLÉPHONE

const inputTelLivraison = document.createElement("input");
inputTelLivraison.setAttribute("type", "tel");
inputTelLivraison.setAttribute("placeholder", "Numéro de téléphone");
inputTelLivraison.setAttribute("id", "telephoneLivraison");

livraison.appendChild(inputTelLivraison);

// ADRESSE

const inputAdresseLivraison = document.createElement("input");
inputAdresseLivraison.setAttribute("type", "text");
inputAdresseLivraison.setAttribute("placeholder", "Adresse de livraison");
inputAdresseLivraison.setAttribute("id", "adresseLivraison");

livraison.appendChild(inputAdresseLivraison);

// Facture (cachée)--------------------------------------------------------------------------------------------------------------------------------------------

// BASE
const factureHeader = document.getElementById("facture-header");
const titreFacture = document.createElement("h2");
titreFacture.textContent = "Pizzeria Freddy Fazbear";
factureHeader.appendChild(titreFacture);


// Commande
const commande = document.getElementById("facture-commande");
const titreCommande = document.createElement("div");
titreCommande.setAttribute("id", "commande-header");
commande.appendChild(titreCommande);

const pizzasContainer = document.createElement("div");
pizzasContainer.setAttribute("id", "pizzasContainer");
commande.appendChild(pizzasContainer);

const pizza1Container = document.createElement("div");
pizza1Container.setAttribute("id", "pizza1Container");
pizzasContainer.appendChild(pizza1Container);

const pizza2Container = document.createElement("div");
pizza2Container.setAttribute("id", "pizza2Container");
pizzasContainer.appendChild(pizza2Container);

const pizza3Container = document.createElement("div");
pizza3Container.setAttribute("id", "pizza3Container");
pizzasContainer.appendChild(pizza3Container);

const pizza4Container = document.createElement("div");
pizza4Container.setAttribute("id", "pizza4Container");
pizzasContainer.appendChild(pizza4Container);

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
qt1.setAttribute("type", "number");
qt1.setAttribute("id", "quantiteFreddy");
pizza1Container.appendChild(qt1);

const prix1 = document.createElement("input");
prix1.setAttribute("type", "number");
prix1.setAttribute("id", "prixFreddy");
pizza1Container.appendChild(prix1);
// Bonnie
const pizza2 = document.createElement("p");
pizza2.textContent = "Pizza Bonnie";
pizza2Container.appendChild(pizza2);

const qt2 = document.createElement("input");
qt2.setAttribute("type", "number");
qt2.setAttribute("id", "quantiteBonnie");
pizza2Container.appendChild(qt2);

const prix2 = document.createElement("input");
prix2.setAttribute("type", "number");
prix2.setAttribute("id", "prixBonnie");
pizza2Container.appendChild(prix2);
// Chica
const pizza3 = document.createElement("p");
pizza3.textContent = "Pizza Chica";
pizza3Container.appendChild(pizza3);

const qt3 = document.createElement("input");
qt3.setAttribute("type", "number");
qt3.setAttribute("id", "quantiteChica");
pizza3Container.appendChild(qt3);

const prix3 = document.createElement("input");
prix3.setAttribute("type", "number");
prix3.setAttribute("id", "prixChica");
pizza3Container.appendChild(prix3);
// Foxy
const pizza4 = document.createElement("p");
pizza4.textContent = "Pizza Foxy";
pizza4Container.appendChild(pizza4);

const qt4 = document.createElement("input");
qt4.setAttribute("type", "number");
qt4.setAttribute("id", "quantiteFoxy");
pizza4Container.appendChild(qt4);

const prix4 = document.createElement("input");
prix4.setAttribute("type", "number");
prix4.setAttribute("id", "prixFoxy");
pizza4Container.appendChild(prix4);


// Client
const clientFacture = document.getElementById("facture-client");
const titreClient = document.createElement("h3");
titreClient.textContent = "Informations sur le client";
clientFacture.appendChild(titreClient);

const clientContainer = document.createElement("div");
clientContainer.setAttribute("id", "clientContainer");
clientFacture.appendChild(clientContainer);

const nomPrenom = document.createElement("input");
nomPrenom.setAttribute("type", "text");
nomPrenom.setAttribute("id", "factureNomPrenom");
clientContainer.appendChild(nomPrenom);

const telephone = document.createElement("input");
telephone.setAttribute("type", "tel");
telephone.setAttribute("id", "factureCell");
clientContainer.appendChild(telephone);

const courriel = document.createElement("input");
courriel.setAttribute("type", "email");
courriel.setAttribute("id", "factureEmail");
clientContainer.appendChild(courriel);

const adresse = document.createElement("input");
adresse.setAttribute("type", "text");
adresse.setAttribute("id", "factureAdresse");
clientContainer.appendChild(adresse);


// Prix
const tps = 0.05;
const tvq = 0.09975;
const prixFacture = document.getElementById("facture-paiement");
const titrePrix = document.createElement("h3");
titrePrix.textContent = "Paiement";
prixFacture.appendChild(titrePrix);

const prixContainer = document.createElement("div");
prixContainer.setAttribute("class", "prixContainer");
prixFacture.appendChild(prixContainer);

const tpsContainer = document.createElement("div");
tpsContainer.setAttribute("class", "prixContainer");
prixFacture.appendChild(tpsContainer);

const tvqContainer = document.createElement("div");
tvqContainer.setAttribute("class", "prixContainer");
prixFacture.appendChild(tvqContainer);

const totalContainer = document.createElement("div");
totalContainer.setAttribute("class", "prixContainer");
prixFacture.appendChild(totalContainer);

const prixTitre = document.createElement("p");
prixTitre.textContent = "Prix des pizzas";
prixContainer.appendChild(prixTitre);

const prixPrix = document.createElement("input");
prixPrix.setAttribute("type", "number");
prixPrix.setAttribute("id", "prixPizzas");
prixContainer.appendChild(prixPrix);

const tpsTitre = document.createElement("p");
tpsTitre.textContent = "TPS"
tpsContainer.appendChild(tpsTitre);

const tpsPrix = document.createElement("input");
tpsPrix.setAttribute("type", "number");
tpsPrix.setAttribute("id", "prixTps");
tpsContainer.appendChild(tpsPrix);

const tvqTitre = document.createElement("p");
tvqTitre.textContent = "TVQ";
tvqContainer.appendChild(tvqTitre);

const tvqPrix = document.createElement("input");
tvqPrix.setAttribute("type", "number");
tvqPrix.setAttribute("id", "prixTvq");
tvqContainer.appendChild(tvqPrix);

const totalTitre = document.createElement("p");
totalTitre.textContent = "Prix total";
totalContainer.appendChild(totalTitre);

const totalPrix = document.createElement("input");
totalPrix.setAttribute("type", "number");
totalPrix.setAttribute("id", "prixTotal");
totalContainer.appendChild(totalPrix);


// Footer
const footer = document.getElementById("facture-footer");
const titreFooter = document.createElement("h2");
titreFooter.textContent = "Merci de nous avoir choisi!";
footer.appendChild(titreFooter);