module.exports = {
    addUser,
    findUserById
}

const db = require('../database/dbConfig.js');

function addUser(newUser) {
    return db('users')
        .insert(newUser)
        .then(ids => {
            return findUserById(ids[0]);
        });
}

function findUserById(user_id) {
    return db('users')
        .where({ id: user_id })
        .first();
}