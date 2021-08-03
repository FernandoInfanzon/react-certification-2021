import React from 'react';

import { render, screen } from '@testing-library/react';

import App from '../../../components/App';

describe('Mini Challenge 2', () => {
  it('must display the main page title', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Welcome to the Challenge!/i })
    ).toBeInTheDocument();
  });
});
