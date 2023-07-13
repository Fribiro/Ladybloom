const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

const cors = require("cors");
const cookieParser = require("cookie-parser");

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-access-token, Content-Type, Accept"
  );
  next();
});

//allow the client to communicate with the api
const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));

//parse URL encoded bodies as sent by HTML forms. Enables us to grab data from any form
app.use(
  express.urlencoded({
    extended: false,
  })
);
//Parse JSON bodies as sent by API clients
app.use(express.json());

app.use(cookieParser());

//get all routes from the routes folder
readdirSync('./routes').map((r) => app.use('/ladybloom', require(`./routes/${r}`)));
app.use(express.static("public"));
app.use(express.static("upload"));

const publicDirectory = path.join(__dirname, "public");
app.use(express.static(publicDirectory));

//create respective tables from models
const user = require('./models/User');
const role = require('./models/Role');
const beneficiary = require('./models/Beneficiary');
const mentor = require('./models/Mentor');
const localAuthority = require('./models/LocalAuthority');

//one to may relationship
role.hasMany(user, {
  foreignKey: 'userId'
});

user.belongsTo(role);

user.hasOne(beneficiary, {
  foreignKey: 'beneficiaryId',
});

beneficiary.belongsTo(user);

user.hasOne(mentor, {
  foreignKey: 'mentorId',
});

mentor.belongsTo(user);

user.hasOne(localAuthority, {
  foreignKey: 'localAuthorityId'
});

localAuthority.belongsTo(user);

user.sync();
role.sync();
beneficiary.sync();
mentor.sync();
localAuthority.sync();

const PORT = process.env.PORT || 5501;

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
