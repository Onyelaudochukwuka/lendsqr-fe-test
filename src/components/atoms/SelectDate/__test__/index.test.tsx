import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import SelectInput from '..';

test('component is rendered with props', () => {
  const data ={
    placeholder: "string",
    value: '',
    setValue: jest.fn(),
    type: "data",
    clearValue: jest.fn(),
    className: "string",
    label: "string"
  }
  render(<SelectInput {...data} />);
  const selectDate = screen.getByTestId('select-date');
  const dateIcon = screen.getByTestId('date-icon');
  expect(selectDate).toBeInTheDocument();
  expect(dateIcon).toBeInTheDocument();
  expect(selectDate).toHaveAttribute('placeholder', 'string');
  selectDate.focus();
  expect(selectDate).toHaveAttribute('type', 'date');
});
test('icon is not displayed if value is present', () => {
  const data ={
    placeholder: "string",
    value: 'd',
    setValue: jest.fn(),
    type: "data",
    clearValue: jest.fn(),
    className: "string",
    label: "string"
  }
  const { queryByTestId } = render(<SelectInput {...data} />);
  const selectDate = screen.getByTestId('select-date');
  expect(selectDate).toBeInTheDocument();
  expect(queryByTestId('date-icon')).toBeNull();
});
