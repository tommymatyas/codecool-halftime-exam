function leetSpeak(text) {
  const lettersToChange = {
    O: "0",
    I: "1",
    L: "1",
    Z: "2",
    E: "3",
    A: "4",
    S: "5",
    G: "6",
    T: "7",
    B: "8",
  };
  const upperCaseText = text.toUpperCase();
  let changedText = "";

  for (let i = 0; i < upperCaseText.length; i++) {
    const changedLetter = upperCaseText[i];
    changedText += lettersToChange[changedLetter] || changedLetter;
  }

  return changedText;
}

module.exports = leetSpeak;
