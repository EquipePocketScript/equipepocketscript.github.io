let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let starwars = document.getElementById('starwars');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

let fundo = document.getElementById('fundo');

window.addEventListener("scroll", function() {
    var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    if(window.innerHeight + window.pageYOffset >= scrollHeight) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  });
  
  window.addEventListener("wheel", function() {
    document.body.style.overflowY = "scroll";
  });   

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    supermariofundotransparente.style.top = value * -1.5 + 'px';
    supermariofundotransparente.style.left = value * 1.5 + 'px';
    hill5.style.right = value * 1.5 + 'px';
    hill4.style.right = value * -1.5 + 'px';
    starwars.style.top = value * 1 + 'px'; 

    fundo.style.top = value * 1 + 'px';
});