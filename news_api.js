
let newsItems = document.querySelector("#newsItems")
newsItems.innerHTML = ""

function populateNews(newStory) {

  
  //populate with Loop
  newStory.articles.forEach(function(article){


    let newsStory = 
    `<h3> ${article.author}</h3>
    <h3> ${article.title} </h3>
    <p> ${article.description} </p>
    <p> ${article.url} </p>
    <img src='${article.urlToImage}'/>
    <p> ${article.publishedAt} </p>`
    
    newsItems.innerHTML += newsStory
})
    
  }

populateNews(news) 




