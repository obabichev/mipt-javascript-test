/**
 * JavaScript is the singe threaded language and you can not simply create smth
 * in another thread. By JavaScript machines (like node) provide possibility
 * to run asynchronous functions, which are implemented inside JavaScript machines.
 * Examples of such functions timeouts (setTimeout, setInterval), network(XMLHttpRequest),
 * filesystem (fs)
 *
 * These functions work via callbacks. You call such function, for example fs.readFile,
 * and pass callback function there. After that this functions will be executed by
 * the JavaScript machine and your function will be invoked with the execution result.
 *
 * But callbacks frequently cause callback hell, the situation when you have callback
 * inside callback, inside callback and so on, looks like:
 *
 * fs.readFile('/path1', (err, data) => {
 *   fs.readFile('/path2', (err, data) => {
 *     fs.readFile('/path2', (err, data) => {
 *       ...
 *     });
 *   });
 * });
 *
 * In JavaScript there is a standard way to works with callbacks: Promises
 *
 * Promise encapsulates the async logic and provides better interface to pass callback
 * for this async logic.
 *
 * Class Promise has a constructor which takes a function of two
 * arguments (resolve, reject) as an argument:
 *
 *   new Promise((resolve, reject) => {
 *       // Async logic should be here
 *   })
 *
 * Function inside should call `resolve` function if it's completed successfully (file
 * downloaded, requests finished and so on), and `reject` in the other case.
 *
 * In this test you see creation of new Promise, and setTimeout inside it. You need to
 * add resolving of the promise with `data` (promises allows to return the result through
 * the argument of `resolve` function)
 */
function f(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            // write your code here
        }, 2000);
    })
}

test('Promise from f() resolves with the string Hello world', () => {
    return f('Hello world')
        .then(data => {
            expect(data).toEqual('Hello world');
        })
});