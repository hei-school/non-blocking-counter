import { render, screen } from '@testing-library/react';
import { test } from 'jest';
import App from './App';

test('can quickly display small counted numbers', () => {
  render(<App />);
  screen.getAllByText(201);
});

const aRandomNumber = (min, max) => min + Math.floor(Math.random() * max)

test('can quickly display large counted numbers', () => {
  render(<App from1={0} to1={1_000_000} from2={2_000_000} to2={3_000_000} />);

  screen.getByText(aRandomNumber(0,100));
  screen.getByText('2000000');
  for (let i = 100; i <= 1000000; i += 100) {
    screen.getByText(i);
  }
  for (let i = 2000100; i <= 3000000; i += 100) {
    screen.getByText(i);
  }
});
