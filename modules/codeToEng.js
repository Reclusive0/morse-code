import { morseData } from "../data/morse.js";

export const codeToEng = (array) => {
  let swappedString = array.reduce((string, char) => {
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

export default codeToEng;
