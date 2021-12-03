import React from 'react';
import { SinCitas } from './index';
import { mount } from 'enzyme';



describe('testing <SinCitas/> component', () => {
    const compponentWrappe = mount(
        <SinCitas/>
    );
    it('should ', () => {
        expect(compponentWrappe.find('[data-testid="empty-dates"]').exists()).toBe(true);
    });
});