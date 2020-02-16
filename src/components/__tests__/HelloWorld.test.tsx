import React from 'react';
import { render } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

test('renders learn react link', () => {
  const { getByText } = render(<HelloWorld />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
