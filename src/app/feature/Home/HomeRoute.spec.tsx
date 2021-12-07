import { render, wait } from '@testing-library/react';
import { HomeRouter } from './HomeRouter';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';


describe('', () => {
  it('should be found the mainPagCitas ', () => {
    const wrapperComponet = render(
      <MemoryRouter>
       
          <HomeRouter />
        
      </MemoryRouter>,
    );
    expect(wrapperComponet.getByText('Cargando página...')).toBeTruthy();
    expect(wrapperComponet.getByText('Cargando página...').textContent).toBe(
      'Cargando página...'
    );
  });
  it('should be found the mainPagCitas ', async() => {
    const wrapperComponet = render(
      <MemoryRouter>       
          <HomeRouter />        
      </MemoryRouter>,
      {}
    );
    await wait();
    expect(wrapperComponet.getByText('Bienvenido a PetsApp')).toBeTruthy();
    }); 
});
