const Mentor = require("../models/Mentor");
const User = require("../models/User");

module.exports = {
    async GetAllMentors(req, res) {
        try {

            let mentors = await Mentor.findAll({ include: ["User"] });

            res.status(200).send(mentors);

        } catch (err) {
            console.log(err);
            return res.send({
                error: `${err.message}`,
            });

        }

    },

    async GetMentorById(req, res) {
        try {
            let id = req.params.id;
            console.log(id);
            let mentor = await User.findOne({ where: { UsersId: id }, include: ["Mentor"] });

            res.status(200).send(mentor);
            //console.log(beneficiary);

        } catch (err) {
            console.log(err);
            return res.send({
                error: `${err.message}`,
            });

        }

    },

}