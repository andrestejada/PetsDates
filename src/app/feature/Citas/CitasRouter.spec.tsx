import { render, wait } from '@testing-library/react';
import { CitasRouter } from './CitasRouter';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);

const initialState = {
  dates: {
    allDates: [],
  },
};
const store = mockStore(initialState);
describe('', () => {
  it('should be found the mainPagCitas ', () => {
    const wrapperComponet = render(
      <MemoryRouter>
        <Provider store={store}>
          <CitasRouter />
        </Provider>
      </MemoryRouter>,
      {}
    );
    expect(wrapperComponet.getByText('Cargando página...')).toBeTruthy();
    expect(wrapperComponet.getByText('Cargando página...').textContent).toBe(
      'Cargando página...'
    );
  });

  it('should be found the lazyfallback ', async () => {
    const wrapperComponet = render(
      <MemoryRouter>
        <Provider store={store}>
          <CitasRouter />
        </Provider>
      </MemoryRouter>,
      {}
    );

    await wait();
    expect(wrapperComponet.getByText('Gestiona tus citas')).toBeTruthy();
    expect(wrapperComponet.getByText('Gestiona tus citas').textContent).toBe(
      'Gestiona tus citas'
    );
  });
});
