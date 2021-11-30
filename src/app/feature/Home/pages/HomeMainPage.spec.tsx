import HomeMainPage from './Main';
import React from 'react';
import { mount } from 'enzyme';
describe('testting in te component <HomeMainPage/>', () => {
    const componentWrapper = mount(
            <HomeMainPage history={undefined} location={undefined} match={undefined}  />
    );
    it('should be fint the principal title', () => {
        expect(componentWrapper.find('h1').text()).toBe('Bienvenido a PetsApp');
    });
});