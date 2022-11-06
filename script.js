if(document.readyState == 'loading') { 
  document.addEventListener('DOMContentLoaded', ready) 
} else { 
  ready();
}

function ready() { 
  let checkBox = document.getElementById('bar-cb');
  
  checkBox.addEventListener('click', mobileNavigationBar);

  window.addEventListener('resize', windowResizeHandler);
  
  
}

function mobileNavigationBar() { 
  let navUl = document.getElementsByTagName('ul')[0];
  let article = document.getElementById('article');
  let barsCols = document.getElementsByClassName('bars-cols')[0];

  navUl.classList.toggle('toggle');
  article.classList.toggle('pushed');
 
}
  

function windowResizeHandler() { 
  
  document.getElementsByTagName('ul')[0].classList.remove('toggle');
  document.getElementById('article').classList.remove('pushed');
}