 const displayInput= document.querySelector(".display-input-field")
 const  deleteBtn = document.querySelector("#delete-btn")
 const fasSearch = document.querySelector("#search-icon")
 const inputValue = document.querySelector('.input-value')
 const submit = document.querySelector("#submit-form")
 const infoText = document.querySelector(".info-text")
 const resultContent = document.querySelector(".result-content")
 const inputIconWrapper = document.querySelector(".input-icon-wrapper")
 const searchIcon = document.querySelector("#search-icon")
const searchWrapper = document.getElementById('searchWrapper');
const openSearch = document.getElementById('openSearch');
const closeSearch = document.getElementById('closeSearch');

const fetchArticles = async ()=>{
  const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=&gsrlimit=20&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${inputValue.value}&origin=*`
  const response = await fetch(url)
  const data = await response.json()
  const queries = data.query;
  const pages = queries.pages
  const pagesKeys = Object.keys(pages)
  let  responseContent =[]
   pagesKeys.forEach((key,i) => {
     if( pages[key].extract&&pages[key].thumbnail){
        const title = pages[key].title;
       const extract = pages[key].extract
          responseContent.push( `<a href="https://en.wikipedia.org/?curid=${key}" target="_blank">
            <li class='list'>
             <h2 class='title'>${title}</h2>
             <p class='extract'>${extract}</p>
            </li>
          </a>`)
      }else{
       return;
      }   
   })
     for(let i = 0 ; i< 10;i++){
        resultContent.innerHTML += responseContent[i] 
        resultContent.classList.add('ulfullHeight')
     }
}
 inputValue.addEventListener("keydown", (event)=>{
   if(event.key ==="Enter"){
     fetchArticles()
     infoText.style.display= 'none'
     inputValue.value =''
     event.preventDefault()
 }
 })
 
openSearch.addEventListener('click', () => {
  searchWrapper.classList.add('active');
});

closeSearch.addEventListener('click', () => {
  searchWrapper.classList.remove('active');
  inputValue.value =''
     resultContent.innerHTML = ''
     infoText.style.display ='block'
     resultContent.classList.remove("ulfullHeight")
});



