import React from 'react';

import { render, screen } from '@testing-library/react';

import { CorazonLleno } from '../../../components/Layout/CorazonLleno';

describe('Heart Fill Icon ', () => {
  it('must display heart fill icon', () => {
    render(<CorazonLleno />);
    expect(screen.getByTestId('corazonLleno')).toBeInTheDocument();
  });
});
