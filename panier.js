// Panier ... a completer




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
                <div class="  mx-5 card">
                    

                    <div class="row card-body" id="container-recapitulatif" >
                        <img class="col-lg-4 col-sm-8"  src="${productCamera.imageUrl}" alt="${productCamera.name}">
                        <div class="col-sm-4 description">
                            <h2 class="card-title ">${productCamera.name}</h2>
                            <p class="card-text"> <span class="font-weight-bold">Choix lentilles :</span>  ${productCamera.option}     </p>
                            <p class="card-text quantite"><span class="font-weight-bold">Quantité :</span> <button class="bouton-moins btn-danger"> - </button>  ${productCamera.quantite} <button class="bouton-plus btn-success"> + </button> </p>
                            <p class="card-text"> <span class="font-weight-bold">Prix Unitaire : </span> ${productCamera.prixUnitaire + ' ' + '€'} </p>
                           
                            
                            <button class="btn-supprimer btn btn-danger" data-id="${i}">Supprimer article</button> 
                        </div>
                        
                    </div>

                  
                  
                </div>
        `;
     
        
    }
}

    
    // Supprimer un élément du panier     
    let supprimerElement = document.getElementsByClassName('btn-supprimer');
    console.log('btn supprimé');
    console.log(supprimerElement);
   
    for (let i=0; i < supprimerElement.length; i++){
       
        supprimerElement[i].addEventListener('click', (event)=> {
        event.preventDefault();
        
        let dataId = event.target.getAttribute('data-id');
        console.log(dataId);

        let select = produitEnregistreDansLocalStorage[i];
        console.log(select);

        produitEnregistreDansLocalStorage.splice(dataId, 1);

        localStorage.setItem('produits', JSON.stringify(produitEnregistreDansLocalStorage));

        // Rechargement de la page pour afficher le panier sans l'element supprimé
        location.reload();

        })
    }

        //---------------------------MODIFIER QUANTITE-------------------------------

        
        // Diminuer une quantité

        let boutonMoins = document.getElementsByClassName('bouton-moins');
        console.log(boutonMoins);

        console.log(produitEnregistreDansLocalStorage);
        let nb = parseInt(produitEnregistreDansLocalStorage[0].quantite);
        let nbr = 1;
        for (let i=0; i < boutonMoins.length; i++){

            boutonMoins[i].addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if(produitEnregistreDansLocalStorage[i].quantite > 1){
                    produitEnregistreDansLocalStorage[i].quantite--;

                    console.log(produitEnregistreDansLocalStorage);

                    localStorage.setItem('produits', JSON.stringify(produitEnregistreDansLocalStorage));

                    // Rechargement de la page pour afficher le panier sans l'element supprimé
                    location.reload();
                }
            })
        };

        // Augmenter une quantité

        let boutonPlus = document.getElementsByClassName('bouton-plus');
        console.log(boutonPlus);

        console.log(produitEnregistreDansLocalStorage);
       
        for (let i=0; i < boutonPlus.length; i++){
            boutonPlus[i].addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            
                produitEnregistreDansLocalStorage[i].quantite++;

                console.log(produitEnregistreDansLocalStorage);

                localStorage.setItem('produits', JSON.stringify(produitEnregistreDansLocalStorage));

                // Rechargement de la page pour afficher le panier sans l'element supprimé
                location.reload();        
            })
        };

   








// ---------------------- CREATION VIDER PANIER & MONTANT TOTAL PRODUITS --------------------------------

/* -----------------------------------------------------------------------------------console.log(produitEnregistreDansLocalStorage.length);
// Si le panier est vide ne rien faire 
if (produitEnregistreDansLocalStorage.length > 0) 
    {}

// Si le panier contient au moins un élément créer le bouton Vider Panier
else {



// --------------------------- VIDER PANIER --------------------------------------------

    // Création code HTML pour le bouton Vider le panier entierement
        let codeVider_panier = `
    <button class="vider-panier btn btn-danger text-right"> Vider le panier </button>
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

    }------------------------------------------- -----------------------------------------------------------------------------------*/

// --------------------MONTANT TOTAL PRODUITS --------------------------------------------
    // Prix total d'un seul produit

   
    // Création d'un tableau reprenant tous les prix des articles dans le panier
    let prixTotal = [];
    console.log(prixTotal);

  
    for (let p = 0; p < produitEnregistreDansLocalStorage.length; p++) {
        prixTotal.push((produitEnregistreDansLocalStorage[p].prixUnitaire)*(produitEnregistreDansLocalStorage[p].quantite)); 
    }

    // Calcul de la somme des prix dans le panier
    let total = prixTotal.reduce((acc, curr)=> acc + curr, 0);
    console.log(total);

    if(total === 0)
    {
         // Afficher le panier est vide
        displayPanier.innerHTML = `
        <div class="panier-vide container-fluid text-center">
            <p class=" h1  mt-5">Le panier est vide :(</p> 
            <a href="index.html"><button class="btn-secondary"> Revenir aux articles</button> </a>
        </div>
        `;
    }
    else{

    // Création code HTML pour Montant total
    let codeMontant_total = `
        <p class="ml-5 text-right mr-5 h5"> <span class="font-weight-bold">Montant total : </span>  <span class="prix-camera">${total} €</span></p>
        <div>
            <a href="FormulaireCommande.html" class="mx-4" ><button class=" btn btn-primary btn-lg " type="submit">Valider la commande</button></a>
        </div>
        <button class="vider-panier btn btn-danger text-right"> Vider le panier </button>
    `;

    //Insértion le code HTML Montant total
    displayPanier.insertAdjacentHTML("afterend", codeMontant_total);

   

      // Suppression de l'article au moment du click
      btnVider_panier = document.querySelector('.vider-panier');
      console.log(btnVider_panier);
  
      btnVider_panier.addEventListener ('click', (e) => {
  
          e.preventDefault();
          localStorage.removeItem('produits');
  
          location.reload();
  
          });

    }





