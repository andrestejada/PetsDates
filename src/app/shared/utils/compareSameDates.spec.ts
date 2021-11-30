import { datesTest,newDate} from '../fixture/dates';
import { compareSameDates } from './compareSameDates';

  
describe('testing utils function compareSameDates', () => {
    it('should be return a number 5', () => {
        const quantityDates =compareSameDates(datesTest,newDate);
        const resultOfDates = 5;
        expect(quantityDates).toBe(resultOfDates);
    });
});
