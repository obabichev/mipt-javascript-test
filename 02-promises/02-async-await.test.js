/**
 * Promises are nice to work with async operations, but it's not perfect.
 * As for me one of the biggest problems with `then` is that you have no
 * access to the variables defined in one `then` callback from another `then` callback.
 *
 * Fortunately there is a special syntax for promises: async/await
 *
 * With this syntax you can use statement:
 *
 *   await <promise instance>
 *
 * The result of this statement is the result of promise resolving.
 *
 * But there is a point, that you can use `await` only inside `async`
 * functions. What means that `async` function always returns promise (even if you
 * actually do not do anything asynchronous inside), and await can not be used
 * on root level, what is quite logic because of synchronous nature of JavaScript.
 *
 * In this test I started to rewrite example from previous test, but didn't finish.
 * I hope you already know what you need to do.
 */
async function f(userId, asyncUserById, asyncTeamById, asyncOrganisationById) {
    const user = await asyncUserById(userId);
    //write your code here

}

test('qwe', async () => {
    const users = [
        {id: 0, teamId: 0}, {id: 1, teamId: 0},
        {id: 2, teamId: 1}, {id: 3, teamId: 1}
    ];

    const teams = [
        {id: 0, orgId: 1},
        {id: 1, orgId: 0},
    ];

    const organisations = [
        {id: 0, name: 'Org 0'},
        {id: 1, name: 'Org 1'}
    ];

    const asyncUserById = id => Promise.resolve(users.filter(it => it.id === id)[0]);
    const asyncTeamById = id => Promise.resolve(teams.filter(it => it.id === id)[0]);
    const asyncOrgById = id => Promise.resolve(organisations.filter(it => it.id === id)[0]);

    const org = await f(2, asyncUserById, asyncTeamById, asyncOrgById);
    expect(org.name).toEqual('Org 0');
});