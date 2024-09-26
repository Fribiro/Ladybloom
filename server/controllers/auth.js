const mysql = require("mysql2");
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
const Beneficiary = require("../models/Beneficiary");
const Mentor = require("../models/Mentor");
const LocalAuthority = require("../models/LocalAuthority");
const User = require("../models/User");
const Role = require("../models/Role");

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Please provide an email and password",
      });
      return;
    }

    try {
      const user = await User.findOne({ where: { UserEmail: email } });
      if (!user) throw new Error("User does not exist.");

      const accesstoken = createAccessToken(user.UsersId);
      const refreshtoken = createRefreshToken(user.UsersId);

      await User.update(
        { UserToken: refreshtoken },
        { where: { UserEmail: email } }
      );
      //console.log(user);

      sendRefreshToken(res, refreshtoken);
      sendAccessToken(req, res, accesstoken, user.UsersId, user.UserRole);
    } catch (err) {
      res.send({
        error: `${err.message}`,
      });
    }

    // db.query(
    //   "SELECT * FROM beneficiary WHERE email = ?",
    //   [email],
    //   async (error, results) => {
    //     //bcryptcompare compares the password being typed with the one in the db
    //     if (
    //       !results
    //       // !(await bcrypt.compare(req.body.password, results[0].password))
    //     ) {
    //       res.status(401).json({
    //         message: "Email or Password is incorrect",
    //       });
    //     } else {
    //       const accesstoken = createAccessToken(results.id);
    //       const refreshtoken = createRefreshToken(results.id);
    //       results.refreshtoken = refreshtoken;
    //       sendRefreshToken(res, refreshtoken);
    //       sendAccessToken(req, res, accesstoken, results[0].role);
    //     }
    //   }
    // );

    // db.query(
    //   "SELECT * FROM mentor WHERE email = ?",
    //   [email],
    //   async (error, results) => {
    //     if (
    //       !results
    //       // !(await bcrypt.compare(req.body.password, results[0].password))
    //     ) {
    //       res.status(401).json({
    //         message: "Email or Password is incorrect",
    //       });
    //     } else {
    //       const accesstoken = createAccessToken(results.id);
    //       const refreshtoken = createRefreshToken(results.id);
    //       results.refreshtoken = refreshtoken;
    //       sendRefreshToken(res, refreshtoken);
    //       sendAccessToken(
    //         req,
    //         res,
    //         accesstoken,
    //         results[0].role
    //       );

    //     }
    //   }
    // );

    // db.query(
    //   "SELECT * FROM administrator WHERE email = ?",
    //   [email],
    //   async (error, results) => {
    //     if (
    //       !results
    //       // !(await bcrypt.compare(req.body.password, results[0].password))
    //     ) {
    //       res.status(401).json({
    //         message: "Email or Password is incorrect",
    //       });
    //     } else {
    //       const accesstoken = createAccessToken(results.id);
    //       const refreshtoken = createRefreshToken(results.id);
    //       results.refreshtoken = refreshtoken;
    //       sendRefreshToken(res, refreshtoken);
    //       sendAccessToken(
    //         req,
    //         res,
    //         accesstoken,
    //         results[0].role,
    //         results[0].location
    //       );
    //     }
    //   }
    // );
  } catch (error) {
    res.send({
      error: `${err.message}`,
    });
  }
};

//signup function
exports.signup = async (req, res) => {
  try {
    const { firstName, lastName, userRole, email, password } = req.body;

    //validation
    if (!firstName) return res.status(400).send("First name is required");
    if (!lastName) return res.status(400).send("Last name is required");
    if (!userRole) return res.status(400).send("Role is required");
    if (!email) return res.status(400).send("Email is required");
    if (!password) return res.status(400).send("Password is required");

    if (!password || password.length < 6) {
      return res
        .status(400)
        .send("password is required and should be min 6 characters long");
    }
    
    let role = await Role.findOne({ where: { RoleName: userRole } });

    const user = await User.create({
      UserEmail: email,
      UserPassword: password,
      UserRole: role.RoleId,
    });
    console.log('User created',user);
    let userSignup;

    const userData = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
    };
    console.log('User.userRole', user.UserRole);
    
    switch (user.UserRole) {
      case '6':
        userSignup = await LocalAuthority.create(userData);
        await user.setLocalAuthority(userSignup);
        break;
      case '5':
        userSignup = await Mentor.create(userData);
        await user.setMentor(userSignup);
        break;
      default:
        userSignup = await Beneficiary.create(userData);
        await user.setBeneficiary(userSignup);
        break;
    }

    res.status(201).send({ user, userSignup });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error. Try again.");
  }

  //hinder sql injection by allowing each person to use only one email address
  // db.query(
  //   "SELECT email FROM beneficiary WHERE email = ?",
  //   [email],
  //   async (error, results) => {
  //     if (error) {
  //       console.log(error);
  //     }
  //     if (
  //       !email ||
  //       !password ||
  //       !firstName ||
  //       !lastName ||
  //       !password ||
  //       !confirmPassword
  //     ) {
  //       res.status(400).json({
  //         message: "All fields are required",
  //       });
  //       console.log("All fields required");
  //       return;
  //     }
  //     if (results.length > 0) {
  //       //prevent use of an email already in the db
  //       res.status(400).json({
  //         message: "Email exists",
  //       });
  //       return;
  //     }
  //     if (password !== confirmPassword) {
  //       res.status(400).json({
  //         message: "Passwords do not match",
  //       });
  //       return;
  //     }
  //     //do 10 runds of hashing
  //     //let hashedPassword = await bcrypt.hash(password, 10);

  //     db.query(
  //       "INSERT INTO beneficiary SET ?",
  //       {
  //         firstName: firstName,
  //         lastName: lastName,
  //         email: email,
  //         password: password,
  //       },
  //       (error, results) => {
  //         if (error) {
  //           console.log(error);
  //         } else {
  //           //console.log(results);
  //           res.status(201).json({
  //             results,
  //           });
  //         }
  //       }
  //     );
  //   }
  // );
};

// exports.order = (req, res) => {
//   const { fullname, email, location, packtype } = req.body;

//   if (!fullname || !email || !location || !packtype) {
//     res.status(400).json({
//       message: "All fields are required",
//     });
//     console.log("All fields are required");
//     return;
//   }

//   db.query(
//     "INSERT INTO packageOrder SET ?",
//     {
//       fullName: fullname,
//       email: email,
//       location: location,
//       type: packtype,
//     },
//     (error, results) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.status(201).json({
//           results,
//         });
//       }
//     }
//   );
// };

// exports.donations = (req, res) => {
//   const { fullname, email, phone, date, transcode, amount } = req.body;

//   if (!fullname || !email || !phone || !date || !transcode || !amount) {
//     res.status(400).json({
//       message: "All fields are required",
//     });
//     console.log("All fields are required");
//     return;
//   }

//   db.query(
//     "INSERT INTO donations SET ?",
//     {
//       fullName: fullname,
//       email: email,
//       date: date,
//       transcode: transcode,
//       amount: amount,
//     },
//     (error, results) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.status(201).json({
//           results,
//         });
//       }
//     }
//   );
// };

//get a new access token with a refresh token
exports.refreshtoken = async (req, res) => {
  const token = req.cookies.refreshtoken;

  if (!token) return res.send("No refreshtoken");

  let payload = null;
  try {
    payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
  } catch (err) {
    return res.send("Invalid token");
  }

  const user = await User.findOne({ where: { UsersId: payload.userId } });

  if (!user) {
    return res.send("User not found!");
  }
  if (user.UserToken !== token) {
    return res.send("Invalid token...");
  }
  const accesstoken = createAccessToken(User.UsersId);
  const refreshtoken = createRefreshToken(User.UsersId);
  await User.update(
    { UserToken: refreshtoken },
    { where: { UserEmail: user.UserEmail } }
  );

  sendRefreshToken(req, res, refreshtoken);
  const { UserEmail, UserRole } = user;
  return res.send({ accesstoken, refreshtoken, UserEmail, UserRole });

  // db.query(
  //   "SELECT * FROM beneficiary WHERE email = ?",
  //   [email],
  //   async (error, results) => {
  //     if (results.id === payload.userId) {
  //       if (!results) {
  //         return res.send({ accesstoken: "" });
  //       }
  //       if (results.refreshtoken !== token) {
  //         return res.send({ accesstoken: "" });
  //       }
  //     } else {
  //       const accesstoken = createAccessToken(results.Id);
  //       const refreshtoken = createRefreshToken(results.Id);
  //       //store in db
  //       results[0].refreshtoken = refreshtoken;

  //       sendRefreshToken(res, refreshtoken);
  //       return res.send({ accesstoken });
  //     }
  //   }
  // );
};

// exports.signup = (req, res) => {
//   console.log(req.body);

//   const { firstName, lastName, email, password, confirmPassword } = req.body;

//   //hinder sql injection by allowing each person to use only one email address
//   db.query(
//     "SELECT email FROM beneficiary WHERE email = ?",
//     [email],
//     async (error, results) => {
//       if (error) {
//         console.log(error);
//       }
//       if (
//         !email ||
//         !password ||
//         !firstName ||
//         !lastName ||
//         !password ||
//         !confirmPassword
//       ) {
//         res.status(400).json({
//           message: "All fields are required",
//         });
//         console.log("All fields required");
//         return;
//       }
//       if (results.length > 0) {
//         //prevent use of an email already in the db
//         res.status(400).json({
//           message: "Email exists",
//         });
//         return;
//       }
//       if (password !== confirmPassword) {
//         res.status(400).json({
//           message: "Passwords do not match",
//         });
//         return;
//       }
//       //do 10 runds of hashing
//       //let hashedPassword = await bcrypt.hash(password, 10);

//       db.query(
//         "INSERT INTO beneficiary SET ?",
//         {
//           firstName: firstName,
//           lastName: lastName,
//           email: email,
//           password: password,
//         },
//         (error, results) => {
//           if (error) {
//             console.log(error);
//           } else {
//             //console.log(results);
//             res.status(201).json({
//               results,
//             });
//           }
//         }
//       );
//     }
//   );
// };
