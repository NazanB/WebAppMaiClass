"use strict";

const btn = document.querySelector("button");
const body = document.querySelector("body");
//zustand
let toggleState = document.getElementById("button");
toggleState = true;
btn.addEventListener("click", () => {
  if (toggleState === true) {
    //Dark mode
    btn.classList.add("buttonDarkClass");
    document.title = "Good Night";
    body.classList.add("bodyDarkClass");
  } else {
    //light mode
    btn.classList.remove("buttonDarkClass");
    document.title = "Good Morning";
    body.classList.remove("bodyDarkClass");
  }
  //ändere den zustand
  if (toggleState === true) {
    toggleState = false;
  } else {
    toggleState = true;
  }
});
