import { render, screen, act } from '@testing-library/react';
import App from './App';

test('can quickly display small counted numbers', () => {
  render(<App />);
  screen.getAllByText(201);
});

test('can quickly display large counted numbers', async () => {
  render(<App from1={0} to1={1_000_000} from2={2_000_000} to2={3_000_000} />);
  await act(async () => {
    for (let i = 0; i <= 10_000; i++) {
      screen.getByText(i * 100);
      screen.getByText(2_000_000 + i * 100);
    }
  });
});
