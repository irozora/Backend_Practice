const assert = require('chai').assert;

const addComma = require('../app/addComma')
const {
    pipe,
    addOne, 
    addTwo, 
    addThree, 
    addString, 
    addGibberish
} = require('../app/pipeFunction')


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


// Unit test for exercise 2 - pipe function with a basic variable and indefinite function parameter.
describe('Pipe function with a base variable and indefinite function parameter', () => {
    it('Should add numbers and strings to string', () => {
        let result = pipe('QQ', addOne, addThree, addGibberish);
        assert.strictEqual(result, 'QQ13gibberish');
    });

    it('Should add numbers to number', () => {
        let result = pipe(5, addOne, addOne, addTwo);
        assert.strictEqual(result, 9);
    });

    it('Should add numbers to an object', () => {
        let result = pipe({a: 'aaa', b: 'bbb'}, addOne, addString, addTwo);
        assert.strictEqual(result, 'aaabbb1addRandomStr2');
    });

    it('Should add numbers to an array', () => {
        let result = pipe([12, 888, "qwer"], addOne, addOne, addTwo);
        assert.strictEqual(result, '900qwer112');
    });
})
