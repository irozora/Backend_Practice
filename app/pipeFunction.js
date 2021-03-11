/**
Please implement a pipe function in a language that you are good at. The function parameter is of indefinite length, the first parameter is a variable of any type, and the following parameter is the function pointer. Please attach unit test.

e.g.
  def increment (int value) {
    return value + 1
  }
  pipe(5, increment) => 6, pipe(5, increment, increment, increment) => 8
*/

/**
 * addOne, addTwo, addThree, addString, addGibberish: function pointers.
 */
function addOne() {
    return 1;
}

function addTwo() {
    return 2;
}

function addThree() {
    return 3;
}

function addString() {
    return "addRandomStr";
}

function addGibberish() {
    return "gibberish";
}

/**
 * pipe: a pipe function adding commas to string.
 * @param arg1 - a variable that could be any data type.
 * @param {functions} func - function pointers. 
 */
function pipe(arg1, ...func) {
    let result;
    let initialValue;

    // check the data type of arg1 first
    switch (typeof arg1) {
        // if the data type is number or string
        case "number":
        case "string":
            initialValue = [arg1, ...func];
            result = initialValue.reduce((acc, cur) => acc + cur());
            break;

        // if the data type is object
        case "object":
            let init;

            // if arg1 is strictly equal to null, set the string "null" as its initial value.
            if (arg1 === null) {
                init = 'null';
            } else if (!arg1.isArray) {
                // if arg1 is not an array
                for (const key in arg1) {
                    if (typeof init === "undefined") {
                    init = arg1[key]
                    } else {
                    init += arg1[key];
                    }
                }
            } else {
                // if arg1 is an array
                for (const i of arg1) {
                    if (typeof init === "undefined") {
                    init = arg1[i]
                    } else {
                    init += arg1[i];
                    }
                }
            }
            initialValue = [init, ...func];
            break;

        // if the data type is undefined, set the string "undefined" as its initial value.
        case "undefined":
            initialValue = ["undefined", ...func];
            break;
    }
    result = initialValue.reduce((acc, cur) => acc + cur());

    return result;
}

module.exports = {
    pipe,
    addOne, 
    addTwo, 
    addThree, 
    addString, 
    addGibberish
}