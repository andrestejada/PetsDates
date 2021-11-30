import { LazyFallback } from './index';
import React from 'react';
import { mount } from 'enzyme';


describe('testing in the component <lazyFallback/>', () => {
    const componentWrapper = mount(
        <LazyFallback/>
    );
    it('should be render correcty the textº', () => {
        expect(componentWrapper.find('span').text()).toBe('Cargando página...');
    });
});
