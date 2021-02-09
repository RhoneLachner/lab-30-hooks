import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Villager from './Villager';

describe('Villager component', () => {
  afterEach(() => cleanup());
  it('renders Villager', () => {
    const { asFragment } = render(<Villager />);
    expect(asFragment()).toMatchSnapshot();
  });
});
