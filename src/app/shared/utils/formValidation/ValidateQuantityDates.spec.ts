import { datesTest, newDate } from '../../fixture/dates';
import { validateQuantityDates } from './ValidateQuantityDates';

describe('testing in the valideQuantitydate function', () => {
    it('Should be return a boolean Valueww', () => {        
        const isEnougDates = validateQuantityDates(newDate,datesTest);
        expect(isEnougDates).toBe(true);
    });
});
