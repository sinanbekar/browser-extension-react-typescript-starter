import { render, screen } from '@testing-library/react';

import Options from './Options';

it('should load and display Options', async () => {
  render(<Options />);

  expect(
    screen.getByText((content, element) => {
      return element !== null && element.tagName.toLowerCase() === 'h1' && content === 'Options';
    })
  ).toBeInTheDocument();
});
