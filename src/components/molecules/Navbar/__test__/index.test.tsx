import React from 'react';

import { render, screen } from '../../../../testing-utils';

import userEvent from '@testing-library/user-event';

import Navbar from '..';
window.scrollTo = jest.fn();
test('component is rendered', () => {
  const data = {
    className: 'testing',
    showSideBar: false,
    setShowSideBar: jest.fn()
  }
  render(
    <Navbar {...data} />,
  );
  expect(screen.getByTestId('navbar-container')).toHaveClass('testing');
  const docsLink = screen.getByTestId('docs-link');
  const userImage = screen.getByTestId('user-image');
  expect(docsLink).toBeInTheDocument();
  expect(userImage).toBeInTheDocument();

});
