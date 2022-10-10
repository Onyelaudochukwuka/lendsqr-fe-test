import React from 'react';

import { render, screen } from '../../../../testing-utils';

import userEvent from '@testing-library/user-event';

import Navbar from '..';
window.scrollTo = jest.fn();
test('component is rendered', () => {
  render(
    <Navbar
      {...{
        className: 'testing',
        showSidebar: false,
        setShowSidebar: jest.fn(),
      }}
    />
  );
  expect(screen.getByTestId('navbar-container')).toHaveClass('testing');
  const docsLink = screen.getByTestId('docs-link');
  const userImage = screen.getByTestId('user-image');
  expect(docsLink).toBeInTheDocument();
  expect(userImage).toBeInTheDocument();

});
