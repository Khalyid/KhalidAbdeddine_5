fetch ("http://localhost:3000/api/cameras")
    .then( res => res.json())
    .then(data => {
        const articlesContainer = document.getElementById('articles');
      for (let article of data) {
          articlesContainer.innerHTML += 
          `<figure>
          <img src="${article.imageUrl}" alt="${article.name}">
          <figcaption>
              <h2>${article.name}</h2>
              <p>${article.description}</p>
          </figcaption>
          </figure>`;
      }
    });


/*main() 
 async function main(){
    const articles = await getArticles()
    for (const article of articles) {
        displayArticles(article)
        console.log(displayArticles(article))
    }
}

function getArticles() {
    return fetch ("http://localhost:3000/api/cameras")
    .then(function(httpCameras) {
        if (httpCameras.ok) {
            return httpCameras.json();
        }
    })
    .then (function(articlesCameras) {
        return articles;
    })

    .catch (function(error) {
        alert(error)
    })

}

function displayArticles(article){
    
    document.getElementById("articles").innerHTML += 
    `<figure>
    <img src="${article.imageUrl}" alt="${article.name}">
    <figcaption>
        <h2>${article.name}</h2>
        <p>${article.description}</p>
    </figcaption>
    </figure>`

} */