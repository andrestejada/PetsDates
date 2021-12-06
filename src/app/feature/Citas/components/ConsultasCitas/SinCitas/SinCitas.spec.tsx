import React from 'react';
import { SinCitas } from './index';
import { mount } from 'enzyme';



describe('testing <SinCitas/> component', () => {
    const compponentWrappe = mount(
        <SinCitas/>
    );
    it('should be render correctly ', () => {
        expect(compponentWrappe.contains('No hay citas aun, empieza creando una')).toBe(true);
        expect(compponentWrappe.find('[data-testid="empty-dates"]').exists()).toBe(true);
        expect(compponentWrappe).toMatchSnapshot();
    });
});