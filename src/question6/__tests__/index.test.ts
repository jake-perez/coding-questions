import { deepEquality } from ".."


describe('Question 6', () => {
    it('should deep compare if objects are equal', () => {
        const result = deepEquality({foo: true}, {foo: true});

        expect(result).toEqual(true);
    })
})