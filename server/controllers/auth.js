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
      "SELECT * FROM entrepreneurSignupD WHERE email = ?",
      [email],
      async (error, results) => {
        //bcryptcompare compares the password being typed with the one in the db

        if (
          !results || (req.body.password !== results[0].password)
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
            sendAccessToken(req, res, accesstoken);
        }
        
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//signup function for investors
exports.signup = (req, res) => {
  console.log(req.body);

  const { firstName, lastName, email, password, confirmPassword } =
    req.body;

  //hinder sql injection by allowing each person to use only one email address
  db.query(
    "SELECT email FROM investorSignupD WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (!email || !password || !firstName || !lastName || !password || !confirmPassword) {
        res.status(400).json({
          message: "All fields are required",
        });
        console.log("All fields required")
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
        "INSERT INTO investorSignupD SET ?",
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
