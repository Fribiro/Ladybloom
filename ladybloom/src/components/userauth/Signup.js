import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { SignupWrapper } from "./Signup.style";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const strongPassword = RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);

export default class InvestorSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      message: "",
      redirect: null,
      accesstoken: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName = value.length < 3 ? "Min. 3 characaters" : "";
        break;
      case "lastName":
        formErrors.lastName = value.length < 3 ? "Min. 3 characaters" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password = strongPassword.test(value)
          ? ""
          : "Weak password";
        break;
      case "confirmPassword":
        formErrors.confirmPassword =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  addUser = (e) => {
    let formData = { ...this.state };
    console.log(formData.ifirstName);
    Axios.post("http://localhost:5500/auth/signup", {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    }).then(
      (res) => {
        if (res.status === 201) {
          this.setState({
            redirect: "/login",
          });
        }
      },
      (e) => {
        this.setState({
          message: e.response.data.message,
        });
      }
    );
  };

  showUsers = (e) => {
    Axios.get("http://localhost:5500/admin").then((results) => {});
  };

  render() {
    const { formErrors } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <SignupWrapper>
        <div className="root-container">
          <div
            className="box-container login"
            style={{ marginTop: "0 !important" }}
          >
            <div className="inner-container">
              <div className="header">Register</div>
              <div className="box">
                <div className="name-control">
                  <div className="input-group ">
                    <label htmlFor="firstName">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      className={
                        formErrors.firstName.length > 0 ? "error" : null
                      }
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                    {formErrors.firstName.length > 0 && (
                      <small className="danger-error">
                        {formErrors.firstName}
                      </small>
                    )}
                  </div>
                  <div className="input-group lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className={
                        formErrors.lastName.length > 0 ? "error" : null
                      }
                      placeholder="Last Name"
                      onChange={this.handleChange}
                    />
                    {formErrors.lastName.length > 0 && (
                      <small className="danger-error">
                        {formErrors.lastName}
                      </small>
                    )}
                  </div>
                </div>
                {/* <div className="input-group">
                  <label for="role">User Role</label>
                  <select id="role" name="role">
                    <option disabled selected value>
                      Select User Type
                    </option>
                    <option value="chief">Local Authority</option>
                    <option value="mentor">Mentor</option>
                    <option value="benefciary">Beneficiary</option>
                  </select>
                </div> */}
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <small className="danger-error">{formErrors.email}</small>
                  )}
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <small className="danger-error">
                      {formErrors.password}
                    </small>
                  )}
                </div>
                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className={
                      formErrors.confirmPassword.length > 0 ? "error" : null
                    }
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                {this.state.message && (
                  <small className="danger-error">{this.state.message}</small>
                )}
                <button
                  type="button"
                  className="login-btn"
                  onClick={this.addUser}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </SignupWrapper>
    );
  }
}