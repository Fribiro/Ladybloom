const mysql = require("mysql");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { authPage } = require("../middleware/auth");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//get all users
router.get("/beneficiary", (req, res) => {
  let sql = "SELECT * FROM beneficiary";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

router.get("/benef", (req, res) => {

  let sql = "SELECT * FROM beneficiary WHERE email= ? ";
  let query = db.query(sql, [req.headers.email], (err, results) => {
    if (err) throw err;
    else {
      res.send(results);
      console.log(results);
    }
  });
});

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


module.exports = router;
