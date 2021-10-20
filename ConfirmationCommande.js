let Commande = JSON.parse(localStorage.getItem('commande'));
console.log(Commande);

let commandeProduits = JSON.parse(localStorage.getItem('produits'));

let contact = Commande.contact;
console.log('contact est: ');
console.log(contact);

let prenom = contact.firstName;
let nom = contact.lastName;


let listeCommande = document.getElementById('liste-commande');
console.log(listeCommande);

listeCommande.innerHTML += `
    <h2 class="card-title card-header"> COMMANDE ENREGISTRE </h2>
    <p class="card-text ml-4 mt-3"> Bonjour ${prenom} ${nom}, </br>
     Votre commande numéro : ${Commande.orderId} à bien été enregistrée. </p>

    <h3 class="mt-5 text-dark text-center border-top pt-5"> RECAPITULATIF DE LA COMMANDE</h3>
    `;
    

// RECAPITULATIF COMMANDE

/*let recapitulatifCommande = document.getElementsByClassName("recapitulatif");
console.log('ici');
console.log(recapitulatifCommande);*/

commandeProduits.forEach(elementProduit => {

    let recapitulatifCommande = `
    
    <div class="row card-body" id="recapitulatif" >
        <img class="col-6" src="${elementProduit.imageUrl}" alt="${elementProduit.name}">
            <div class="description">
                <h3 class="card-title" > ${elementProduit.name}</h3> 
                <p class="card-text"> <span class="font-weight-bold">Choix lentilles :</span> ${elementProduit.option} </p>
                <p> <span class="font-weight-bold">Quantité : </span> ${elementProduit.quantite} </p>
                <p class="card-text"> <span class="font-weight-bold">Prix total : </span> ${elementProduit.totalPrice + ' ' + '€'} 
            </div>
    </div>
    `
    listeCommande.insertAdjacentHTML("afterend", recapitulatifCommande);
    
});



