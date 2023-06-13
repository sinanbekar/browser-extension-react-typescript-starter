import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../app/store';
import Content from './Content';

describe('content', () => {
  test('renders content example', () => {
    render(
      <Provider store={store}>
        <Content />
      </Provider>
    );
    expect(screen.getByText('Content Counter')).toBeInTheDocument();
  });
});
