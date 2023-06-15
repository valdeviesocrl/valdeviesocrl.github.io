let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

let popup = document.getElementById("popup");
let okbutton = document.getElementById("okbtn");

const Hirebtn = document.getElementById("hire_me");
if (Hirebtn) {
  Hirebtn.addEventListener("click", () => {
    popup.classList.add("open-popup");
  });
}
if (okbutton) {
  okbutton.addEventListener("click", () => {
    popup.classList.remove("open-popup");
  });
}

//CONTACT PAGE
// start console
let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];

let emailError = document.querySelector("#email_error");
let passwordError = document.querySelector("#password_error");
// end of console

// paganahin ang email
