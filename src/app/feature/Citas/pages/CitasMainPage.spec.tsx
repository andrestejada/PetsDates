import { Citas } from '../interfaces/index';
import CitasMainPage from './Main';
import { MemoryRouter } from 'react-router-dom';
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
const store = mockStore(initialState);
const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: {} as any,
};
describe('testting in te component <CitasMainPage/>', () => {
    const componentWrapper = mount(
            <Provider store={store} >              
                <CitasMainPage {...routeComponentPropsMock}/>                 
            </Provider>
    );
    it('should be fint the principal title', () => {
        expect(componentWrapper.find('GestionCitas').exists()).toBe(true);
    });
});
