import { calcRate } from './calcRate';
describe('testing calcRate Function', () => {
    it('should be return 10000', () => {
        const typeOfService = 'basico';
        const rate = calcRate(typeOfService);
        const resultExpect = 10000;
        expect(rate).toBe(resultExpect);
    });
    it('should be return 20000', () => {
        const typeOfService = 'regular';
        const rate = calcRate(typeOfService);
        const resultExpect = 20000;
        expect(rate).toBe(resultExpect);
    });
    it('should be return 30000', () => {
        const typeOfService = 'premium';
        const rate = calcRate(typeOfService);
        const resultExpect = 30000;
        expect(rate).toBe(resultExpect);
    });
    it('should be return 0', () => {
        const typeOfService = '';
        const rate = calcRate(typeOfService);
        const resultExpect = 0;
        expect(rate).toBe(resultExpect);
    });
});