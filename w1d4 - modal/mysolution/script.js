"use strict";


const modalBTN = document.querySelectorAll(".modalText");
const modalContainer = document.querySelector("#modal_container");
const closeBTN = document.querySelector("#closebutton");

//make forEach function that 

modalBTN.forEach(showModal => {
  showModal.addEventListener('click', function (openModal) {
    modalContainer.style.display = "block";
  })
  console.log("Show modal");
});


// When the user clicks on <span> (x), close the modal
closeBTN.addEventListener("click", function () {
  modalContainer.style.display = "none";
});


// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function (event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
});
