const mysql = require("mysql2");
const Beneficiary = require("../models/Beneficiary");
const User = require("../models/User");

module.exports = {
    async GetAllBeneficiaries(req, res) {
        try {

            let beneficiaries = await Beneficiary.findAll({ include: ["User"] });

            res.status(200).send(beneficiaries);

        } catch (err) {
            console.log(err);
            return res.send({
                error: `${err.message}`,
            });

        }

    },

    async GetBeneficiaryById(req, res) {
        try {
            let id = req.params.id;
            console.log(id);
            let beneficiary = await User.findOne({ where: { UsersId: id }, include: ["Beneficiary"] });

            res.status(200).send(beneficiary);
            //console.log(beneficiary);

        } catch (err) {
            console.log(err);
            return res.send({
                error: `${err.message}`,
            });

        }

    },

}