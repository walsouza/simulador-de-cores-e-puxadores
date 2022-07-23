// Lógica
// 1 - Selecionar elementos que devem ser animados
// 2 - Definir a classe que é adicionada durante a animação
// 3 - Criar função de animação
// 3.1 - Verificar a distância entre a barra de scroll e o topo do site
// 3.2 - Verificar se a distância do 3.1 + Offset é maior do que a distância entre o elemento e o Topo da Página.
// 3.3 - Se verdadeiro adicionar classe de animação, remover se for falso.
// 4 - Ativar a função de animação toda vez que o usuário utilizar o Scroll
// 5 - Otimizar ativação
// Debounce do Lodash
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 0.75);
  target.forEach((element) => {
    console.log('i')
    if(windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

const handleScroll = debounce(animeScroll, 200);

if(target.length) {
  window.addEventListener('scroll', handleScroll);
}



// Get the boxtec
var boxtec = document.getElementById("myboxtec");
var boxtecaram = document.getElementById("myboxtecaram");
var boxtecdobra = document.getElementById("myboxtecdobra");
var boxtecmdf = document.getElementById("myboxtecmdf");
var boxtecartic = document.getElementById("myboxtecartic");

// Get the button that opens the boxtec
var btn = document.getElementById("myBtn");
var btnaram = document.getElementById("myBtnaram");
var btndobra = document.getElementById("myBtndobra");
var btnmdf = document.getElementById("myBtnmdf");
var btnartic = document.getElementById("myBtnartic");

// Get the <span> element that fextcs the boxtec
var span = document.getElementsByClassName("fextc")[0];

// When the user clicks the button, open the boxtec 
btn.onclick = function() {
  boxtec.style.display = "block";
}
btnaram.onclick = function() {
  boxtecaram.style.display = "block";
}
btndobra.onclick = function() {
  boxtecdobra.style.display = "block";
}
btnmdf.onclick = function() {
  boxtecmdf.style.display = "block";
}
btnartic.onclick = function() {
  boxtecartic.style.display = "block";
}

// When the user clicks on <span> (x), fextc the boxtec
span.onclick = function() {
  boxtec.style.display = "none";
}

// When the user clicks anywhere outside of the boxtec, fextc it
window.onclick = function(event) {
  if (event.target == boxtec) {
    boxtec.style.display = "none";
  }
  if (event.target == boxtecaram) {
    boxtecaram.style.display = "none";
  }
  if (event.target == boxtecdobra) {
    boxtecdobra.style.display = "none";
  }
  if (event.target == boxtecmdf) {
    boxtecmdf.style.display = "none";
  }
  if (event.target == boxtecartic) {
    boxtecartic.style.display = "none";
  }
}