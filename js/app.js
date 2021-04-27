// Vars
const contentCookies = document.querySelector(".cookie-container");
const acceptCookies = document.querySelector(".cookies-btn")

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
   
    // Cookies Ad
    if(!localStorage.getItem('Cookies')){
      const CookiesInterval = setInterval(CookiesAd, 3000);
    }

});

/** Functions **/
// Cookies Ad
function CookiesAd(){
    contentCookies.style.bottom = "0%";
    contentCookies.style.transition = "300ms";

    CloseCookies();
}

// Close AD
function CloseCookies(){
  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('Cookies', 'El usuario aceptó las políticas de privacidad');
    contentCookies.remove();
  });
}


