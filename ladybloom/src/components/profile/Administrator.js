import React, { useState, useEffect } from "react";
import Axios from "axios";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import UpdateProfile from "./UpdateProfile";
import { Link, Redirect } from "react-router-dom";
import { userSet } from "../../state/user";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/user";
import { AdministratorWrapper } from "./Administrator.style";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";

const Administrator = () => {
  const [visible, setVisible] = useState(true);
  const [users, setUsers] = useState([]);
  const user = useSelector(selectUser);
  const [menss, setMenss] = useState([]);
  const [area, setArea] = useState();

  useEffect(() => {
    console.log(user);
    Axios.get("http://localhost:5500/admin", {
      headers: {
        email: user.accesstoken.userEmail,
        location: user.accesstoken.area
      },
    }).then((res) => {
      setUsers(res.data);
      setArea(user.accesstoken.area);
      //console.log(area)
    });
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:5500/apackageorder", {
      headers: {
        email: user.accesstoken.userEmail,
        location: user.accesstoken.area
      },
    }).then((res) => {
      setMenss(res.data);
      //console.log(menss)
    });
  }, []);

  const administratorProfile = users.length ? users[0] : null;


  if (!user.accesstoken) {
    return <Redirect from="" to="login" noThrow />;
  }

  return (
    <AdministratorWrapper>
      <Header />
      {administratorProfile && (
        <div className="userProfile">
          <div className="profileNav row">
            <div className="userHeader">
              <img
                className="rounded-circle z-depth-2"
                src="/img/user2.jpg"
                alt=""
              />
              {/* <Avatar size={100} /> */}
            </div>
            <div className="userNav">
              <ul className="sideheaders">
                <li>
                  {administratorProfile.firstName}{" "}
                  {administratorProfile.lastName}
                </li>
                <li>{administratorProfile.occupation}</li>
                <li>{administratorProfile.location}</li>
                <li>{administratorProfile.email}</li>
              </ul>
            </div>
          </div>
          {visible && (
            <div className="profile-details">
              <div className="parent row">
                <div className="col-md-6">
                  <div className="profile-head">
                    <h5>
                      {administratorProfile.firstName}{" "}
                      {administratorProfile.lastName}
                    </h5>
                    <h6>{administratorProfile.occupation}</h6>
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Edit Profile"
                    onClick={() => {
                      setVisible(false);
                    }}
                  />
                </div>
              </div>
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Address
                  </a>
                </li>
              </ul>

              <div className="row">
                <div className="col-md-8">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6 profile-sub-headers">
                          <label>Personal Details</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Name</label>
                        </div>
                        <div className="col-md-6">
                          <p>
                            {administratorProfile.firstName}{" "}
                            {administratorProfile.lastName}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Email</label>
                        </div>
                        <div className="col-md-6">
                          <p>{administratorProfile.email}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>National ID</label>
                        </div>
                        <div className="col-md-6">
                          <p>24098674</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Gender</label>
                        </div>
                        <div className="col-md-6">
                          <p>Male</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Phone</label>
                        </div>
                        <div className="col-md-6">
                          <p>123 456 7890</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Profession</label>
                        </div>
                        <div className="col-md-6">
                          <p>{administratorProfile.occupation}</p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="profile"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6 profile-sub-headers">
                          <label>Address Details</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Street</label>
                        </div>
                        <div className="col-md-6">
                          <p>Kimathi</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Town</label>
                        </div>
                        <div className="col-md-6">
                          <p>Ruiru</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>City</label>
                        </div>
                        <div className="col-md-6">
                          <p>Nairobi</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Address</label>
                        </div>
                        <div className="col-md-6">
                          <p>98674</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>Postal Code</label>
                        </div>
                        <div className="col-md-6">
                          <p>00100</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <label>County</label>
                        </div>
                        <div className="col-md-6">
                          <p>Nairobi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        <div className="order-table">
          <div className="left-order"></div>
          <div className="right-order"></div>
        </div>
          <div className="row">
              <div className="container mb-5 mt-5 text-left">
                <table class="table table-hover table-bordered">
                  <thead>
                    <tr>
                      <th>Fullname</th>
                      <th>Email</th>
                      <th>Location</th>
                      <th>Package Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menss.map((val, key) => {
                      return (
                        <tr key={key}>
                          <td>{val.fullName}</td>
                          <td>{val.email}</td>
                          <td>{val.location}</td>
                          <td>{val.type}</td>
                          <td>{val.status}</td>
                          <td><button className='issueBtn'>Issue</button></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
          </div>
          {!visible ? <UpdateProfile /> : null}
        </div>
      )}
      <Footer />
    </AdministratorWrapper>
  );
};

export default Administrator;
