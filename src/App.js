import React from 'react';
import HeroBar from './HeroBar';
import InputSegment from './InputSegment';
import InstructionSegment from './InstructionSegment';
import GuessEvaluationSegment from './GuessEvaluationSegment';
import processGuess from './processGuess';
import getRandomWord from './dict';

/**
 * The main entry point for the application
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guesses: [],
      solution: props.solution || getRandomWord(),
      playerHasWon: false
    };
  }

  addGuess = str => {
    this.setState({
      guesses: [str].concat(this.state.guesses),
      playerHasWon: str === this.state.solution
    });
  };

  render(props) {
    return (
      <div className='ui container text'>
        <HeroBar icon='bullhorn'>Bulls and Cows</HeroBar>
        <InstructionSegment />
        <InputSegment
          labelText='Enter your guess.'
          onSubmit={str => this.addGuess(str)}
        />
        {this.state.guesses.map((guess, index) => (
          <GuessEvaluationSegment
            key={index}
            rawGuess={guess}
            guess={processGuess(guess, this.state.solution)}
            playerHasWon={guess === this.state.solution}
          />
        ))}
      </div>
    );
  }
}

export default App;
