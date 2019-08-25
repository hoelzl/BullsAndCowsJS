import React from 'react';
import { Bull, Cow, Dud } from './Styles';

export function processCharAtIndex(char, index, solution) {
  if (index < solution.length && char === solution[index]) {
    return <Bull key={index}>{char}</Bull>;
  }
  if (solution.includes(char)) {
    return <Cow key={index}>{char}</Cow>;
  }
  return <Dud key={index}>{char}</Dud>;
}

export function processGuess(guess, solution) {
  let processedLetters = [];
  for (let index = 0; index < guess.length; index++) {
    processedLetters.push(processCharAtIndex(guess[index], index, solution));
  }
  return <span>{processedLetters}</span>;
}

export default processGuess;
