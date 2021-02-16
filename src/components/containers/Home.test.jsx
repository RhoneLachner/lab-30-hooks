import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
// import villagersApiResponse from '../fixtures/villagers.json';
// import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

// const server = setupServer(
//   rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
//     return res(ctx.json(villagersApiResponse));
//   })
// );

describe('Home container', () => {
  // beforeAll(() => server.listen());
  // afterAll(() => server.close());
  afterEach(() => cleanup());
  
  it('fetches and displays a list of villagers', async() => {
    render(
      <Home />
    );

    screen.getByText('loading');

    const listOfVillagers = await screen.findByRole('list');

    return waitFor(() => {
      expect(listOfVillagers).not.toBeEmptyDOMElement();
    });
  });
});
