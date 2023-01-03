const User = require('../services/UserService');

async function list(request, response) {
    try {
        const users = await User.list();
       return response.status(200).json({
            success: true,
            data: users,
        })
    } catch (error) {
        return response.status(400).json({
            success: false,
            message: error
        });
    }
}

async function add(request, response) {
    try {
        const { name, surname, birthdate, email, password } = request.body;

        const date = new Date();
        const user = {
            name,
            surname,
            birthdate,
            email,
            password,
            date,
            date
        }
        await User.add(user);
        return response.status(201).json({
            success: true,
            data: user
        })

    } catch (error) {
        if (error.keyValue && error.keyValue.email) {
           return response.status(400).json({
                success: false,
                message: `Duplicate email: ${error.keyValue.email}`
            })
        }
        if (error.errors) {
           return response.status(400).json({
                success: false,
                message: error.message
            })
        }
        return response.status(400).json({
            success: false,
            message: "Se ha producido un error."
        })
    }


}

module.exports = {
    list: (request, response) => list(request, response),
    add: (request, response) => add(request, response),
}