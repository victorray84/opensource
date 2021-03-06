import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kerberos Open Source text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Kerberos Open Source/i);
  expect(linkElement).toBeInTheDocument();
});
