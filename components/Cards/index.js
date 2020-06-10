// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//   
//   <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.





function Card(cardDataObj) {
   const card = document.createElement('div')
   const headline = document.createElement('div')
   const author = document.createElement('div')
   const imgContainer = document.createElement('div')
   const img = document.createElement('img')
   const name = document.createElement('span')

   card.appendChild(img)
   card.appendChild(headline)

   card.classList.add(card)
   headline.classList.add(headline)
   author.classList.add(author)
   imgContainer.classList.add(img - container)


   img.src = cardDataObj.authorPhoto
   name.textContent = cardDataObj.authorName



   return card


}

const cardsContainer = document.querySelector(".cards-container");

axios.get('https://lambda-times-backend.herokuapp.com/articles/')

   .then( (response) => {
      console.log(response);
      const articletab = response.data.cardsContainer;

      articletab.forEach((tab) => {
         const cardForArticles = document.createElement('div');

         // <div class="card">
         //   <div class="headline">{Headline of article}</div>
         //   <div class="author">
         //     <div class="img-container">
         //   
         //   <img src={url of authors image} />
         //     </div>
         //     <span>By {author's name}</span>
         //   </div>
         // </div>
         cardForArticles.classList.add('card')

         cardForArticles.textContent = (tab)
         articles.appendChild(cardForArticles)
         console.log(articles)
      })
   })
   .catch(function (error) {

      console.log( error)
   })



