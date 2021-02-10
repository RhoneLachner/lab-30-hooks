import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import villagersApiResponse from '../fixtures/villagers.json';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';


const server = setupServer(
  rest.get('https://ac-vill.herokuapp.com/villagers', (req, res, ctx) => {
    return res(ctx.json(villagersApiResponse));
  })
);

describe('Home container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loading screen then a list of villagers', async() => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>);

    screen.getByText('loading');

    const ul = await screen.findByTestId('villagers');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
