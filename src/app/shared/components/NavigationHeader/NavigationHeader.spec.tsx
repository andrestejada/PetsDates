import { MemoryRouter } from 'react-router-dom';
import { NavigationHeader } from './index';
import React from 'react';
import { mount } from 'enzyme';

describe('testing to <NavigationHeader/>', () => {
    const componentWrapper = mount(
        <MemoryRouter>
            <NavigationHeader/>
        </MemoryRouter>
    );
    it('should be should the route home', () => {        
        expect(componentWrapper.find('NavLink').at(0).text()).toBe('Home');
    });
    it('should be should the route citas', () => {        
        expect(componentWrapper.find('NavLink').at(1).text()).toBe('Citas');
    });
});
