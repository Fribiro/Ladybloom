const express = require("express");
const { GetAllBeneficiaries, GetBeneficiaryById } = require("../controllers/Beneficiary");
const { GetAllMentors, GetMentorById } = require("../controllers/Mentor");
const { GetAllAdministrators, GetAdministratorById } = require("../controllers/LocalAuthority");
const router = express.Router();

// Beneficiary endpoints
router.get("/beneficiaries", GetAllBeneficiaries);

router.get("/benef/:id", GetBeneficiaryById);

//Mentor endpoints
router.get("/mentors", GetAllMentors);

router.get("/mentor/:id", GetMentorById);

//Administrator endpoints
router.get("/administrators", GetAllAdministrators);

router.get("/administrator/:id", GetAdministratorById);

module.exports = router;
