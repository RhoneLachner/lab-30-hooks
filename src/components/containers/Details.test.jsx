import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import Details from './Details';
act(() => {
  describe('Details component', 
    () => {
      afterEach(() => cleanup());
      it('renders Details', () => {
        const { asFragment } = render(<Router><Details/></Router>);
        expect(asFragment()).toMatchSnapshot;
      });
    });
});
