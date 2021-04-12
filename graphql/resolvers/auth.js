const UserModel = require("../../models/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    login: async ({username, password}) => {
        const user = await UserModel.findOne({username: username})
        if (!user) {
            throw new Error("Invalid credentials!")
        }
        const isEqual = await bcrypt.compare(password, user.password)
        if (!isEqual) {
            throw new Error("Invalid credentials!")
        }
        const token = jwt.sign({userId: user.id, username: user.username}, process.env.SECRET_KEY, {
            expiresIn: '1h'
        })

        return {
            token: token,
            tokenExpiration: 1
        }
    }
}