document.addEventListener('DOMContentLoaded', function () {

    const btnHamburger = document.querySelector(".hamburger");
    const headerNavUl = document.querySelector(".header_nav_ul");
    const hamburgerClose = document.querySelector(".hamburgerClose");

    btnHamburger.addEventListener("click", function () {
        headerNavUl.classList.add("show");
        hamburgerClose.classList.add("on");
        btnHamburger.classList.add("off");
    });

    hamburgerClose.addEventListener("click", () => {
        headerNavUl.classList.remove("show");
        hamburgerClose.classList.remove("on");
        btnHamburger.classList.remove("off");
    })

});
