

let produitEnregistreDansLocalStorage =  JSON.parse(localStorage.getItem('produits'));
console.log('produit dans LS : ' + produitEnregistreDansLocalStorage);

let Commande = JSON.parse(localStorage.getItem('commande'));
console.log('Commande :' + Commande);



if(produitEnregistreDansLocalStorage !== null || Commande !== null){

    let contact = Commande.contact;
    console.log('contact est: ');
    console.log(contact);

    let prenom = contact.firstName;
    let nom = contact.lastName;

    //let confirmationCommande = document.getElementById('confirmation-commande');


    let listeCommande = document.getElementById('liste-commande');
    console.log(listeCommande);

    listeCommande.innerHTML += `
        <h2 class="card-title card-header"> COMMANDE ENREGISTRÉE </h2>
        <p class="card-text ml-4 mt-3"> Bonjour ${prenom} ${nom}, </br>
        Votre commande numéro : ${Commande.orderId} à bien été enregistrée. </p>

        <h3 class="mt-5 text-dark text-center border-top pt-5"> RECAPITULATIF DE LA COMMANDE</h3>
        `;
        

    // RECAPITULATIF COMMANDE

    // --------------------MONTANT TOTAL PRODUITS --------------------------------------------
     
        // Création d'un tableau reprenant tous les prix des articles dans le panier
        let prixTotal = [];
        console.log(prixTotal);

    
        for (let p = 0; p < produitEnregistreDansLocalStorage.length; p++) {
            prixTotal.push((produitEnregistreDansLocalStorage[p].prixUnitaire)*(produitEnregistreDansLocalStorage[p].quantite)); 
        }

        // Calcul de la somme des prix dans le panier
        let total = prixTotal.reduce((acc, curr)=> acc + curr, 0);
        console.log(total);

        // Création code HTML pour Montant total
        let codeMontant_total = `
            <p class="ml-5 text-right mr-5 h5"> <span class="font-weight-bold">Montant total : </span>  <span class="prix-camera">${total} €</span></p>
        `;

        //Insértion le code HTML Montant total
        listeCommande.insertAdjacentHTML("afterend", codeMontant_total);

        // Création HTML du récapitulatif de la commande
        produitEnregistreDansLocalStorage.forEach(elementProduit => {

        let recapitulatifCommande = `
        
        <div class="row card-body" id="recapitulatif" >
            <img class="col-6" src="${elementProduit.imageUrl}" alt="${elementProduit.name}">
                <div class="description">
                    <h3 class="card-title" > ${elementProduit.name}</h3> 
                    <p class="card-text"> <span class="font-weight-bold">Choix lentilles :</span> ${elementProduit.option} </p>
                    <p> <span class="font-weight-bold">Quantité : </span> ${elementProduit.quantite} </p>
                    <p class="card-text"> <span class="font-weight-bold">Prix total : </span> ${elementProduit.prixUnitaire * elementProduit.quantite  + ' ' + '€'} 
                </div>
        </div>
        `
        listeCommande.insertAdjacentHTML("afterend", recapitulatifCommande);
            
        
        });

        // Supprimer tous les éléments enregistrés dans le localstorage
            localStorage.clear()
}
        
        else{
            window.location.href="index.html";
        }
       
        

 

  


   


    
  
