import wordBank from "./wordle-bank.txt";
import words from "./Words.json";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {

  const response = await fetch(wordBank);
  const text = await response.text();

  const wordSet = new Set(
    text
      .split("\n")
      .map(word => word.trim().toLowerCase())
      .filter(word => word.length > 0)
  );

  const randomEntry = words[Math.floor(Math.random() * words.length)];
  const todaysWord = randomEntry.word;
  const todaysDescription = randomEntry.description;

  return { wordSet, todaysWord, todaysDescription };
};