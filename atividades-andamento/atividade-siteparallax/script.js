let text = document.getElementById('text'); 

window.addEventListener('scroll', () => {
  let value = window.scrollY; 

  text.style.marginTop = value * 2 + 'px'; 
}); 