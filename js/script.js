// Swiper 
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  const menu = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  
  menu.onclick = () => {
      menu.classList.toggle('fa-regular'); 
      menu.classList.toggle('fa-xmark');  
      navbar.classList.toggle('active');  
  }
  
  window.onscroll = () => {
      menu.classList.remove('fa-regular'); 
      menu.classList.remove('fa-xmark');  
      navbar.classList.remove('active');  
  }

  