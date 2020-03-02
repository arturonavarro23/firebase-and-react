import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

it('renders without crashing', async () => {
  const { container } = render(<App />);
  expect(container.innerHTML).not.toBe(undefined);
  expect(container.innerHTML).not.toBe(null);
});
