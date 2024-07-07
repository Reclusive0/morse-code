import convertToMorse from "./modules/convertToMorse.js";
import convertToText from "./modules/convertToText.js";

const txtToMorBtn = document.getElementById("txt-to-mor-btn");
const morToTxtBtn = document.getElementById("mor-to-txt-btn");
const engText = document.getElementById("eng-text");
const codeText = document.getElementById("code-text");

morToTxtBtn.addEventListener("click", () => {
  const newText = convertToText(codeText.value);
  engText.value = newText;
});

txtToMorBtn.addEventListener("click", () => {
  const newCode = convertToMorse(engText.value);
  codeText.value = newCode;
});
