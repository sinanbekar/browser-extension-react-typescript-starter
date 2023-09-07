import { render, screen } from '@testing-library/react';
import Content from './Content';

describe('content', () => {
  test('renders content example', () => {
    render(<Content />);

    expect(screen.getByText('Content Counter')).toBeInTheDocument();
  });
});
