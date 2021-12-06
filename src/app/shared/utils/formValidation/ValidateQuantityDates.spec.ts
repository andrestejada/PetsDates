import { datesTest, newDate } from '../../fixture/dates';
import { Citas } from 'app/feature/Citas/interfaces';
import { validateQuantityDates } from './ValidateQuantityDates';

describe('testing in the valideQuantitydate function', () => {
    it('Should be return true', () => {        
        const isEnougDates = validateQuantityDates(newDate,datesTest);
        expect(isEnougDates).toBe(true);
    });
    it('Should be return true', () => {        
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
            }
          ];
        const isEnougDates = validateQuantityDates(newDate,datesTest);
        expect(isEnougDates).toBe(false);
    });
});
