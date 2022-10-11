import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import TableRow from '..';

test('component is rendered with props', () => {
    const Data = {
        orgName: "string",
        userName: "string",
        email: "string",
        phoneNumber: "string",
        createdAt: "string",
        status: "pending",
        id: 1,
        currentUserMenu: "string",
        setCurrentUserMenu: jest.fn(),
        blackListed: ["a","b"],
        setBlacklisted: jest.fn(),
    }
    render(<TableRow {...Data} />, { route: '/dashboard/users' });
    const orgName = screen.getByTestId('org-name');
    const userName = screen.getByTestId('user-name');
    const email = screen.getByTestId('email');
    const phoneNumber = screen.getByTestId('phone-number');
    const createdAt = screen.getByTestId('created-at');
    const status = screen.getByTestId('status');
    expect(orgName).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(createdAt).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(status).toHaveTextContent('pending');
})

test('menu comes up', () => {
    const Data = {
        orgName: "string",
        userName: "string",
        email: "string",
        phoneNumber: "string",
        createdAt: "string",
        status: "pending",
        id: 1,
        currentUserMenu: "string",
        setCurrentUserMenu: jest.fn(),
        blackListed: ["a", "b"],
        setBlacklisted: jest.fn(),
    }
    render(<TableRow {...Data} />, { route: '/dashboard/users' });
    const menu = screen.getByTestId('menu');
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toHaveClass('TableRow__dropdown');
    userEvent.click(menu);
    expect(dropdown).toHaveClass('TableRow__dropdown__active');
    userEvent.click(menu);
    expect(dropdown).not.toHaveClass('TableRow__dropdown__active');
})