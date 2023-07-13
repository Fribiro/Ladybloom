const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { authPage } = require("../middleware/auth");
const { GetAllBeneficiaries, GetBeneficiaryById } = require("../controllers/Beneficiary");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//get all users


router.get("/ment", (req, res) => {
  let sql = "SELECT * FROM mentor WHERE email= ? ";
  let query = db.query(sql, [req.headers.email], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});
router.get("/admin", (req, res) => {
  let sql = "SELECT * FROM administrator WHERE email= ? ";
  let query = db.query(sql, [req.headers.email], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

router.get("/mentors", (req, res) => {
  let sql = "SELECT * FROM mentor";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});
router.get("/administrators", (req, res) => {
  let sql = "SELECT * FROM administrator";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});
//get one user
router.get("/singlementor", (req, res) => {
  let sql = "SELECT * FROM mentor WHERE id= ? ";
  let query = db.query(sql, [req.headers.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});
router.get("/singleadministrator", (req, res) => {
  let sql = "SELECT * FROM administrator WHERE id= ? ";
  let query = db.query(sql, [req.headers.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});
router.get("/singlebeneficiary", (req, res) => {
  let sql = "SELECT * FROM beneficiary WHERE id= ? ";
  let query = db.query(sql, [req.headers.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

router.get("/packageorder", (req, res) => {
  let sql = "SELECT * FROM packageOrder";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

router.get("/apackageorder", (req, res) => {
  let sql = "SELECT * FROM packageOrder WHERE location= ?";
  let query = db.query(sql, [req.headers.location], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

//get one user
router.get("/investor/:id", (req, res) => {
  let sql = "SELECT * FROM investorSignup WHERE id= ? ";
  let query = db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

//delete
router.delete("/beneficiarydel", (req, res) => {
  let sql = "DELETE FROM beneficiary WHERE id= ?";
  let query = db.query(sql, [req.headers.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});

router.delete("/mentordel", (req, res) => {
  let sql = "DELETE FROM mentor WHERE id= ?";
  let query = db.query(sql, [req.headers.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});

router.delete("/administratordel", (req, res) => {
  let sql = "DELETE FROM administrator WHERE id= ?";
  let query = db.query(sql, [req.headers.id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});

//suspend user account
router.put("/suspendBenf", (req, res) => {
  const id = req.body.id
  let sql = "UPDATE beneficiary SET suspend = 'true' WHERE id= ?";
  let query = db.query(sql, [id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});

router.put("/enableBenf", (req, res) => {
  const id = req.body.id;
  let sql = "UPDATE beneficiary SET suspend = 'false' WHERE id= ?";
  let query = db.query(sql, [id], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
    }
  });
});

module.exports = router;
