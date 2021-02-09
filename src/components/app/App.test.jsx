import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import App from './App';
act(() => {
  describe('App component', () => {
    afterEach(() => cleanup());
    it('renders App', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
