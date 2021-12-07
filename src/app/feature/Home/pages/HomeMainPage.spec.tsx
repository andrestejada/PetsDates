import HomeMainPage from './Main';
import React from 'react';
import { mount } from 'enzyme';
describe('testting in te component <HomeMainPage/>', () => {
    const routeComponentPropsMock = {
        history: {} as any,
        location: {} as any,
        match: {} as any,
      };
    const componentWrapper = mount(
            <HomeMainPage {...routeComponentPropsMock}/>
    );
    it('should be fint the principal title', () => {
        expect(componentWrapper.find('h1').text()).toBe('Bienvenido a PetsApp');    
    });
});
