/**
 * With such interesting `this` approach you may have situation when you
 * loose the context of the function what means that you expect one context
 * in the function but it received another one.
 *
 * You probably may have this problem when you take a function from
 * method's field and use it separately from the object. For example, if you run:
 *
 *   obj.fun()
 *
 * the fun() function will get obj as a context, but if you run:
 *
 *   const fun = obj.fun
 *   fun()
 *
 * the fun() function will get global object as a context
 *
 * Let's check it, in this test you need take the `fun` field
 * from obj and return it
 */
function f(obj) {
    // write your code here
}

test('check that function looses context', () => {
    const obj = {
        fun: function () {
            return this;
        }
    };
    expect(f(obj)()).toEqual(global);
});

/**
 * To solve this problem in JavaScript there is a mechanism of binding
 * any object as a context to functions. Methods call(), apply(), and bind()
 * allow to do that.
 *
 * Let's use the bind() method and bind certain object to certain method.
 * In this test you should bind the object `obj` to the function `fun`.
 * And return result function.
 */
function g(obj, fun) {
    // write your code here
}

test('check that function does not loose context', () => {
    const obj = {};
    const fun = function () {
        return this;
    };
    expect(g(obj, fun)()).toEqual(obj);
});