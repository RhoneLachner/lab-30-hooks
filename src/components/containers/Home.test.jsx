import { BrowserRouter as Router } from 'react-router-dom';

import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import Home from './Home';
act(() => {
  describe('Home component', 
    () => {
      afterEach(() => cleanup());
      it('renders Home', () => {
        const { asFragment } = render(<Router><Home/></Router>);
        expect(asFragment()).toMatchSnapshot;
      });
    });
});
