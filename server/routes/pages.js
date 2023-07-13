const express = require("express");
const { GetAllBeneficiaries, GetBeneficiaryById } = require("../controllers/Beneficiary");
const router = express.Router();

router.get("/beneficiary", GetAllBeneficiaries);

router.get("/benef/:id", GetBeneficiaryById);

module.exports = router;
