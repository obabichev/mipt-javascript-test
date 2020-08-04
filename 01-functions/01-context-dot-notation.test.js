/**
 * Another option how to call any function is via don symbol. Looks like:
 *
 *   obj.fun()
 *
 * In this case the context of the function will be the object on the left side
 * of the dot symbol.
 *
 * In this test I offer to you implement the function `getByKey` of one argument `key`.
 * This function is added to the objects `obj1` and `obj2`, and after execution should
 * return values from this object by the key.
 */
function f(obj1, obj2) {

    const getByKey = function (key) {
        // write your code here
    };

    obj1.getByKey = getByKey;
    obj2.getByKey = getByKey;
}

test('f() adds function which returns values by key', () => {
    const obj1 = {testField: 'testValue'};
    const obj2 = {a: 'b'};
    f(obj1, obj2);

    expect(
        obj1.getByKey('testField')
    ).toEqual('testValue');

    expect(
        obj2.getByKey('a')
    ).toEqual('b');
});