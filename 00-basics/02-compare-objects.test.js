/**
 * In JavaScript there are two operators to compare values: ==, ===
 *
 * The difference does matter in the case you compare values with different types, and
 * `==` tries to cast the values to the same type.
 *
 * Initially JavaScript was developed
 * to avoid exception as long as possible (even dividing by zero does not throw
 * exception but returns `NaN`), and casting rules are not the best thing to remember,
 * so the main rule here - never use `==`.
 *
 * In this task let's fix the function which may bring a lot of magic on production:
 */
function f(value1, value2) {
    //fix the code here

    return value1 == value2;
}

test('compare values', () => {
    expect(f(1, 1)).toEqual(true);
    expect(f('1', 1)).toEqual(false);
    expect(f(1, true)).toEqual(false);
    expect(f([], 0)).toEqual(false);
    expect(f([[[[[[[]]]]]]], 0)).toEqual(false);
});

/**
 * Objects are compared always by the link.
 * Even if two objects have the same set of fields and values for them
 * they will be different.
 *
 * Implement the function which should compare two objects and return true
 * if it's actually the same object
 */
function g(obj1, obj2) {
    //write your code here
}

test('compare values', () => {
    expect(g({}, {})).toEqual(false);
    const obj = {};
    expect(g(obj, obj)).toEqual(true);
});