import { Citas} from '../../../feature/Citas/interfaces/index';
import { newDate } from '../../fixture/dates';
import { validateQuantityDates } from './ValidateQuantityDates';

describe('', () => {

    it('Should be return a boolean Valueww', () => {
        const datesTestQuantity: Citas[] = [
            {
              id: 1,
              nombrePropietario: 'Andres',
              nombreMascota: 'sol',
              tipoServicio: 'basico',
              tarifa: 10000,
              fechaHora: '2021-12-01T16:00',
              observaciones: 'pelo corto',
            },
          ];
        const isEnougDates = validateQuantityDates(newDate,datesTestQuantity);
        expect(isEnougDates).toBe(false);
    });

    it('Should be return a boolean Value', () => {
        const datesTestComplete: Citas[] = [
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
              nombrePropietario: 'Luis',
              nombreMascota: 'danna',
              tipoServicio: 'basico',
              tarifa: 10000,
              fechaHora: '2021-12-01T16:00',
              observaciones: 'pelo corto',
            },
            {
              id: 5,
              nombrePropietario: 'Angela',
              nombreMascota: 'coco',
              tipoServicio: 'basico',
              tarifa: 10000,
              fechaHora: '2021-12-01T16:00',
              observaciones: 'pelo corto',
            },
          ];
        const isEnougDates = validateQuantityDates(newDate,datesTestComplete);
        expect(isEnougDates).toBe(true);
    });
});
