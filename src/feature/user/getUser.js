const User = require('../../models/users/model')

const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
        res.status(200).json({
            message: 'successfully fetched the users.',
            users
        })
    } catch (error) {
        res.status(500).json({error: 'Internal server error.'})
    }
 }

 module.exports = getUsers;