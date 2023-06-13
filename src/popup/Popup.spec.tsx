import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../app/store';
import Popup from './Popup';

it('should load and display Popup', async () => {
  render(
    <Provider store={store}>
      <Popup />
    </Provider>
  );

  expect(screen.getByText('Popup Counter')).toBeInTheDocument();
});
