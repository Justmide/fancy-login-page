

const fadeOut = () => {
    const loaderWrapper = document.querySelector('.loader');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("login-link");
 
    const loader = document.querySelector(".loader");

    loginLink.addEventListener("click", (e) => {
        e.preventDefault(); 
        loader.classList.remove("fade");

        setTimeout(() => {
            const currentPage = window.location.pathname;
            if (currentPage.includes('login.html')) {
                window.location.href = './index.html';
            } else {
                window.location.href = './login.html';
            }    }, 2000); 
    });
});



const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);


