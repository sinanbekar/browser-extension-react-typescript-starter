import React from 'react';
import { render, screen } from '@testing-library/react';

import Popup from './Popup';

it('should load and display Popup', async () => {
  render(<Popup />);

  expect(
    screen.getByText((content, element) => {
      return element !== null && element.tagName.toLowerCase() === 'h1' && content === 'Popup';
    })
  ).toBeInTheDocument();
});
