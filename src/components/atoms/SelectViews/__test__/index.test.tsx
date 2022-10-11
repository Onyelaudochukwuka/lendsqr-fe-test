import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import SelectViews from '..';

test('component is rendered with props', () => {
  const data = {
    select: 1,
    setSelect: jest.fn(),
    setCurrentIndex: jest.fn(),
  };
  render(<SelectViews {...data} />, { route: '/dashboard/users' });
  const selectViewsContainer = screen.getByTestId('select-views-container');
  const selectViews = screen.getByTestId('select-views');
  const selectViewsIcon = screen.getByTestId('select-views-icon');
  expect(selectViewsContainer).toBeInTheDocument();
  expect(selectViews).toBeInTheDocument();
  userEvent.click(selectViews);
  expect(selectViews).toHaveClass('SelectViews__container__active');
  expect(selectViewsIcon).toHaveClass('SelectViews__container__icon__active');
  expect(selectViewsContainer).toHaveClass('SelectViews__select__active');


  
});
