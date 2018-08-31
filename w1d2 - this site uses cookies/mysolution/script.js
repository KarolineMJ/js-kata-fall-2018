"use strict"

//let boxAnimation = document.querySelector(".cookieBox");

window.addEventListener("load", function findBTN() {
    const cookieBox = document.querySelector(".cookieBox");
    const acceptBTN = document.querySelector(".acceptBTN");
    cookieBox.classList.add("slideIn");

    removeCookies();
    function removeCookies() {
        acceptBTN.addEventListener("click", function removeThis() {
            cookieBox.classList.remove("slideIn");
        });
    }

}
);


//let acceptance = localStorage.setItem();


//localStorage.setItem("accepted", "VeryAccepted")  - accepted
//if(localStorage )
