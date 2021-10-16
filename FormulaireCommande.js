// Récupération des données formulaire

let produitEnregistreDansLocalStorage =  JSON.parse(localStorage.getItem('produits'));

let btn_envoyer_formulaire = document.querySelector('.btn-envoyer-formulaire');
console.log(btn_envoyer_formulaire);
    
        btn_envoyer_formulaire.addEventListener('click', (e) => {
            e.preventDefault();
              
            formulaire = {
                nom : document.getElementById('nom').value,
                prenom : document.getElementById('prenom').value,
                email : document.getElementById('email').value,
                adresse : document.getElementById('adresse').value,
                ville : document.getElementById('ville').value,
                codePostale : document.getElementById('codePostale').value
            }
            console.log(formulaire);
            
            let prenom = formulaire.prenom;
            let nom = formulaire.nom;
            let email = formulaire.email;
            let adresse = formulaire.adresse;
            let ville = formulaire.ville;
            let codePostale = formulaire.codePostale;
            
            let regexLettre = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/ ;
            let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/ ;
            let regexAdresse = /^[-'a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/;
            let regexCodePorstale = /[0-9]{5}/ ;
            
            function prenomValid() {
                // Si prenom valide contenant que des lettres
                if(regexLettre.test(prenom)){
                    console.log('prénom valide');
                    return true ;
                }
                // Si prenom invalide
                else{
                    alert('prenom non valide');
                    return false ;
                };
                }

            function  nomValid() {
            // Si nom valide contenant que des lettres
            if(regexLettre.test(nom)){
              
                console.log('nom valide');
                return true ;
                
            }
            // Si Nom invalide
            else{
                alert('Nom non valide');
                return false ;
            };
            }
            
            function emailValid() {
             // Si email valide 
             if(regexEmail.test(email)){
                
                console.log('email valide');
                return true;
            }
            // Si email invalide
            else{
                alert('email non valide');
                return false ;
            };
            }

            function adresseValid() {
            // Si adresse valide 
            if(regexAdresse.test(adresse)){
          
                console.log('adresse valide');
                return true;
            }
            // Si adresse invalide
            else{
                alert('Adresse non valide');
                return false ;
            };
            }

            function villeValid(){
            // Si Ville valide contenant que des lettres
            if(regexLettre.test(ville)){
                
                console.log('ville valide');
                return true;
            }
            // Si Ville invalide
            else{
                alert('Ville non valide');
                return false ;
            };
            }

            function codePostaleValid(){
            if(regexCodePorstale.test(codePostale)){
               
                console.log('codepostale valide');
                return true;
            }
            // Si code postale invalide
            else{
                alert('Code postale non valide');
                return false ;
            };
            }
                
            
            if(prenomValid() && nomValid() && emailValid() && adresseValid() && villeValid() && codePostaleValid()  ){
                localStorage.setItem('infoClients', JSON.stringify(formulaire));
               
            }
            // Si prénom invalide
            else{
                alert('Formulaire non valide');
            };
        
           

            //localStorage.setItem('infoClients', JSON.stringify(formulaire));*/
        
            /*DonnéesEnvoyés = {
                formulaire,
                produitEnregistreDansLocalStorage
            }
        
            console.log(DonnéesEnvoyés);*/
        });
        

    

        /*let form = document.querySelector('.needs-validation');
form.addEventListener('submit', (e) => {
    if(form.checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add('was-validated');
    }*/




