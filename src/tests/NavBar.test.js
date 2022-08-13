import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Navbar from '../component/Navbar';

it('Navbar Component snapshot test', () => {
  const NavbarRender = TestRenderer
    .create(
      <Provider store={store}>
        <Navbar />
      </Provider>,
    )
    .toJSON();
  expect(NavbarRender).toMatchSnapshot();
});
