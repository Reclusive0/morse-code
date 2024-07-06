import { morseData } from "./data.js";

const txtToMorBtn = document.getElementById("txt-to-mor-btn");
const morToTxtBtn = document.getElementById("mor-to-txt-btn");

// on click, get inputText
// check if first character is valid letter or valid punctuation
// throw error if not valid
// if letter, convert english to morse
// if morse punctuation, convert morse to english

function convertToText() {
  const inputText = document.getElementById("code-text").value;
  const outputText = document.getElementById("eng-text");
  console.log(`inputText`);
  console.log(inputText);

  // split each char
  const charArray = inputText.split(" ");
  console.log(`charArray`);
  console.log(charArray);

  // swap each morse with matching char, "/" to " "
  let swappedString = charArray.reduce((string, char) => {
    let thisChar = "";
    for (const [key, value] of Object.entries(morseData)) {
      if (char === value) {
        thisChar = key;
      } else if (char === "/") {
        thisChar = " ";
      }
    }
    if (thisChar === "") {
      thisChar = "#";
    }
    string += thisChar;

    return string;
  }, "");

  swappedString = swappedString.slice(0, swappedString.length - 1);
  console.log(`swappedString`);
  console.log(swappedString);

  outputText.value = swappedString;
}

function convertToMorse() {
  const inputText = document.getElementById("eng-text").value;
  const outputText = document.getElementById("code-text");
  console.log(`inputText`);
  console.log(inputText);

  // to upper case
  const upperText = inputText.toUpperCase();
  console.log(`upperText`);
  console.log(upperText);

  // split each char
  const charArray = upperText.split("");
  console.log(`charArray`);
  console.log(charArray);

  // swap each char with matching morse, " " with "/"
  const swappedString = charArray.reduce((string, char) => {
    let thisChar = "";
    for (const [key, value] of Object.entries(morseData)) {
      if (char === key) {
        thisChar = value;
      } else if (char === " ") {
        thisChar = "/";
      }
    }
    if (thisChar === "") {
      thisChar = "#";
    }
    string += `${thisChar} `;
    return string;
  }, "");
  console.log(`swappedString`);
  console.log(swappedString);

  // add to output textarea
  outputText.value = swappedString;
}

txtToMorBtn.addEventListener("click", () => {
  convertToMorse();
});

morToTxtBtn.addEventListener("click", () => {
  convertToText();
});
