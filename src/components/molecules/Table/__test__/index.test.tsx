import React from 'react';

import { render, screen } from '../../../../testing-utils';
import userEvent from '@testing-library/user-event';

import Login from '../../../../pages/LogIn'
window.scrollTo = jest.fn();
test('component is rendered', () => {
    /* eslint-disable-next-line */
    render(<Login/>, { route: '/login' } );
})