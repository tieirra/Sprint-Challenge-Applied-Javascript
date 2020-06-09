// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function header(headerDataObj) {
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')


    header.appendChild(headerDate)
    header.appendChild(headerTitle)
    header.appendChild(headerTemp)


    header.classList.add('header')
    headerTemp.classList.add('temp')
    headerDate.classList.add('date')



headerDate.textContent = headerDataObj.date 
headerTitle.textContent = headerDataObj.title 
headerTemp.textContent = headerDataObj.tempature  

return header





  
}
const headerContainer = document.querySelector('header-container')

headerContainer.appendChild(header({date : '06/09/2020', title: 'Lambda  Times', tempature: '70'}))