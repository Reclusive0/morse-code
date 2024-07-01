import { morseData } from "./data.js";

const latToMorBtn = document.getElementById("lat-to-mor-btn");
const morToLatBtn = document.getElementById("mor-to-lat-btn");

// on click, get inputText
// check if first character is valid letter or valid punctuation
// throw error if not valid
// if letter, convert english to morse
// if morse punctuation, convert morse to english

function convertToLatin() {
  const inputText = document.getElementById("input-text").value;
  const outputText = document.getElementById("output-text");
  console.log(`inputText`);
  console.log(inputText);

  // split each char
  const charArray = inputText.split(" ");
  console.log(`charArray`);
  console.log(charArray);

  // swap each morse with matching char, "/" to " "
  const swappedString = charArray.reduce((string, char) => {
    let thisChar = "";
    for (const [key, value] of Object.entries(morseData)) {
      if (char === value) {
        thisChar = key;
      } else if (char === "/") {
        thisChar = " ";
      }
    }
    string += thisChar;
    return string;
  }, "");
  console.log(`swappedString`);
  console.log(swappedString);

  outputText.value = swappedString;
}

function convertToMorse() {
  const inputText = document.getElementById("input-text").value;
  const outputText = document.getElementById("output-text");
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
    string += `${thisChar} `;
    return string;
  }, "");
  console.log(`swappedString`);
  console.log(swappedString);

  // add to output textarea
  outputText.value = swappedString;
}

latToMorBtn.addEventListener("click", () => {
  convertToMorse();
});

morToLatBtn.addEventListener("click", () => {
  convertToLatin();
});
