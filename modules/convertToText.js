import { morseData } from "../data/morse.js";

export const convertToText = (inputText) => {
  // split each char
  const charArray = inputText.trim().split(" ");
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
