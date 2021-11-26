import { Citas } from '../../interfaces/index';
import { GestionCitas } from './index';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);
interface State {
  dates: {
    allDates: Citas[];
  };
}
const initialState: State = {
  dates: {
    allDates: [],
  },
};

let store = mockStore(initialState);

describe('testing GestionCitas', () => {
  let componentWrapper = mount(
    <Provider store={store}>
      <GestionCitas />
    </Provider>
  );

  beforeEach(() => {
    componentWrapper = mount(
      <Provider store={store}>
        <GestionCitas />
      </Provider>
    );
    store = mockStore(initialState);
    jest.clearAllMocks();
  });

  it('se debe encontrar el titulo del primer h2', () => {
    expect(componentWrapper.find('h2').at(0).text()).toContain(
      'Gestiona tus citas'
    );
  });
  it('el componente <FormularioCitas/> debe existir', () => {
    expect(componentWrapper.find('FormularioCitas').exists()).toBe(true);
  });
  it('se debe encontrar el titulo del segundo h2', () => {
    expect(componentWrapper.find('h2').at(1).text()).toContain(
      'Consulta tus citas'
    );
  });
});
