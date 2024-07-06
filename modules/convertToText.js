import { morseData } from "../data/morse.js";

export const convertToText = (inputText) => {
  // handles edge case of space at end of morse input
  if (inputText.slice(-1) === " ") {
    inputText = inputText.slice(0, inputText.length - 1);
  }
  // split each char
  const charArray = inputText.split(" ");
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
  return swappedString;
};

export default convertToText;
