// Cartes

const carte = document.getElementsByClassName("pizzas__cards");
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

const checkboxPaiement = document.createElement("input");
checkboxPaiement.setAttribute("type", "checkbox");
paiement.appendChild(checkboxPaiement);













// Informations pour la livraison

// const livraison = document.getElementById("livraison");
// const titreLivraison = document.createElement("h3");
// titreLivraison.textContent = "Informations pour la livraison";
// livraison.appendChild(titreLivraison);

// // Création du label

// const labelNom = document.createElement("label");

// // Texte du label
// labelNom.textContent = "Nom et prénom";

// // Création du input

// const inputNom = document.createElement("input");

// // Type du input = texte
// inputNom.setAttribute("type", "text");

// // Texte gris affiché dans le champ
// inputNom.setAttribute("placeholder", "Nom et prénom");

// // ID unique pour pouvoir récupérer le input plus tard

// inputNom.setAttribute("id", "nomLivraison");

// // On ajoute le label dans le div livraison

// livraison.appendChild(labelNom);

// // On ajoute le input dans le div livraison

// livraison.appendChild(inputNom);

// // On ajoute un saut de ligne






