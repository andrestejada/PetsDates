import '@testing-library/jest-dom';
import {  FormularioCitas  } from './index';
import { Provider } from 'react-redux';
import React from 'react';
import createMockStore from 'redux-mock-store';
import { mount,  } from 'enzyme';
import thunk from 'redux-thunk';
import { validateEmptyInputs } from 'app/shared/utils/formValidation/ValidarCamposVacios';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);
const initialState={
    dates:{
        allDates:[]
    }
};
let store = mockStore(initialState);
describe('Prueba unitarias formulario de citas', () => {
    let componentWrapper = mount(
        <Provider store={store} >
            <FormularioCitas />
        </Provider>
    );
    
    beforeEach(() => {
        componentWrapper = mount(
            <Provider store={store} >
                <FormularioCitas />
            </Provider>
        );
        store = mockStore(initialState);
        jest.clearAllMocks();
    });

    it('Comprobar que el componente se renderize correctamente ', () => {
        expect(componentWrapper).toMatchSnapshot();
    });

    it('probar el onsubmit del formulario', () => {
        componentWrapper.find('form').simulate('submit',{preventDefault(){}});
        const expectText='Todos los campos son obligatorios';
        expect(componentWrapper.find('[data-testid="alerta"]').at(0).contains(expectText)).toBe(true);
    });    
   
});


