import { render, screen } from '@testing-library/react';
import App from './App';

test('can quickly display small counted numbers', () => {
  render(<App />);
  screen.getAllByText(201);
});

const aRandomNumber = (min, max) => min + Math.floor(Math.random() * max)

test('can quickly display large counted numbers', () => {
  render(<App from1={0} to1={1_000_000} from2={2_000_000} to2={3_000_000} />);

  screen.getByText(aRandomNumber(0,100));
  screen.getByText(2_000_000 + aRandomNumber(0,100));

  screen.getByText(100 + aRandomNumber(0,100));
  screen.getByText(2_000_100 + aRandomNumber(0,100));
});