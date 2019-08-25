import React from 'react';
import HeroBar from './HeroBar';
import InputSegment from './InputSegment';
import InstructionSegment from './InstructionSegment';

/**
 * The main entry point for the application
 */
class App extends React.Component {
  render(props) {
    return (
      <div className='ui container text'>
        <HeroBar icon='bullhorn'>Bulls and Cows</HeroBar>
        <InstructionSegment />
        <InputSegment labelText='Enter your guess.' />
      </div>
    );
  }
}

export default App;
