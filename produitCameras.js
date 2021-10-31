
const urlParams = new URLSearchParams(window.location.search) ;
const productId = urlParams.get("id");


fetch (`http://localhost:3000/api/cameras/${productId}`)
    .then( res => res.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles')
        

          articlesContainer.innerHTML += 
          ` 
                <div class="col-10 card">
                    <div class="card-body" >
                        <img class="col" src="${data.imageUrl}" alt="${data.name}">
                        <h2 class"card-title ">${data.name}</h2>
                        <p>${data.description}</p>
                    </div>

                    <form>

                    <label for="option_produit"> <span class="font-weight-bold">Quantité : </span> </label>
                        <input id="quantite-produit" name="option_produit" type="number"  min="1" value="1" "></input>

                    <label for="option_produit"> <span class="font-weight-bold">Choix lentilles :</span> </label>
                        <select name="option_produit" id="option_produit">
                            <option value="35mm 1.4">35mm 1.4</option>
                            <option value="50mm 1.6">50mm 1.6</option>
                        </select>
                    </form>

                    <div class="row">
                            
                            <a class="btn btn-primary col-4 add-cart" id="btn-envoyer"  role="button">Ajouter au panier ${data.price/100 + ' ' + '€'}</a>            
                    </div>
                    
                    
                </div>
          `


          // ------------------------------ AJOUTER PRODUIT AU PANIER -------------------------------

          let quantite_produit = document.querySelector("#quantite-produit");
          console.log(quantite_produit);

          const idForm = document.querySelector('#option_produit');
          console.log(idForm);

          const btnEnvoyerPanier = document.querySelector('#btn-envoyer');
          console.log(btnEnvoyerPanier)

          btnEnvoyerPanier.addEventListener('click', (e)=> {

            const choixForm = idForm.value;
            console.log(choixForm)

            let panierProduit = {
            orderId : data._id ,
            name : data.name,
            prixUnitaire : data.price/100,
            totalPrice : data.price/100 * quantite_produit.value,
            imageUrl : data.imageUrl,
            option : choixForm,
            quantite : quantite_produit.value
            }

          console.log(panierProduit)

          //Création variable qui sera mise dans localstorage avec sa clé et sa valeur
          let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem('produits'));

            // fonction pour une fenêtre popup de confirmation de commande ou annulation
            const popupConfirmation = () => {
                if (window.confirm(` ${data.name} de couleur ${choixForm} à bien été ajouté au panier
                Consulter le panier OK ou poursuivre vos achats ANNULER` )) {
                        window.location.href = 'panier.html';
                    } else {
                        window.location.href = 'index.html';
                    }
                }

          // S'il y a déja des produits dans localstorage
          if (produitEnregistreDansLocalStorage ) {
            produitEnregistreDansLocalStorage.push(panierProduit);
            localStorage.setItem('produits', JSON.stringify(produitEnregistreDansLocalStorage));
            popupConfirmation();
          } 
          // S'il y a rien localstorage
          else {
            produitEnregistreDansLocalStorage = [];
            produitEnregistreDansLocalStorage.push(panierProduit);
            localStorage.setItem('produits', JSON.stringify(produitEnregistreDansLocalStorage));
            console.log(produitEnregistreDansLocalStorage);
            popupConfirmation();
          }
          })

       
    })