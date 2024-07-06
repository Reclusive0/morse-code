import { morseData } from "../data/morse.js";

export const engToCode = (array) => {
  const swappedString = array.reduce((string, char) => {
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
export default engToCode;
