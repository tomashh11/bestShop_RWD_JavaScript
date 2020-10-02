document.addEventListener('DOMContentLoaded', function () {

    const hamburger = document.querySelector(".header-hamburger");
    const headerNavUl = document.querySelector(".header-nav-ul");
    const hamburgerClose = document.querySelector(".header-hamburger-close");

    hamburger.addEventListener("click", () => {
        headerNavUl.classList.add("show");
        hamburgerClose.classList.add("on");
        hamburger.classList.add("off");
    });

    hamburgerClose.addEventListener("click", () => {
        headerNavUl.classList.remove("show");
        hamburgerClose.classList.remove("on");
        hamburger.classList.remove("off");
    })

});
