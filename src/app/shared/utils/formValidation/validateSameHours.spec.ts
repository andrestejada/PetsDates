import {Cita ,Citas} from '../../../feature/Citas/interfaces/index';
import { validateSameHours } from './ValidateSameHours';
describe('testing in the function validateSameHours', () => {
    const datesTest: Citas[] = [
        {
          id: 1,
          nombrePropietario: 'Andres',
          nombreMascota: 'sol',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 2,
          nombrePropietario: 'Luis',
          nombreMascota: 'danna',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 3,
          nombrePropietario: 'Angela',
          nombreMascota: 'coco',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 4,
          nombrePropietario: 'Carolina',
          nombreMascota: 'lasie',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 5,
          nombrePropietario: 'Luis',
          nombreMascota: 'venus',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        }
    ];

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
        nombrePropietario: 'Juanito',
        nombreMascota: 'pepita',
        tipoServicio: 'basico',
        tarifa: 10000,
        fechaHora: '2021-12-01T20:00',
        observaciones: 'pelo corto',
      };
        const isBetweenDate = validateSameHours(newDateDiferent,datesTest);
        expect(isBetweenDate).toBe(false);
    });
});
