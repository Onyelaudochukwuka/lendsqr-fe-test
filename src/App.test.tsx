import React from 'react';

import userEvent from '@testing-library/user-event';

import App from './App';
import { render, screen } from './testing-utils';

test('full app rendering/navigating', () => {
  render(<App />);
  expect(screen.getByText('Login')).toBeInTheDocument();
  userEvent.click(screen.getByText('Login'));

  expect(screen.getByText('Please enter a password with an Uppercase, Lowercase, Number and a special character')).toBeInTheDocument();
  expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  userEvent.type(screen.getByPlaceholderText('Email'), 'udochuks');
  expect(screen.getByPlaceholderText('Email')).toHaveValue('udochuks');
  userEvent.type(screen.getByPlaceholderText('Password'), 'udochuks');
  expect(screen.getByPlaceholderText('Password')).toHaveValue('udochuks');

  userEvent.click(screen.getByText('Login'));

  expect(screen.getByText('Please enter a password with an Uppercase, Lowercase, Number and a special character')).toBeInTheDocument();
  expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();

  // clear inputs
  userEvent.clear(screen.getByPlaceholderText('Email'));
  userEvent.clear(screen.getByPlaceholderText('Password'));

  userEvent.type(screen.getByPlaceholderText('Email'), 'udochuks@gmail.com');
  expect(screen.getByPlaceholderText('Email')).toHaveValue('udochuks@gmail.com');
  userEvent.type(screen.getByPlaceholderText('Password'), 'HDHD33hdhd3_');
  expect(screen.getByPlaceholderText('Password')).toHaveValue('HDHD33hdhd3_');
  userEvent.click(screen.getByText('Login'));
  expect(screen.getByTestId('user-heading')).toBeInTheDocument();
});

test('landing on the home page', () => {
  render(<App />, { route: '/dashboard' });
  expect(screen.getByText('This Page Is Currently Unavailable')).toBeInTheDocument();
});
test('landing on a bad page', () => {
  render(<App />, { route: '/dashboard/users' });
  expect(screen.getByTestId('user-heading')).toBeInTheDocument();
});
