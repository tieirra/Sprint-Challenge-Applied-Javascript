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





   function card (cardDataObj) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author= document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')
    
    card.appendChild(img)
    card.appendChild(headline)

   card.classList.add(card)
   headline.classList.add(headline)
   author.classList.add(author)
   imgContainer.classList.add(img-container)

  
img.src = cardDataObj.authorPhoto
name.textContent=cardDataObj.authorName
  


return card
  

}



const card = document.que
 const data = axios.get(`https://lambda-times-backend.herokuapp.com/articles/`);


 data.then (function(response){
    console.log(response);

const articleCard = response.data;

articleCard.forEach(authorPhoto =>{
    const card = cardMaker({img , headline})
    everPoint.appendChild(card)
   })
 })

 .catch (function (error ){
    debugger
    console.log('something went wrong, hopefully the error tells us what', error)
  })



