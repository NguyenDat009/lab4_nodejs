const fetch = require('node-fetch');
async function getUsers(page = 1) {
    const url = `${process.env.GORESS_BASE_URL}/public-api/users`
    const response = await fetch(url, {
        methot: 'GET',
    });
    const data = await response.json();
    return data;
}

async function getUser(userID) {
    const url = `${process.env.GORESS_BASE_URL}/public-api/users/${userID}`
    const response = await fetch(url, {
        methot: 'GET',

    });
    const data = await response.json();
    return data;
}