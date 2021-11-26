import { Citas } from '../../../interfaces/index';
import ContenedorCitas from './index';
import React from 'react';
import { mount} from 'enzyme';
describe('testing <ContenedorCitas/>', () => {
    const datesTest:Citas[]=[
        {
            id:1,
            nombrePropietario:'Andres',
            nombreMascota:'sol',
            tipoServicio:'basico',
            tarifa:10000,
            fechaHora:'2021-12-01T16:00',
            observaciones:'pelo corto',
        },
    ];

    const componentWrapper = mount(
        <ContenedorCitas
            dates={datesTest}
        />
    );
    it('should render correctly', () => {
        expect(componentWrapper.find('div').at(0)).toBeTruthy();        
    });
    it('should render correctly', () => {
        expect(componentWrapper.find('CardCitas').length).toBe(1);
    });
});