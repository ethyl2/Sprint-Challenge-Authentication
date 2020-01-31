import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders dad jokes text in header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/dad jokes/i);
  expect(headerElement).toBeInTheDocument();
});
