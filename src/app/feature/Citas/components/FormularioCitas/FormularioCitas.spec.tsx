import '@testing-library/jest-dom';
import {  ShallowWrapper,shallow } from 'enzyme';
import { FormularioCitas } from './index'; 
import React from 'react';




describe('Prueba unitarias formulario de citas', () => {
    let componentWrapper : ShallowWrapper;
   
    it('Comprobar que el componente se renderize correctamente ', () => {
        componentWrapper = shallow(<FormularioCitas/>);
        expect(componentWrapper).toMatchSnapshot();
    });
});

// describe('Prueba unitarias formulario de citas',()=>{
//     test('Comprobar que el componente se renderize correctamente',()=>{
//         // const wrapper = shallow(<FormularioCitas/>);
//         // expect(wrapper).toMatchSnapshot();
//     });
// });

