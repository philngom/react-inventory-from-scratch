import { render, screen } from '@testing-library/react';
import AuthPage from './AuthPage';

test('renders learn react link', async () => {
  render(<AuthPage />);
  const linkElement = await screen.findByText(/sign in/i);
  expect(linkElement).toBeInTheDocument();
});
