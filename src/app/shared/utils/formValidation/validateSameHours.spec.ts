import {Cita ,Citas} from '../../../feature/Citas/interfaces/index';
import { datesTest } from '../../fixture/dates';
import { validateSameHours } from './ValidateSameHours';
describe('testing in the function validateSameHours', () => {
   

    it('should be return true', () => {
      const newDateEqual:Cita ={
          nombrePropietario: 'Juanito',
          nombreMascota: 'pepita',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        };
      
        const isBetweenDate = validateSameHours(newDateEqual,datesTest);
        expect(isBetweenDate).toBe(true);
    });
    it('should be return false', () => {
      const newDateDiferent:Cita ={
        nombrePropietario: 'Carlitos',
        nombreMascota: 'mickey',
        tipoServicio: 'premiun',
        tarifa: 20000,
        fechaHora: '2021-12-01T20:00',
        observaciones: 'pelo largo',
      };
        const isBetweenDate = validateSameHours(newDateDiferent,datesTest);
        expect(isBetweenDate).toBe(false);
    });
});
