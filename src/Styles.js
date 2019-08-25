import React from 'react';

export const Bull = props => (
  <span style={{ color: 'Green', fontWeight: 'bold' }}>{props.children}</span>
);

export const Cow = props => (
  <span style={{ color: 'Navy', fontWeight: 'bold' }}>{props.children}</span>
);

export const Dud = props => (
  <span style={{ color: 'Silver', fontWeight: 'bold' }}>{props.children}</span>
);
