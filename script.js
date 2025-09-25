 const displayInput= document.querySelector(".display-input-field")
 const  deleteBtn = document.querySelector("#delete-btn")
 const fasSearch = document.querySelector("#search-icon")
 const inputValue = document.querySelector('.input-value')
 const submit = document.querySelector("#submit-form")
 const infoText = document.querySelector(".info-text")
 const resultContent = document.querySelector(".result-content")


// // Show input when search icon is clicked
function showInputField() {
  console.log(displayInput)
  fasSearch.classList.add('hide');
  setTimeout(() => {
    fasSearch.classList.add('hidden')
    displayInput.classList.remove("hidden")
    requestAnimationFrame(()=>{
      displayInput.classList.add("show")
    })
  }, 300);
}

// // Hide input when delete button is clicked
deleteBtn.addEventListener('click', () => {
     inputValue.value =''
     displayInput.classList.remove('show')
     setTimeout(() => {
       displayInput.classList.add("hidden")
       fasSearch.classList.remove('hidden')
       requestAnimationFrame(()=>{
        fasSearch.classList.remove('hide')
       })
     }, 300);
});


const fetchArticles = async ()=>{
  console.log('val',inputValue.value)
  let min = 0;
  let max = 10
const randomRange = (Math.random() + 1 ) ;
console.log('random', randomRange)
  const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${inputValue.value}&origin=*`

  const response = await fetch(url)
  const data = await response.json()
  const queries = data.query;
  const pages = queries.pages
  const pagesKeys = Object.keys(pages)
  let  responseContent =``
   pagesKeys.forEach(key => {
     if( pages[key].extract&&pages[key].thumbnail){
      const title = pages[key].title;
     const extract = pages[key].extract
       responseContent += `<a href="https://en.wikipedia.org/?curid=${key}" target="_blank">
         <li class='list'>
          <h1 class='title'>${title}</h1>
          <p class='extract'>${extract}</p>
         </li>
       </a>`

      }else{
       return;
      }   
   })
 resultContent.innerHTML = responseContent
}

 inputValue.addEventListener("keydown", (event)=>{
   if(event.key ==="Enter"){
     fetchArticles()
     inputValue.value =''
     event.preventDefault()
 }
 })
 window.showInputField = showInputField


