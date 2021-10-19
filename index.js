//Récupération des données API pour les intégrer à la page


fetch ("http://localhost:3000/api/cameras")
    .then( res => res.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
        for (let article of data) {
          articlesContainer.innerHTML += 
          ` 
                <div class="col-12 col-lg-5 card">
                    <div class="card-body" >
                        <img class="col" src="${article.imageUrl}" alt="${article.name}">
                        <h2 class"card-title ">${article.name}</h2>
                        <p>${article.description}</p>
                    </div>
                    <div class="row">
                            <a href="/produit.html?id=${article._id}" class="btn btn-primary acheterpanier col-6"  role="button">Voir l'article ${article.price/100 + ' ' + '€'}</a>
                            
                    </div>
                    
                </div>
          `;
        }
        
        /*console.log(data);
    
        const cart = document.querySelectorAll('.add-cart');
            console.log(cart);
        for (let i = 0; i < cart.length; i++ ) {
            cart[i].addEventListener('click' , () =>  {
                cartsNumbers(data[i]);
            })
        }
        
        function loadPanier () {
            let camerasNumbers = localStorage.getItem('cartNumbers');
            document.querySelector('.panier span').textContent = camerasNumbers;
        }

        function cartsNumbers(data) {
            console.log('le produit est', data)
            let camerasNumbers = localStorage.getItem('cartNumbers');

        camerasNumbers = parseInt(camerasNumbers);

        if (camerasNumbers) {
            localStorage.setItem('cartNumbers', camerasNumbers + 1);
            document.querySelector('.panier span').textContent = camerasNumbers + 1;
        }
        else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.panier span').textContent = 1;
        }

        //setItems(data);
    }

    function setItems(data) {
        console.log(data)
        let camerasItems =  localStorage.getItem('camerasDansPanier');
        camerasItems = JSON.parse(camerasItems);

        camerasItems = localStorage.setItem('camerasDansPanier', JSON.stringify(data));

        
        if (localStorage.length == 0) {
            console.log('rien dans le panier')

            let data = []
            newData.push(data);

            let dataPaniers = JSON.stringify(newDataPaniers)

            localStorage.setItem('camerasDansPanier', JSON.stringify(data) );
        }

    
        
     
    }

    loadPanier ()*/





    });



