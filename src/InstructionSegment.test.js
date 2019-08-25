import React from 'react';
import { shallow, mount } from 'enzyme';

import InstructionSegment from './InstructionSegment';

function expectText(wrapper, text) {
  expect(wrapper.children()).toHaveText(text);
}

describe('<InstructionSegment />', () => {
  it('renders without crashing', () => {
    shallow(<InstructionSegment />);
  });

  it('is a `div` with classes `ui` and `segment`', () => {
    const wrapper = shallow(<InstructionSegment />);
    expect(wrapper).toMatchSelector('div.ui.segment');
  });
});
