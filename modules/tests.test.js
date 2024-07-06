import { convertToMorse } from "./convertToMorse";
import { convertToText } from "./convertToText";

test("Should handle all alphabet characters", () => {
  expect(convertToMorse("ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(
    ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. "
  );
  expect(
    convertToText(
      ".- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. "
    )
  ).toBe("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
});

test("Should handle numbers, spaces, and simple punctuation", () => {
  expect(convertToMorse("1234567890.,!?     ")).toBe(
    ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-.-.- --..-- -.-.-- ..--.. / / / / / "
  );
  expect(
    convertToText(
      ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-.-.- --..-- -.-.-- ..--.. / / / / / "
    )
  ).toBe("1234567890.,!?     ");
});

test("Should handle upper and lowercase letters", () => {
  expect(convertToMorse("EeEeEe")).toBe(". . . . . . ");
  expect(convertToText(". . . . . . ")).toBe("EEEEEE");
});

test("Should return correct string when converting to Morse", () => {
  expect(convertToMorse("E")).toBe(". ");
  expect(convertToMorse("Hello world")).toBe(
    ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. "
  );
  expect(convertToMorse("The quick brown fox jumps over the lazy dog.")).toBe(
    "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. .-.-.- "
  );
});

test("Should return correct string when converting to English", () => {
  expect(convertToText(".")).toBe("E");
  expect(convertToText(".... . .-.. .-.. --- / .-- --- .-. .-.. -.. ")).toBe(
    "HELLO WORLD"
  );
  expect(
    convertToText(
      "- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --. .-.-.- "
    )
  ).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
});
