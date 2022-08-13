import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Popup from '../component/popup';

it('popup Component snapshot test', () => {
  const PopupRender = TestRenderer
    .create(
      <Provider store={store}>
        <Popup />
      </Provider>,
    )
    .toJSON();
  expect(PopupRender).toMatchSnapshot();
});
