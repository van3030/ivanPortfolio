const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});


document.querySelector('.hamburger-svg').addEventListener('click', () => {
  toggleMenu();
});

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
  document.querySelector('.nightmode-mobile').style.display = 'block';
};



document.querySelector('.profile-modal').addEventListener('click', () => {

  document.querySelector('.modal-overlay').style.display = 'block';

});


document.querySelector('.close-btn-modal').addEventListener('click', () => {
   document.querySelector('.modal-overlay').style.display = 'none';
});

  let mobileMenu = document.querySelector('.mobile-menu');
  let menuBtn = document.querySelector('.hamburger-svg');


function toggleMenuTwo() {

  let isOpen = mobileMenu.classList.contains('active');

  if(!isOpen) {
    mobileMenu.classList.remove('active');
    mobileMenu.style.pointerEvents = "none";
    mobileMenu.style.opacity = "0";
  
  }else{
    mobileMenu.classList.add('active');
    mobileMenu.style.pointerEvents = 'auto';
    mobileMenu.style.opacity = "0";
  }

 
  menuBtn.addEventListener('click', toggleMenuTwo);

 
};


 document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      
    });
  });






