import React, { FC, ReactNode } from 'react';

import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../utils/redux/store';

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </Provider>
);
const render = (
  ui: any,
  { route = '/logIn' } = {},
  wrapper = Wrapper,
) => {
  window.history.pushState({}, 'Test page', route);
  return rtlRender(ui, { wrapper });
};

export * from '@testing-library/react';

// override render method and export history
export { render };
