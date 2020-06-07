// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
      
//  <div class="tab">javascript</div>
//  <div class="tab">bootstrap</div>
//  <div class="tab">technology</div>
//  <div class="tab">jquery</div>
//  <div class="tab">node.js</div>

 function getTabs (topic) {

 const thePromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')

thePromise.then(function (response) {
    console.log('the response from the API, organized for us by axios', response);
   


const tabsNow = response.data.message;

thePromise.forEach(function(topicTab){
 const tabForAll = document.createElement('div');

 tabForAll.textContent = javascript;
 tabsNow .appendChild('div')

 return tabsForAll

 });

 const topics = document.querySelector('.topics');
 topics.appendChild(tabsNow);


 })

  .catch(function (error) {
    console.log(error);
  });

 }
