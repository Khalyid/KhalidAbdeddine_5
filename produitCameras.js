
const urlParams = new URLSearchParams(window.location.search) ;
const productId = urlParams.get("id");


fetch (`http://localhost:3000/api/cameras/${productId}`)
    .then( res => res.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles')

          articlesContainer.innerHTML += 
          ` 
                <div class="col card">
                    <div class="card-body" >
                        <img class="col" src="${data.imageUrl}" alt="${data.name}">
                        <h2 class"card-title ">${data.name}</h2>
                        <p>${data.description}</p>
                    </div>

                    <div class="row">
                            <a href="/produit.html?${data._id}" class="btn btn-primary col-6"  role="button">Acheter ${data.price/100 + ' ' + '€'}</a>
                            <a class="btn btn-primary col-4 add-cart" id="btn-envoyer"  role="button">Ajouter au panier</a>            
                    </div>
                    <form>
                    <label for="option_produit"> Choisir l'option</label>
                        <select name="option_produit" id="option_produit">
                            <option value="Gris">Gris</option>
                            <option value="Noir">Noir</option>
                        </select>
                    </form>

                    
                    
                </div>
          `

          const idForm = document.querySelector('#option_produit');
          console.log(idForm);

 

          const btnEnvoyerPanier = document.querySelector('#btn-envoyer');
          console.log(btnEnvoyerPanier)



          btnEnvoyerPanier.addEventListener('click', (e)=> {

            const choixForm = idForm.value;
            console.log(choixForm)

            let panierProduit = {
            name : data.name,
            price : data.price/100,
            imageUrl : data.imageUrl,
            option : choixForm
          }

          console.log(panierProduit)

          //Création variable qui sera mise dans localstorage avec sa clé et sa valeur
          let produitEnregistreDansLocalStorage = JSON.parse(localStorage.getItem('produits'));

            // fonction pour une fenêtre popup de confirmation de commande ou annulation
            const popupConfirmation = () => {
                if (window.confirm(` ${data.name} de couleur ${choixForm} à bien été ajouté au panier
                Consulter le panier OK ou revenir à l'accueil ANNULER` )) {
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