import '@testing-library/jest-dom';
import { ShallowWrapper,mount, shallow,  } from 'enzyme';
import { FormularioCitas } from './index';
import React from 'react';




describe('Prueba unitarias formulario de citas', () => {
    let componentWrapper: ShallowWrapper;
    beforeEach(() => {
        componentWrapper = shallow(<FormularioCitas />);
    });

    it('Comprobar que el componente se renderize correctamente ', () => {
        expect(componentWrapper).toMatchSnapshot();
    });

    it('si el formulario estaba vacio debe salir una alerta', () => {
        // componentWrapper.find('#button').simulate('click');
        // console.log(componentWrapper.find('#alerta').exists());
    });
});


