import { render, screen } from '@testing-library/react';
import App from './App';

test('can quickly display small counted numbers', () => {
  render(<App />);
  screen.getAllByText(201);
});


function* generateNumbers(start, end, batchSize) {
  for (let i = start; i <= end; i++) {
    yield i;
    if (i % batchSize === 0) {
      yield new Promise(resolve => setTimeout(resolve, 200));
    }
  }
}

test('can quickly display large counted numbers', async () => {
  render(<App from1={0} to1={1_000_000} from2={2_000_000} to2={3_000_000} />);

  await screen.findByText('100');

  for await (const elt of generateNumbers(101, 1000, 100)) {
    if (typeof elt === 'text') {
      expect(screen.getByText(elt)).toBeInTheDocument();
    }
  }

  await screen.findByText('2000100');

  for await (const elt of generateNumbers(2000101, 3000000, 100)) {
    if (typeof elt === 'text') {
      expect(screen.getByText(elt)).toBeInTheDocument();
    }
  }
});
