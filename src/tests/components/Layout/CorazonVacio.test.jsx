import React from 'react';

import { render, screen } from '@testing-library/react';

import { CorazonVacio } from '../../../components/Layout/CorazonVacio';

describe('Heart Empy Icon', () => {
  it('must display heart empty icon', () => {
    render(<CorazonVacio />);
    expect(screen.getByTestId('corazonVacio')).toBeInTheDocument();
  });
});
