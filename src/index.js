const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let tempArr = [];
  let strCorrect = "";
  for (let i = 0; i < expr.length; i = i + 10) {
    tempArr.push(expr.slice(i, i + 10));
  }
  for (j = 0; j < tempArr.length; j++) {
    if (tempArr[j] === "**********") {
      strCorrect += " ";
    } else {
      let strTemp = "";
      for (let k = 0; k < tempArr[j].length; k = k + 2) {
        if (tempArr[j][k] + tempArr[j][k + 1] === "10") {
          strTemp += ".";
        }
        if (tempArr[j][k] + tempArr[j][k + 1] === "11") {
          strTemp += "-";
        }
      }
      for (key in MORSE_TABLE) {
        if (strTemp === key) {
          strCorrect += MORSE_TABLE[key];
        }
      }
    }
  }
  return strCorrect;
}

module.exports = {
  decode,
};
