import '@testing-library/jest-dom';
import { FormCrearCitas, FormularioCitas  } from './index';
import { ShallowWrapper,mount,  } from 'enzyme';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { DatesDispatchTypes } from '../../../../core/redux/acciones/Dates/DatesTypes';
import { Provider } from 'react-redux';
import React from 'react';
import { ValidateEmptyInputs } from 'app/shared/utils/ValidarCamposVacios';
import createMockStore from 'redux-mock-store';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = createMockStore(middlewares);
const initialState={};
let store = mockStore(initialState);

jest.mock('../../../../shared/utils/ValidarCamposVacios.ts',()=>({
    ValidateEmptyInputs: jest.fn(),
}));

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
        expect(ValidateEmptyInputs).toHaveBeenCalled();
    });
    
});


