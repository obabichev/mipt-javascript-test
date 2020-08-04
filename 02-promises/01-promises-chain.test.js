/**
 * In the previous test you already were able to see that
 * you can pass callback for the async operation with method `then` of promises.
 *
 * At the first glance it might be looking like the same as callback hell problem,
 * but interesting thing that you can chain such `then` function. It looks
 * like this:
 *
 * promise
 *   .then(() => <return new promise here>)
 *   .then(() => <return new promise here>)
 *   .then(() => <return new promise here>)
 *   .then(() => <return new promise here>)
 *   ...
 *
 * It means that if you return promise from callback inside `then`,
 * callback of the next `then` will be called only when promise from
 * previous one is resolved.
 *
 * In this test you need to find organisation by userId. To to that you
 * have 3 functions: asyncUserById, asyncTeamById, asyncOrganisationById
 *
 * Each user has field `teamId`, and each team has field `orgId`. Using this
 * information you need to find team of the user firstly, and then organisation
 * of the team. But keep in mind, that each of 3 functions (asyncUserById,
 * asyncTeamById, asyncOrganisationById) returns promise which resolves into
 * result data.
 */
function f(userId, asyncUserById, asyncTeamById, asyncOrganisationById) {
    //write your code here
}

test('get organisation by user id', () => {

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

    return f(2, asyncUserById, asyncTeamById, asyncOrgById)
        .then(org => expect(org.name).toEqual('Org 0'))
});