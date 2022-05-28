import React from 'react';
import { render, screen } from '@testing-library/react';

import Content from './Content';

it('should load and display Content', async () => {
  render(<Content />);

  expect(
    screen.getByText((content, element) => {
      return element !== null && element.tagName.toLowerCase() === 'h1' && content === 'Content';
    })
  ).toBeInTheDocument();
});
