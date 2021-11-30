import { Citas } from '../../feature/Citas/interfaces/index';
import { compareSameDates } from './compareSameDates';
import { newDate } from '../fixture/dates';

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
  ];

describe('testing utils function compareSameDates', () => {
    it('should be return a number 5', () => {
        const quantityDates =compareSameDates(datesTest,newDate);
        const resultOfDates = 4;
        expect(quantityDates).toBe(resultOfDates);
    });
});
