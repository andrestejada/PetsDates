import '@testing-library/jest-dom';
import { Citas } from '../../interfaces/index';
import ConsultarCitas from './index';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { mount} from 'enzyme';
import thunk from 'redux-thunk';


const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);
interface State{
    dates:{
        allDates:Citas[]
    }
}
const initialState:State={
    dates:{
        allDates:[]
    }
};

let store = mockStore(initialState);

describe('testing <ConsultasCitas/>', () => {
    let componentWrapper = mount(
        <Provider store={store} >
            <ConsultarCitas />
        </Provider>
    );

    beforeEach(()=>{
        componentWrapper = mount(
            <Provider store={store} >
                <ConsultarCitas />
            </Provider>
        );
        store = mockStore(initialState);
        jest.clearAllMocks();    
    });

    it('Comprobar que el componente se renderize correctamente ', () => {
        expect(componentWrapper).toMatchSnapshot();
        expect(componentWrapper.find('ContenedorCitas').exists()).toBe(true);
    });

   
});
