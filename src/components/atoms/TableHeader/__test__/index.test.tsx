import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import TableHeader from '..';

test('component is rendered with props', () => {
    const data = {
        orgNames: ["string", "cc"],
        setFilterQuery: jest.fn()
    }
    render(<TableHeader {...data} />, { route: '/dashboard/users' });
    const tableHeaderContainer = screen.getByTestId('table-header-container');
    const tableHeading = screen.getAllByTestId('table-heading');
    const tableFilter = screen.getAllByTestId('table-filter');
    const tableFilterContainer = screen.getByTestId('table-filter-container');
    expect(tableHeaderContainer).toBeInTheDocument();
    tableHeading.forEach(header => expect(header).toBeInTheDocument());
    tableFilter.forEach(filter => expect(filter).toBeInTheDocument());
    expect(tableFilterContainer).toBeInTheDocument();
});
test('filter menu is rendered on button click', () => {
    const data = {
        orgNames: ["string", "cc"],
        setFilterQuery: jest.fn()
    }
    render(<TableHeader {...data} />, { route: '/dashboard/users' });
    const tableHeaderContainer = screen.getByTestId('table-header-container');
    const tableHeading = screen.getAllByTestId('table-heading');
    const tableFilter = screen.getAllByTestId('table-filter');
    const tableFilterContainer = screen.getByTestId('table-filter-container');
    expect(tableHeaderContainer).toBeInTheDocument();
    tableHeading.forEach(header => expect(header).toBeInTheDocument());
    expect(tableFilterContainer).toBeInTheDocument();
    userEvent.click(tableFilter[0]);
    expect(tableFilterContainer).toHaveClass('TableHeader__filter__active');
    userEvent.click(tableFilter[0]);
    expect(tableFilterContainer).not.toHaveClass('TableHeader__filter__active');
});