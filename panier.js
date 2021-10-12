let produitEnregistreDansLocalStorage =  JSON.parse(localStorage.getItem('produits'));
console.log(produitEnregistreDansLocalStorage);




let displayPanier = document.getElementById("articles-panier");


if (produitEnregistreDansLocalStorage === null) {
    // Afficher le panier est vide
    displayPanier.innerHTML = `
    <div class="panier-vide">
    <p>Le panier est vide</p> 
    </div>
    `;

    console.log('je suis vide');
} else {
    // Si panier n'est pas vide afficher les produits
    for (let i=0; i < produitEnregistreDansLocalStorage.length ; i++) {
        let productCamera = produitEnregistreDansLocalStorage[i]
        displayPanier.innerHTML += 
        ` 
                <div class="col-12 col-lg-5 card">
                    

                    <div id="container-recapitulatif" >
                        <img class="col" src="${productCamera.imageUrl}" alt="${productCamera.name}">
                        <p>${productCamera.name} ${productCamera.option} - Quantité 1</p>
                        <p>${productCamera.price + ' ' + '€'} - <button class="btn-supprimer" data-id="${i}">Supprimer article</button> </p>
                    </div>

                    <div class="container-montant-total">
                        <p>Montant total = 190 €</p>
                        <p>Vider le panier</p>
                    </div>
                  
                </div>
        `;
      
        
    }
    
}

    
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

        location.reload();

        })

}



/*<div class="card-body" >
                      <img class="col" src="${productCamera.imageUrl}" alt="${productCamera.name}">
                      <h2 class"card-title ">${productCamera.name}</h2>
                      <p>${productCamera.description}</p>
                  </div>
                  <div class="row">
                          <a href="/produit.html?id=${productCamera._id}" class="btn btn-primary acheterpanier col-6"  role="button">Acheter ${productCamera.price/100 + ' ' + '€'}</a>
                  </div>*/