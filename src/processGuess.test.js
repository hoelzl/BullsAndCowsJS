import React from 'react';
import { processGuess, processCharAtIndex } from './processGuess';
import { Bull, Cow, Dud } from './Styles';

describe('processCharAtIndex', () => {
  it('returns a bull for correct index and value', () => {
    const unit = processCharAtIndex('b', 1, 'abcd');

    expect(unit).toStrictEqual(<Bull key='1'>b</Bull>);
  });

  it('returns a bull when char occurs but index is too low', () => {
    const unit = processCharAtIndex('b', 0, 'abcd');

    expect(unit).toStrictEqual(<Cow key='0'>b</Cow>);
  });

  it('returns a bull when char occurs but index is too high', () => {
    const unit = processCharAtIndex('b', 2, 'abcd');

    expect(unit).toStrictEqual(<Cow key='2'>b</Cow>);
  });

  it('returns a bull when char occurs but index is out of range', () => {
    const unit = processCharAtIndex('b', 10, 'abcd');

    expect(unit).toStrictEqual(<Cow key='10'>b</Cow>);
  });

  it('returns a dud when char does not occur in the solution', () => {
    const unit = processCharAtIndex('x', 1, 'abcd');

    expect(unit).toStrictEqual(<Dud key='1'>x</Dud>);
  });
});

describe('processGuess', () => {
  it('returns correct classifications for bulls, cows and duds', () => {
    const unit = processGuess('aadxay', 'abcd');

    expect(unit).toStrictEqual(
      <span>
        <Bull key='0'>a</Bull>
        <Cow key='1'>a</Cow>
        <Cow key='2'>d</Cow>
        <Dud key='3'>x</Dud>
        <Cow key='4'>a</Cow>
        <Dud key='5'>y</Dud>
      </span>
    );
  });
});
