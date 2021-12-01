import CardCitas from './index';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { deleteDateByID } from '../../../../../core/redux/acciones/Dates/DatesActions';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);

const initialState = {};
const store = mockStore(initialState);
store.dispatch = jest.fn();

jest.mock('../../../../../core/redux/acciones/Dates/DatesActions', () => ({
  deleteDateByID: jest.fn(),
}));

describe('testing <CardCitas/> component', () => {
  let compponentWrappe = mount(
    <Provider store={store}>
      <CardCitas
        id={12345}
        nombrePropietario={'Andres'}
        nombreMascota={'Sol'}
        tipoServicio={'basico'}
        tarifa={10000}
        fechaHora={'2021-12-01T16:00'}
        observaciones={'pelo corto'}
      />
    </Provider>
  );

  beforeEach(() => {
    compponentWrappe = mount(
      <Provider store={store}>
        <CardCitas
          id={12345}
          nombrePropietario={'Andres'}
          nombreMascota={'Sol'}
          tipoServicio={'basico'}
          tarifa={10000}
          fechaHora={'2021-12-01T16:00'}
          observaciones={'pelo corto'}
        />
      </Provider>
    );
  });

  it('should be call the deleteDateByID', () => {
    compponentWrappe.find('button').simulate('click');
    expect(deleteDateByID).toHaveBeenCalled();
  });
  it('should be call the deleteDateByID with the arguments', () => {
    compponentWrappe.find('button').simulate('click');
    expect(deleteDateByID).toHaveBeenCalledWith(12345);
  });
});
