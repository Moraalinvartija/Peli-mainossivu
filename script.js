
  const target = document.getElementById("kolikko");
  function fade() {
    
    target.style.opacity = '0'
    setTimeout(block, 900);
    setTimeout(fadeIn, 1000);
    blockText();
    kolmas.style.display = "block";
    target.remove();
  }
  
  function block() {
    piilo.style.display = 'block';
    
  }
  function fadeIn() {
    piilo.style.opacity = '1';
  }
  function blockText() {
    eka.style.display = "none";
    toka.style.display = "block";
    
  }

  // If you want to remove it from the page after the fadeout
  

  