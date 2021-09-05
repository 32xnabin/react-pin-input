import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders validate pin', () => {
  render(<App />);
  const linkElement = screen.getByText(/VALIDATE PIN/i);
  expect(linkElement).toBeInTheDocument();
});
