const Administrator = require("../models/LocalAuthority");
const User = require("../models/User");

module.exports = {
    async GetAllAdministrators(req, res) {
        try {

            let administrators = await Administrator.findAll({ include: ["User"] });

            res.status(200).send(administrators);

        } catch (err) {
            console.log(err);
            return res.send({
                error: `${err.message}`,
            });

        }

    },

    async GetAdministratorById(req, res) {
        try {
            let id = req.params.id;
            console.log(id);
            let administrator = await User.findOne({ where: { UsersId: id }, include: ["Administrator"] });

            res.status(200).send(administrator);

        } catch (err) {
            console.log(err);
            return res.send({
                error: `${err.message}`,
            });

        }

    },

}