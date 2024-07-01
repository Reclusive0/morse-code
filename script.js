import { morseData } from "./data.js";

const convertBtn = document.getElementById("convert-btn");

function convertMorse() {
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

convertBtn.addEventListener("click", (e) => {
  convertMorse();
});
