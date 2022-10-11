import React from 'react';

import { render, screen } from '../../../../testing-utils';

import userEvent from '@testing-library/user-event';

import Sidebar from '..';
window.scrollTo = jest.fn();
test('component is rendered', () => {
  /* eslint-disable-next-line */
  render(<Sidebar className="testing" />);
  expect(screen.getByTestId('sidebar-container')).toHaveClass('testing');
  const dashboard = screen.getByTestId('dashboard');
  expect(dashboard).toBeInTheDocument();
  ['CUSTOMERS', 'BUSINESSES', 'SETTINGS'].forEach(async (text) => {
    expect(
    screen.getByTestId(`sidebar-elements-${text}`)
    ).toBeInTheDocument();
  });
});
