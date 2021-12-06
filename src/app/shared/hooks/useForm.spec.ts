import { act, renderHook} from '@testing-library/react-hooks';
import { useForm } from './useForm';

describe('testing in the hook useForm', () => {
    const initialValue={
        nombre:'',
        apellido:'',
        edad:0,
    };

   
    it('should be match the initial value with form values', () => {    
        const {result} = renderHook(()=>useForm(initialValue));
        const [formValues,handleInputChange,reset,changeRate] = result.current;
        expect(formValues).toEqual(initialValue);
        expect( typeof handleInputChange).toBe('function');
        expect( typeof reset).toBe('function');
        expect( typeof changeRate).toBe('function');
    });

    it('should be match the the value change with the new value', () => {
        const {result} = renderHook(()=>useForm(initialValue));
        const [,handleInputChange] = result.current;
        act( ()=>{
            handleInputChange({target:{
                name:'nombre',
                value:'Andres'
            }});
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({...initialValue,nombre:'Andres'});
    });
    it('should be return the initalvalue firts change de value and then reset the value', () => {

        const initialValue={
            nombre:'luisa',
            apellido:'Tejada',
            edad:26,
        };
        const {result} = renderHook(()=>useForm(initialValue));
        const [,handleInputChange,reset] = result.current;
        act( ()=>{
            handleInputChange({target:{
                name:'nombre',
                value:'Andres'
            }});
           reset();
        });
        const [formValues] = result.current;
        expect(formValues).toEqual(initialValue);
    });

    it('should be change correctly the value of tarifa ', () => {
        const initialValue={
            nombre:'Luis',
            tarifa:0
        };
        const {result} = renderHook(()=>useForm(initialValue));
        const [,,,changeRate] = result.current;
        const rate = 'premium';
        act( ()=>{
           changeRate(rate);
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({...initialValue,tarifa:30000});
        expect(formValues.tarifa).toBe(30000);
    });
});