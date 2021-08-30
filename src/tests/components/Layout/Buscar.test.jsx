import React from 'react';

import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Buscar from '../../../components/Layout/Buscar';

const onSearch = () => {
  console.log('Hello World');
};

describe('Favorite Videos', () => {
  it('must display the Search option in button', () => {
    render(
      <BrowserRouter>
        <Buscar onSearch={onSearch} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
});
