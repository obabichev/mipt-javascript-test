/**
 * Function in JavaScript might be called using keyword `new`.
 *
 * In this case empty object will be created by the JavaScript machine
 * and passed as a context to function. This object will be also returned
 * if you don't use `return` statement inside.
 *
 * Such functions usually called Function Constructor
 * and that's a JavaScript's world OOP implementation.
 *
 * In this task you need to implement the function Rectangular() which
 * will be called via keyword `new`. It should take `width` and `height` as
 * arguments and save inside the context object. Also it should add method `area`
 * which should return multiplication of `width` and `height` stored inside the
 * context object.
 */
function Rectangular(width, height) {
    // write your code here
}

test('Rectangular()', () => {
    expect((new Rectangular(5, 4)).area()).toEqual(20);

    const testObj = new Rectangular(0, 0);
    testObj.width = 7;
    testObj.height = 3;
    expect(testObj.area()).toEqual(21);
});