document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      
      },
    });
  });

  function changeText(ids) {
   
  
        ids.innerHTML = "Ooops!";
        
  setTimeout(function() {
        ids.innerHTML = "Home";
  
  }, 1000);
}

     

  