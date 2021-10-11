let produitEnregistreDansLocalStorage =  JSON.parse(localStorage.getItem('produits'));
console.log( produitEnregistreDansLocalStorage);

let displayPanier = document.getElementById("articles-panier");
console.log(displayPanier);

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
    for (const productCamera of produitEnregistreDansLocalStorage) {
        displayPanier.innerHTML += 
        ` 
              <div class="col-12 col-lg-5 card">
                  <div class="card-body" >
                      <img class="col" src="${productCamera.imageUrl}" alt="${productCamera.name}">
                      <h2 class"card-title ">${productCamera.name}</h2>
                      <p>${productCamera.description}</p>
                  </div>
                  <div class="row">
                          <a href="/produit.html?id=${productCamera._id}" class="btn btn-primary acheterpanier col-6"  role="button">Acheter ${productCamera.price/100 + ' ' + '€'}</a>
                  </div>

                  
              </div>
        `;
      
        
    }
    console.log('je suis pas vide');
}
