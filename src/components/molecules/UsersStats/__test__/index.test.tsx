import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Users } from "../../../../assets";
import UserStats from '..';

test('component is rendered', () => {
    /* eslint-disable-next-line */
    render(<UserStats {...{
        Icon: Users,
        heading: "string",
        count: 4,
    }} />);
    const icon = screen.getByTestId("icon");
    const heading = screen.getByTestId("heading");
    const count = screen.getByTestId("count");
    expect(icon).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(count).toBeInTheDocument();
})