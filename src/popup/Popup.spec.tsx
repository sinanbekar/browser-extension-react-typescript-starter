import { render, screen } from '@testing-library/react';
import Popup from './Popup';

it('should load and display Popup', async () => {
  render(<Popup />);

  expect(screen.getByText('Popup Counter')).toBeInTheDocument();
});
