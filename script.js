import codeToEng from "./modules/codeToEng.js";
import engToCode from "./modules/engToCode.js";

const txtToMorBtn = document.getElementById("txt-to-mor-btn");
const morToTxtBtn = document.getElementById("mor-to-txt-btn");
const engText = document.getElementById("eng-text");
const codeText = document.getElementById("code-text");

function convertToMorse() {
  const inputText = engText.value;
  // to upper case
  const upperText = inputText.toUpperCase();
  // split each char
  const charArray = upperText.split("");
  // swap each char with matching morse, " " with "/"
  const swappedString = engToCode(charArray);
  // add to output textarea
  codeText.value = swappedString;
}

function convertToText() {
  let inputText = codeText.value;
  // handles edge case of space at end of morse inputß
  if (inputText.slice(-1) === " ") {
    inputText = inputText.slice(0, inputText.length - 1);
  }
  // split each char
  const charArray = inputText.split(" ");
  // swap each morse with matching char, "/" to " "
  const swappedString = codeToEng(charArray);
  engText.value = swappedString;
}

morToTxtBtn.addEventListener("click", () => {
  convertToText();
});

txtToMorBtn.addEventListener("click", () => {
  convertToMorse();
});
