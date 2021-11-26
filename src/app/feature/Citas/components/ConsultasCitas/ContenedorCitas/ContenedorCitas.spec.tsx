import { Citas } from '../../../interfaces/index';
import ContenedorCitas from './index';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);

const initialState = {};

describe('testing <ContenedorCitas/>', () => {
  const datesTest: Citas[] = [
    {
      id: 1,
      nombrePropietario: 'Andres',
      nombreMascota: 'sol',
      tipoServicio: 'basico',
      tarifa: 10000,
      fechaHora: '2021-12-01T16:00',
      observaciones: 'pelo corto',
    },
  ];
  const store = mockStore(initialState);
  const componentWrapper = mount(
    <Provider store={store}>
      <ContenedorCitas dates={datesTest} />
    </Provider>
  );

  it('should render correctly', () => {
    expect(componentWrapper.find('div').at(0)).toBeTruthy();
  });
  it('should render correctly', () => {
    expect(componentWrapper.find('CardCitas').length).toBe(1);
  });
});
