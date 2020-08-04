/**
 * Arrow functions have no own context and simply take the context of the place
 * where it was created (in other word, and more correct, it uses `this` as another
 * variables from outer scope.
 *
 * This test might be a bit confusing, but you need to create an arrow function inside
 * function f(). The arrow function should take fields `a` and `b` from the context
 * of function f() and return their sum.
 */
function f() {

    return () => {
        // write your code here
    }
}


test('Check that arrows function works correct', () => {
    expect(
        f.apply({a: 10, b: 20})()
    ).toEqual(30);

    expect(
        f.apply({a: '10', b: '20'})()
    ).toEqual('1020');
});