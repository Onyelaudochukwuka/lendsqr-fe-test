import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import SelectInput from '..';

test('component is rendered with props', () => {
  const data ={
    selectedData: ["Ths", "that"],
    setSelectedData: jest.fn(),
    data: ["Ths", "that"],
    label: "stuff",
    placeholder: "Things",
    className: "string",
  }
  render(<SelectInput {...data} />);
  const inputContainer = screen.getByTestId('input-container');
  const icon = screen.getByTestId('icon');
  userEvent.click(inputContainer);
  expect(icon).toHaveClass('SelectInput__content__icon__active');
});
