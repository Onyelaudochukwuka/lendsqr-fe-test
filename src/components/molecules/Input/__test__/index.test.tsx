import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from '..';

test('component is rendered', () => {
    /* eslint-disable-next-line */
    render(<Input
        {...{
            placeholder: "Password",
            value: "password",
            setValue: jest.fn(),
            clearValue: jest.fn(),
            type: "text",
            error: true,
            errorMessage: "error message",
        }}
    />);
    const inputContainer = screen.getByTestId('input-container');
    expect(inputContainer).toBeInTheDocument();
    const input = screen.getByTestId('input');
    const errorMessage = screen.getByTestId('error-message');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(errorMessage).toBeInTheDocument();
})