import React from 'react';

import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import { FavoritesMenu } from '../../../components/Layout/FavoritesMenu';

describe('Favorite Videos', () => {
  it('must display the Favorite option in the menu', () => {
    render(
      <BrowserRouter>
        <FavoritesMenu />
      </BrowserRouter>
    );
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });
});
