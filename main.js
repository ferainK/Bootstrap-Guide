const emailInputEl = document.querySelector('#exampleInputEmail1')
const loginHtmlEl = document.querySelector('#exampleModal2')

loginHtmlEl.addEventListener('shown.bs.modal', function(){
    emailInputEl.focus()
})