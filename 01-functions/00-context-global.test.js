/**
 * Each function has access to special variable `this`,
 * but the value of this variable depends on how the function was called,
 * and doesn't depend on how it was written.
 *
 * It might be surprised for you if you came from the other languages,
 * so I suggest to keep in mind that `this` is the context of function invocation,
 * but not reference to the class instance in general (sometimes it's the reference
 * to the class instance)
 *
 * If you simply call function in the way like f() the function will receive
 * global object(Node) or window(browser) as a context. So let's simply check it.
 *
 * To pass this test simply return `this` from function f(). You can check lower
 * that test case checks that the result of the function f() is the global object.
 */
function f() {
    // write your code here
}

test('f() returns global object', () => {
    expect(f()).toEqual(global);
});