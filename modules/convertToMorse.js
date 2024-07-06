import { morseData } from "../data/morse.js";

export const convertToMorse = (inputText) => {
  // to upper case
  const upperText = inputText.toUpperCase();
  // split each char
  const charArray = upperText.split("");
  // swap each char with matching morse, " " with "/"
  // add to output textarea

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

  return swappedString;
};
export default convertToMorse;
