let produitEnregistreDansLocalStorage =  JSON.parse(localStorage.getItem('produits'));
console.log(produitEnregistreDansLocalStorage);



//let block = document.getElementsByClassName('container-panier');
const displayPanier = document.getElementById("articles-panier");


if (produitEnregistreDansLocalStorage === null) {
    // Afficher le panier est vide
    displayPanier.innerHTML = `
    <div class="panier-vide">
    <p>Le panier est vide</p> 
    </div>
    `;

    console.log('je suis vide');
} 
else {
    // Si panier n'est pas vide afficher les produits
    for (let i=0; i < produitEnregistreDansLocalStorage.length ; i++) {
        let productCamera = produitEnregistreDansLocalStorage[i]
        displayPanier.innerHTML += 
        ` 
                <div class="col-12 col-lg-5 card">
                    

                    <div id="container-recapitulatif" >
                        <img class="col" src="${productCamera.imageUrl}" alt="${productCamera.name}">
                        <p>${productCamera.name}</p> 
                        <p>${productCamera.option} - Quantité 1</p>
                        <p>${productCamera.price + ' ' + '€'} 
                        <button class="btn-supprimer btn btn-danger" data-id="${i}">Supprimer article</button> </p>
                    </div>

                  
                  
                </div>
        `;
      
        
    }
    
}

    // Supprimer un élément du panier     
    let supprimerElement = document.getElementsByClassName('btn-supprimer');
    console.log(supprimerElement);
   
    for (let i=0; i < supprimerElement.length; i++){
       
        supprimerElement[i].addEventListener('click', (event)=> {
        event.preventDefault();
        
        let dataId = event.target.getAttribute('data-id');

        let select = produitEnregistreDansLocalStorage[dataId];
        console.log(select);

        produitEnregistreDansLocalStorage.splice(dataId, 1);
        localStorage.setItem('produits', JSON.stringify(produitEnregistreDansLocalStorage));

        // Rechargement de la page pour afficher le panier sans l'element supprimé
        location.reload();

        })
    }



// ---------------------- CREATION VIDER PANIER & MONTANT TOTAL PRODUITS --------------------------------


// Si le panier est vide ne rien faire 
if (produitEnregistreDansLocalStorage === null) 
    {}

// Si le panier contient au moins un élément créer le bouton Vider Panier
else {

// --------------------MONTANT TOTAL PRODUITS --------------------------------------------

    // Création d'un tableau reprenant tous les prix des articles dans le panier
    let prixTotal = [];
    console.log(prixTotal);

    for (let p = 0; p < produitEnregistreDansLocalStorage.length; p++) {
        prixTotal.push(produitEnregistreDansLocalStorage[p].price); 
    }

    // Calcul de la somme des prix dans le panier
    let total = prixTotal.reduce((acc, curr)=> acc + curr, 0);
    console.log(total);

    // Création code HTML pour Montant total
    let codeMontant_total = `
    <p>Montant total = <span class="prix-camera">${total} €</span></p>
    <a href="commande.html"><button class=" btn btn-primary btn-lg" type="submit">Valider la commande</button></a>
    `;

    //Insértion le code HTML Montant total
    displayPanier.insertAdjacentHTML("afterend", codeMontant_total);



// --------------------------- VIDER PANIER --------------------------------------------

    // Création code HTML pour le bouton Vider le panier entierement
        let codeVider_panier = `
    <button class="vider-panier btn btn-danger"> Vider le panier </button>
    `;
    
    //Insértion le code HTML boutton vider panier
    displayPanier.insertAdjacentHTML("afterend", codeVider_panier);
    

    // Suppression de l'article au moment du click
    btnVider_panier = document.querySelector('.vider-panier');
    console.log(btnVider_panier);

    btnVider_panier.addEventListener ('click', (e) => {

        e.preventDefault();
        localStorage.removeItem('produits');

        location.reload();

        });

}






/*<div class="card-body" >
                      <img class="col" src="${productCamera.imageUrl}" alt="${productCamera.name}">
                      <h2 class"card-title ">${productCamera.name}</h2>
                      <p>${productCamera.description}</p>
                  </div>
                  <div class="row">
                          <a href="/produit.html?id=${productCamera._id}" class="btn btn-primary acheterpanier col-6"  role="button">Acheter ${productCamera.price/100 + ' ' + '€'}</a>
                  </div>*/