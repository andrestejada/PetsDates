import { ValidateEmptyInputs } from './ValidarCamposVacios';
describe('testing in function  validarCamposVacios', () => {
    it('should be return a false', () => {
        const initialValues={
            nombrePropietario:'Andres',
            nombreMascota:'sol',
            tipoServicio:'basico',
            tarifa:10000,
            fechaHora:'2021-11-26T16:00',
            observaciones:'pelo corto',
        };
        
        const isEmptyFields = ValidateEmptyInputs(initialValues);
        expect(isEmptyFields).toBe(false);
    });
    it('should be return a true', () => {
        const initialValues={
            nombrePropietario:'',
            nombreMascota:'Sol',
            tipoServicio:'',
            tarifa:'',
            fechaHora:'',
            observaciones:'pelo largo',
        };
        
        const isEmptyFields = ValidateEmptyInputs(initialValues);
        expect(isEmptyFields).toBe(true);
    });
});