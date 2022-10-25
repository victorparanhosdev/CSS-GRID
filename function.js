const menuMobile = document.querySelector('.menu-mobile')

const Cabecalho = document.querySelector('#cabecalho')

menuMobile.addEventListener('click', ()=> {
  Cabecalho.classList.toggle('active')

})

