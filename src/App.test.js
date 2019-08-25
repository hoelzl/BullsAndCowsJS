import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import HeroBar from './HeroBar';
import InstructionSegment from './InstructionSegment';
import InputSegment from './InputSegment';
import GuessEvaluationSegment from './GuessEvaluationSegment';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains HeroBar', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainMatchingElement('HeroBar');
  });

  it('contains InstructionSegment', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainMatchingElement('InstructionSegment');
  });

  it('contains InputSegment', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toContainMatchingElement('InputSegment');
  });

  it('initially contains no GuessEvaluationSegment', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).not.toContainMatchingElement('GuessEvaluationSegment');
  });

  it('contains GuessEvaluationSegment after adding number', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addGuess('foo');
    expect(wrapper).toContainMatchingElement('GuessEvaluationSegment');
  });
});

describe('<App /> (different testing strategy)', () => {
  it('is a div', () => {
    expect(shallow(<App />).type()).toBe('div');
  });

  it('has classes `ui`, `container` and `text`.', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveClassName('ui container text');
  });

  it('has three children', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.children().length).toBe(3);
  });

  it('has HeroBar as first child', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.childAt(0).type()).toBe(HeroBar);
  });

  it('has InstructionSegment as second child', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.childAt(1).type()).toBe(InstructionSegment);
  });

  it('has InputSegment as third child', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.childAt(2).type()).toBe(InputSegment);
  });

  it('has four children after adding a guess', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addGuess('foo');

    expect(wrapper.children().length).toBe(4);
  });

  it('has GuessEvaluationSegment as fourth child', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addGuess('foo');

    expect(wrapper.childAt(3).type()).toBe(GuessEvaluationSegment);
  });
});

describe('<App /> (snapshot test)', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
