/**
 * In JavaScript there are 6 main data types:
 * - number (5; 5.4)
 * - string ('qwe'; "asd"; `zxc`)
 * - boolean (true; false)
 * - null (null)
 * - undefined (undefined)
 * - object ({a: 10}; [1,2,3]; function(){})
 *
 * Let's implement function sum which takes two number arguments and returns sum of them
 * and check that testing library works
 */
function sum(a, b) {
    //write your code here
}

test('check sum function', () => {
    expect(sum(5, 10)).toEqual(15);
    expect(sum(-9, 9)).toEqual(0);
});