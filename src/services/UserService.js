require("../config/DBConnections/mongodb");
const User = require('../models/UserModel');

function UserService() {
    return {
        list: () => User.find(),
        add: user => new User(user).save(),
    }
}

module.exports = UserService();