import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import Login from '../../../../pages/LogIn'

test('component is renders', () => {
    /* eslint-disable-next-line */
    render(<Login/>, { route: '/login' } );
})