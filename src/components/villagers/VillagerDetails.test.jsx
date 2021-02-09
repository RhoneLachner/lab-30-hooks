import React from 'react';
import { render, cleanup } from '@testing-library/react';
import VillagerDetails from './VillagerDetails';

describe('VillagerDetails component', () => {
  afterEach(() => cleanup());
  it('renders VillagerDetails', () => {
    const { asFragment } = render(<VillagerDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
