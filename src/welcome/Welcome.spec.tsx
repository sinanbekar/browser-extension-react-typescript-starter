import React from 'react';
import { render, screen } from '@testing-library/react';

import Welcome from './Welcome';

it('should load and display Welcome', async () => {
  render(<Welcome />);

  expect(
    screen.getByText((content, element) => {
      return element !== null && element.tagName.toLowerCase() === 'h1' && content === 'Welcome';
    })
  ).toBeInTheDocument();
});
