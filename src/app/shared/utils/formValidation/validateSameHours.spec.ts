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
          nombrePropietario: 'Andres',
          nombreMascota: 'sol',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 3,
          nombrePropietario: 'Andres',
          nombreMascota: 'sol',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 4,
          nombrePropietario: 'Andres',
          nombreMascota: 'sol',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        },
        {
          id: 5,
          nombrePropietario: 'Andres',
          nombreMascota: 'sol',
          tipoServicio: 'basico',
          tarifa: 10000,
          fechaHora: '2021-12-01T16:00',
          observaciones: 'pelo corto',
        }
    ];

    
    it('should be return true', () => {
        const newDate:Cita ={
            nombrePropietario: 'Andres',
            nombreMascota: 'sol',
            tipoServicio: 'basico',
            tarifa: 10000,
            fechaHora: '2021-12-01T16:00',
            observaciones: 'pelo corto',
          };
        const isBetweenDate = validateSameHours(newDate,datesTest);
        expect(isBetweenDate).toBe(true);
    });
    it('should be return false', () => {
        const newDate:Cita ={
            nombrePropietario: 'Andres',
            nombreMascota: 'sol',
            tipoServicio: 'basico',
            tarifa: 10000,
            fechaHora: '2021-12-01T20:00',
            observaciones: 'pelo corto',
          };
        const isBetweenDate = validateSameHours(newDate,datesTest);
        expect(isBetweenDate).toBe(false);
    });
});