// Récupération des données formulaire

/*let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let adresse = document.getElementById('adresse');
let ville = document.getElementById('ville');
let codePostale = document.getElementById('codePostale');*/
/*
let NomDansLocaleStorage = localStorage.setItem('name', nom.value);
let PrénomDansLocaleStorage = localStorage.setItem('Prénom', Prénom.value);
let EmailDansLocaleStorage = localStorage.setItem('email', email.value);
let AdresseDansLocaleStorage = localStorage.setItem('adresse', adresse.value);
let VilleDansLocaleStorage = localStorage.setItem('Ville', Ville.value);
let CodePostaleDansLocaleStorage = localStorage.setItem('codePostale', codePostale.value);*/
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

    localStorage.setItem('infoClients', JSON.stringify(formulaire));

    DonnéesEnvoyés = {
        formulaire,
        produitEnregistreDansLocalStorage
    }

    console.log(DonnéesEnvoyés);

    /*
    localStorage.setItem('name', nom.value);
    localStorage.setItem('prenom', prenom.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('adresse', adresse.value);
    localStorage.setItem('ville', ville.value);
    localStorage.setItem('codePostale', codePostale.value);

    let client = {
        nom : localStorage.getItem('name'),
        prenom : localStorage.getItem('prenom'),
        email : localStorage.getItem('email'),
        adresse : localStorage.getItem('adresse'),
        ville : localStorage.getItem('ville'),
        codePostale : localStorage.getItem('codePostale')
    }*/
        

    //console.log(client);

   
})