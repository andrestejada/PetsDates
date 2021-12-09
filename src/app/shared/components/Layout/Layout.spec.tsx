import { render, wait ,waitForDomChange} from '@testing-library/react';
import { Layout } from './index';
import React from 'react';
import { mount } from 'enzyme';



describe('testing in the component <Layout/>', () => {
    const title ='hola mundo';
    const description = 'esto es una prueba';
    it('should be render correcty the text', () => {
        const componentWrapper = mount(
            <Layout
                title={title}
                description={description}
            >
                <div>this is children</div>
            </Layout>
        );
        expect(componentWrapper.find('div').at(1).text()).toBe('this is children');
    });
    it('should be render correcty the text', async() => {
        render(
            <Layout
                title={title}
                description={description}
            >
                <div>this is children</div>
            </Layout>
        );
        await wait(()=>expect((document.title)).toBe(`PetsApp | ${title}`));  
    });
});
