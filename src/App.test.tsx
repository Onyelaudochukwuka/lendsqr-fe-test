import React from 'react';

import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const render = (ui: any, { route = '/logIn' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(ui, { wrapper: BrowserRouter });
};

test('full app rendering/navigating', () => {
  render(<App />);
  expect(screen.getByText(/Login/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/Login/i));

  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  render(<App />, { route: '/dashboard' });

  expect(screen.getByText(/no match/i)).toBeInTheDocument();
});
