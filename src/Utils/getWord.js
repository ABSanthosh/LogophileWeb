import wordsList from "../Assets/Json/words.json";

export function getWord(startingLetter, oldList) {
  let randomIndex = Math.floor(
    Math.random() * wordsList[startingLetter].length
  );
  let word = wordsList[startingLetter][randomIndex];

  // let wordList = oldList.map((item) => item.word);
  while (
    oldList.includes(word.word) &&
    !word.word.contains(" ") &&
    !word.word.contains("-")
  ) {
    randomIndex = Math.floor(Math.random() * wordsList[startingLetter].length);
    word = wordsList[startingLetter][randomIndex];
  }

  return wordsList[startingLetter][randomIndex];
}
