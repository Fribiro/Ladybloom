import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import UpdateProfile from "./UpdateProfile";
import { Link, Redirect } from "react-router-dom";
import { userSet } from "../../state/user";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/user";

const BeneficiaryWrapper = styled.div`
  .userProfile {
    display: grid;
    grid-template-columns: 20% 80%;
    margin: 8rem 0 4rem 40px;
  }

  .profileNav {
    grid-column: 1;
    grid-row: 1;
    height: 400px;
    background-color: #efefef;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    width: 240px;
    justify-content: center;
  }
  .profileNavClickable {
    cursor: pointer;
  }
  .userHeader {
    border-radius: 50%;
    border: 1px solid #000;
    height: 150px;
    width: 150px;
    align-self: center;
    margin: 20px 0 0 0;
    padding: 0;
  }

  .userHeader img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: brightness(60%);
  }

  .userNav {
    padding: 0;
  }

  .usernav,
  ul {
    list-style: none;
    padding-left: 60px;
  }

  .usernav,
  ul li {
    padding: 5px 0;
  }
  .sideheaders {
    font-family: "Abril Fatface", cursive;
  }
  .profileDetails {
    grid-column: 2;
    grid-row: 1;
    margin-left: 10px;
    background-color: #efefef;
    padding: 30px 0px 0 60px;
  }

  .profile-head h5 {
    color: #333;
  }

  .profile-head h6 {
    color: rgb(241, 148, 138);
  }

  .profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 30%;
    padding: 2%;
    background-color: rgb(241, 148, 138);
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-left: 260px;
  }
  .profile-sub-headers {
    margin: 10px 0;
    font-weight: bold;
  }

  .profile-head .nav-tabs {
    margin-bottom: 0;
  }

  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }

  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 2px solid rgb(241, 148, 138);
  }

  .profile-tab label {
    font-weight: 600;
  }

  .profile-tab p {
    font-weight: 600;
    color: rgb(241, 148, 138);
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
  }
  .nav-tabs {
    border-bottom: 0;
  }

  .nav-item a:focus {
    background: rgb(241, 148, 138);
    color: #fff;
  }
`;

const Beneficiary = () => {
  const [visible, setVisible] = useState(true);
  const [users, setUsers] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log(user);
    Axios.get(`http://localhost:5500/ladybloom/benef/${user.accesstoken.user}`, {
      headers: {
        email: user.accesstoken.userEmail,
      },
    }).then((res) => {
      debugger
      console.log(res.data);
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  if (!user.accesstoken) {
    return <Redirect from="" to="login" noThrow />;
  }

  return (
    <BeneficiaryWrapper>
      <Header />
      {users.map((val, key) => {
        return (
          <div className="userProfile" key={key}>
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
                    {val.firstName} {val.lastName}
                  </li>
                  <li>{val.location}</li>
                  <li>{val.email}</li>
                </ul>
              </div>
            </div>
            {visible && (
              <div className="profile-details">
                <div className="parent row">
                  <div className="col-md-6">
                    <div className="profile-head">
                      <h5>
                        {val.firstName} {val.lastName}
                      </h5>
                      <h6>Web Developer and Designer</h6>
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
                              {val.firstName} {val.lastName}
                            </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Email</label>
                          </div>
                          <div className="col-md-6">
                            <p>{val.email}</p>
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
                            <p>Web Developer and Designer</p>
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
            {!visible ? <UpdateProfile /> : null}
          </div>
        );
      })}
      <Footer />
    </BeneficiaryWrapper>
  );
}

export default Beneficiary
