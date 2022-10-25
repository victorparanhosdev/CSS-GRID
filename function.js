const menuMobile = document.querySelector('.menu-mobile')

const Cabecalho = document.querySelector('#cabecalho')


let valor = true

menuMobile.addEventListener('click', ()=> {
  Cabecalho.classList.toggle('active')
  
  if(valor){
    window.document.body.style = 'overflow: hidden'

    valor = false
  }else {
    window.document.body.style = 'overflow: inherit'
    valor = true

  }
  
 

})

