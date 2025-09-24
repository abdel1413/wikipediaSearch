 const displayInput= document.querySelector(".display-input-field")
 const  inputDelete = document.querySelector(".display-input-field")
 const fasSearch = document.querySelector(".fas")
 const inputValue = document.querySelector('.input-value')

function showInputField(){
  fasSearch.style.display = 'none'    
  const deleteBtn = document.querySelector('.delete')
  displayInput.style.display='block'
  deleteBtn.addEventListener("click", ()=>{
    
      inputDelete.style.display='none'
      fasSearch.style.display = 'block'
  })
}



// since we used type module as script.js attribute, 
//we need to call the function on window so the onclick event
//in html knows the function really exist else it will throu 
// a function not difined error;
window.showInputField = showInputField
