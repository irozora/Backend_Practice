/* 
Please implement a string function in a numeric format in a language that you are good at. And mark every three digits with a comma. Please attach unit test.

e.g.
f(9527) => "9,527", f(3345678) => "3,345,678", f(-1234.45) => "-1,234.45"
*/

/**
 * numToString: a function returns strings with commas.
 * @param {number} num - a single number entered by user.
 */
function numToString(num) {
    let result;

    // if the type of num is not number or if num is NaN
    if (typeof num !== 'number' || isNaN(num)) {
        result = "Please make sure to enter a valid number.";
    } else {
        let targetNum = num.toString();

        if (num || num === 0) {
            // divide the num to integer part and float part
            let integerPart = targetNum.split('.')[0].split('');
            let floatPart = targetNum.split('.')[1];

            // if num is negative
            if (integerPart[0] === '-') {
                integerPart.shift();
                integerPart = `-${addCommaToIntegerPart(integerPart)}`;
            } else {
                integerPart = addCommaToIntegerPart(integerPart);
            }

            result = floatPart ? `${integerPart}.${floatPart}` : `${integerPart}`;
        }
    }
  return result;
}

/**
 * addCommaToIntegerPart: a function adding commas to string.
 * @param {string} str - a single string.
 */
function addCommaToIntegerPart(str) {
    return str
        .reverse()
        .map((digit, index) => index !== 0 && index % 3 === 0 ? `${digit},` : digit
        )
        .reverse()
        .join("");
}

module.exports = {
    numToString
}