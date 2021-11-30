import { validateWeekend } from './validateWeekend';
describe('testing function validateWeeekend', () => {
    it('should a day of the weekend', () => {
        const dateOfWeekend = '2021-11-27T12:00';
        const isWeekend = validateWeekend(dateOfWeekend);
        expect(isWeekend).toBe(true);
    });
    it('should a day normal day of the week', () => {
        const dateOfWeekend = '2021-11-29T12:00';
        const isWeekend = validateWeekend(dateOfWeekend);
        expect(isWeekend).toBe(false);
    });
});
