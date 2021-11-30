import { Layout } from './index';
import React from 'react';
import { mount } from 'enzyme';


describe('testing in the component <Layout/>', () => {
    const title ='hola mundo';
    const description = 'esto es una prueba';
    const componentWrapper = mount(
        <Layout
            title={title}
            description={description}
        >
            <div>this is children</div>
        </Layout>
    );
    it('should be render correcty the textº', () => {
        expect(componentWrapper.find('div').at(1).text()).toBe('this is children');
    });
});
