import { Cita ,Citas} from '../../../feature/Citas/interfaces/index';
import { ValidateQuantityDates } from './ValidateQuantityDates';

describe('', () => {
    
    const newDate:Cita ={
        nombrePropietario: 'Andres',
        nombreMascota: 'sol',
        tipoServicio: 'basico',
        tarifa: 10000,
        fechaHora: '2021-12-01T16:00',
        observaciones: 'pelo corto',
      };

    it('Should be return a boolean Valueww', () => {
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
          ];
        const isEnougDates = ValidateQuantityDates(newDate,datesTest);
        expect(isEnougDates).toBe(false);
    });

    it('Should be return a boolean Value', () => {
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
            },
          ];
        const isEnougDates = ValidateQuantityDates(newDate,datesTest);
        expect(isEnougDates).toBe(true);
    });
});