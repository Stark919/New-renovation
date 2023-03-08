let button = document.querySelector("#button");
let modal = document.querySelector("#modal");
let close = document.querySelector("#close");

button.addEventListener("click", openModal);

close.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("modal_active");
  console.log("Open");
  window.closingTimeout = setTimeout(closeModal, 4000);
}

function closeModal() {
  modal.classList.remove("modal_active");
  console.log("Close");
  clearTimeout(window.closingTimeout);
}
