import React from 'react';
import { shallow, mount } from 'enzyme';
import { Bull, Cow, Dud } from './Styles';

import GuessEvaluationSegment from './GuessEvaluationSegment';

describe('<GuessEvaluationSegment />', () => {
  it('renders without crashing', () => {
    shallow(<GuessEvaluationSegment />);
  });

  it('is a `div` with classes `ui` and `segment`', () => {
    const wrapper = shallow(<GuessEvaluationSegment />);
    expect(wrapper).toMatchSelector('div.ui.segment');
  });

  it('displays the correct text when no rawGuess is provided', () => {
    const wrapper = shallow(<GuessEvaluationSegment />);
    expect(wrapper.children()).toHaveText("You didn't even make a guess?");
  });

  it('contains guess when rawGuess and guess are provided', () => {
    const guess = (
      <span>
        <Bull key='0'></Bull>
      </span>
    );
    const wrapper = shallow(
      <GuessEvaluationSegment rawGuess='foo' guess={guess} />
    );
    expect(wrapper).toContainReact(guess);
  });
});
