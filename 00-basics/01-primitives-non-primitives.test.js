/**
 * The first 5 types (except object) are primitives and pass into functions by the value,
 * also they can not be modified (only new values might be created)
 *
 * Objects pass into function by the references, so when you pass object into function
 * no additional objects appear and all the changes in the object will be reflected
 * outside of the function.
 *
 * Let's implement the function addKeyValue() which should take 3 arguments: obj, key, value;
 * and add field `key` with the value `value` to the object `obj`
 */
function addKeyValue(obj, key, value) {
    //write your code here
}

test('check adding field to the object', () => {
    const object = {};

    addKeyValue(object, 'test', 'test');
    expect(object.test).toEqual('test');

    addKeyValue(object, 'self', object);
    expect(object.self).toEqual(object);


    const array = [];
    addKeyValue(array, 0, 1);
    addKeyValue(array, 1, 2);
    expect(array).toHaveLength(2);

    addKeyValue(array, 1000, 10001);
    expect(array).toHaveLength(1001);
});