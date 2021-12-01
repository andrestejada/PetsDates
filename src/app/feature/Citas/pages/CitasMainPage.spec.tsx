import { Citas } from '../interfaces/index';
import CitasMainPage from './Main';
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

describe('testting in te component <CitasMainPage/>', () => {
    const componentWrapper = mount(
            <Provider store={store} >
              
                <CitasMainPage/>
                
            </Provider>
    );
    it('should be fint the principal title', () => {
        expect(componentWrapper.find('GestionCitas').exists()).toBe(true);
    });
});
