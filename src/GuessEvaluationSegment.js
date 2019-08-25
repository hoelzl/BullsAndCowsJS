import React from 'react';

const GuessEvaluationSegment = props => {
  return (
    <div className='ui segment'>
      {props.playerHasWon ? (
        <span>You Won!!! The solution is {props.guess}</span>
      ) : !props.rawGuess || props.rawGuess.length === 0 ? (
        <span>You didn't even make a guess?</span>
      ) : (
        <span>You guessed: {props.guess}</span>
      )}
    </div>
  );
};

export default GuessEvaluationSegment;
