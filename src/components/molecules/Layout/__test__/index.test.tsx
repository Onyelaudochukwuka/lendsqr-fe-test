import React from 'react';

import { render, screen } from '../../../../testing-utils';

import userEvent from '@testing-library/user-event';

import Layout from '..';
test('component is rendered', () => {
  render(
    <Layout
      {...{
        className: 'testing',
      }}
    >
      <span>Testing children</span>
      </Layout>
  );
  expect(screen.getByTestId('layout-container')).toHaveClass('testing');
  expect(screen.getByText('Testing children')).toBeInTheDocument();

});
