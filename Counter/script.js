"use strict";

const resetbtn = document.getElementById("btnReset");

let mainfield = document.getElementById("main");

const textfield = document.getElementById("CounterText");

let counter = 0;

let styleCount = 0;

mainfield.addEventListener("click", changeCount);
window.addEventListener("keypress", keyrender);
resetbtn.addEventListener("click", resetrender);

function changeCount() {
  counter++;
  styleCount++;
  rendercount();
  backgroundStyle();
}

function rendercount() {
  textfield.textContent = counter;
}

function backgroundStyle() {
  mainfield.style.setProperty("--count", styleCount);

  if (counter % 100 === 0) {
    styleCount = 0;
  }
}

function resetrender() {
  counter = 0;
  styleCount = 0;
  backgroundStyle();
  rendercount();
}

function keyrender(e) {
  if (["Enter", " "].includes(e.key)) {
    changeCount();
  }
  return;
}
