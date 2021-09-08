const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const { verify } = require("jsonwebtoken");

const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken,
} = require("../middleware/token");

// TODO: write the dbconnection and import it into the neccessary pages
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//async makessure the server waits for some actions which might take some time to be done
//login function
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Please provide an email and password",
      });
      return;
    }

  

    db.query(
      "SELECT * FROM beneficiary WHERE email = ?",
      [email],
      async (error, results) => {
        //bcryptcompare compares the password being typed with the one in the db
        if (
          !results
          // !(await bcrypt.compare(req.body.password, results[0].password))
        ) {
          res.status(401).json({
            message: "Email or Password is incorrect",
          });
        } else {
          const accesstoken = createAccessToken(results.Id);
          const refreshtoken = createRefreshToken(results.Id);
          results.refreshtoken = refreshtoken;
          sendRefreshToken(res, refreshtoken);
          sendAccessToken(req, res, accesstoken, results[0].role);
        }
      }
    );

    db.query(
      "SELECT * FROM mentor WHERE email = ?",
      [email],
      async (error, results) => {
        if (
          !results
          // !(await bcrypt.compare(req.body.password, results[0].password))
        ) {
          res.status(401).json({
            message: "Email or Password is incorrect",
          });
        } else {
          const accesstoken = createAccessToken(results.Id);
          const refreshtoken = createRefreshToken(results.Id);
          results.refreshtoken = refreshtoken;
          sendRefreshToken(res, refreshtoken);
          sendAccessToken(
            req,
            res,
            accesstoken,
            results[0].role
          );

        }
      }
    );

    db.query(
      "SELECT * FROM administrator WHERE email = ?",
      [email],
      async (error, results) => {
        if (
          !results
          // !(await bcrypt.compare(req.body.password, results[0].password))
        ) {
          res.status(401).json({
            message: "Email or Password is incorrect",
          });
        } else {
          const accesstoken = createAccessToken(results.Id);
          const refreshtoken = createRefreshToken(results.Id);
          results.refreshtoken = refreshtoken;
          sendRefreshToken(res, refreshtoken);
          sendAccessToken(
            req,
            res,
            accesstoken,
            results[0].role,
            results[0].location
          );
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.send("User doesn't exist.");
  }
};



//signup function for investors
exports.signup = (req, res) => {

  const { firstName, lastName, email, password, confirmPassword } = req.body;

  //hinder sql injection by allowing each person to use only one email address
  db.query(
    "SELECT email FROM beneficiary WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (
        !email ||
        !password ||
        !firstName ||
        !lastName ||
        !password ||
        !confirmPassword
      ) {
        res.status(400).json({
          message: "All fields are required",
        });
        console.log("All fields required");
        return;
      }
      if (results.length > 0) {
        //prevent use of an email already in the db
        res.status(400).json({
          message: "Email exists",
        });
        return;
      }
      if (password !== confirmPassword) {
        res.status(400).json({
          message: "Passwords do not match",
        });
        return;
      }
      //do 10 runds of hashing
      //let hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO beneficiary SET ?",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            //console.log(results);
            res.status(201).json({
              results,
            });
          }
        }
      );
    }
  );
};

exports.order = (req, res) => {
  const { fullname, email, location, packtype } = req.body;

  if (!fullname || !email || !location || !packtype) {
    res.status(400).json({
      message: "All fields are required",
    });
    console.log("All fields are required");
    return;
  }

  db.query(
    "INSERT INTO packageOrder SET ?",
    {
      fullName: fullname,
      email: email,
      location: location,
      type: packtype,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).json({
          results,
        });
      }
    }
  );
};

exports.donations = (req, res) => {
  const { fullname, email, phone, date, transcode, amount } = req.body;

  if (!fullname || !email || !phone || !date || !transcode || !amount) {
    res.status(400).json({
      message: "All fields are required",
    });
    console.log("All fields are required");
    return;
  }

  db.query(
    "INSERT INTO donations SET ?",
    {
      fullName: fullname,
      email: email,
      date: date,
      transcode: transcode,
      amount: amount,
    },
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).json({
          results,
        });
      }
    }
  );
};

//get a new access token with a refresh token
exports.refreshtoken = (req, res) => {
  const token = req.cookies.refreshtoken;

  if (!token) return res.send("No refreshtoken"); //res.send({ accesstoken: "" });

  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.send("Invalid token"); //res.send({ accesstoken: "" });
  }

  db.query(
    "SELECT * FROM beneficiary WHERE email = ?",
    [email],
    async (error, results) => {
      if (results.id === payload.userId) {
        if (!results) {
          return res.send({ accesstoken: "" });
        }
        if (results.refreshtoken !== token) {
          return res.send({ accesstoken: "" });
        }
      } else {
        const accesstoken = createAccessToken(results.Id);
        const refreshtoken = createRefreshToken(results.Id);
        //store in db
        results[0].refreshtoken = refreshtoken;

        sendRefreshToken(res, refreshtoken);
        return res.send({ accesstoken });
      }
    }
  );
};

exports.signup = (req, res) => {
  console.log(req.body);

  const { firstName, lastName, email, password, confirmPassword } = req.body;

  //hinder sql injection by allowing each person to use only one email address
  db.query(
    "SELECT email FROM beneficiary WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (
        !email ||
        !password ||
        !firstName ||
        !lastName ||
        !password ||
        !confirmPassword
      ) {
        res.status(400).json({
          message: "All fields are required",
        });
        console.log("All fields required");
        return;
      }
      if (results.length > 0) {
        //prevent use of an email already in the db
        res.status(400).json({
          message: "Email exists",
        });
        return;
      }
      if (password !== confirmPassword) {
        res.status(400).json({
          message: "Passwords do not match",
        });
        return;
      }
      //do 10 runds of hashing
      //let hashedPassword = await bcrypt.hash(password, 10);

      db.query(
        "INSERT INTO beneficiary SET ?",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            //console.log(results);
            res.status(201).json({
              results,
            });
          }
        }
      );
    }
  );
};
