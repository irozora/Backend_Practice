const assert = require('chai').assert;

const addComma = require('../app/addComma')

// Unit test for exercise 1 - add comma to number and return string
describe('Add comma to number', () => {
    it('Marks comma per every three digits and the result type should be string', () => {
        let result = addComma.numToString(-489412.4981);
        assert.strictEqual(result, '-489,412.4981');
        assert.typeOf(result, 'string');
    });

    it('Marks comma per every three digits and the result type should be string', () => {
        let result = addComma.numToString(115485132);
        assert.strictEqual(result, '115,485,132');
        assert.typeOf(result, 'string');
    });

    it('Marks comma per every three digits and the result type should be string', () => {
        let result = addComma.numToString(.99999);
        assert.strictEqual(result, '0.99999');
        assert.typeOf(result, 'string');
    });

    it('Should remind user to enter a valid number.', () => {
        let result = addComma.numToString("This is just gibberish.");
        assert.strictEqual(result, 'Please make sure to enter a valid number.');
    });
})