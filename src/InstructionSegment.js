import React from 'react';
import { Bull, Cow, Dud } from './Styles';

const InstructionSegment = props => {
  return (
    <div className='ui segment'>
      <p>
        I have thought of a word. Can you guess it? To help you, I'll report for
        each of your guesses:
      </p>
      <ul>
        <li>
          Those letters that are contained in the solution in the same place in
          which they occur in your guess: <Bull>B</Bull>
        </li>
        <li>
          Those letters in your guess that are contained in the solution but in
          another position than in your guess: <Cow>C</Cow>
        </li>
        <li>
          Those letters in your guess that don't appear in the solution:{' '}
          <Dud>D</Dud>.
        </li>
      </ul>
    </div>
  );
};

export default InstructionSegment;
