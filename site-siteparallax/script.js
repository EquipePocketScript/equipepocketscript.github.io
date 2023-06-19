let text = document.getElementById('text'); 
let imagemsubindo = document.getElementById('imagemsubindo');

window.addEventListener('scroll', () => {
  let value = window.scrollY; 

  text.style.marginTop = value * 2 + 'px'; 
  imagemsubindo.style.top = value * -1.5 + 'px';
}); 