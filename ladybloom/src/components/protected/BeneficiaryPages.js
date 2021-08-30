import React, { useState, useEffect } from "react";
import ProtectedHeader from "./ProtectedHeader.style";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/user";
import Axios from "axios";
import $ from "jquery";
import { MentorWrapper } from "./Mentors.style";
import { LocalAuthorityWrapper } from "./LocalAuthority.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BeneficiaryWrapper } from "./Beneficiary.style";

const BeneficiaryPages = () => {
  const [visible, setVisible] = useState(true);
  const [users, setUsers] = useState([]);
  const [userdetails, setUserdetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const user = useSelector(selectUser);
  if (!user.accesstoken) {
    return <Redirect from="" to="login" noThrow />;
  }

  const getUser = (id) => {
    Axios.get("http://localhost:5500/investor").then((res) => {
      console.log(res.data);
      setUserdetails(res.data[0]);
      $("#myModal").modal("show");
    });
  };
  // useEffect(() => {
  //   Axios.get("http://localhost:5500/investor").then((res) => {
  //     console.log(res.data);
  //     setUsers(res.data);
  //     //console.log(users);
  //   });
  // }, []);
  const updateUsers = (id) => {
    Axios.put("http://localhost:5500/investorupdate", {}).then((res) => {
      setUsers(
        users.map((val) => {
          return val.id === id
            ? {
                firstName: val.firstName,
                lastName: val.lastName,
                email: val.email,
              }
            : val;
        })
      );
      $("#editmodal").modal("show");
    });
  };
  const handleChange = (value) => {
    setSearchText(value);
    filterUsers(value);
  };

  const excludeColumns = [
    "id",
    "investmentRange",
    "location ",
    "expertise ",
    "phone",
    "gender",
    "profession",
    "nationalId ",
    "street ",
    "town",
    "address",
    "county ",
    "postalCode",
  ];

  const filterUsers = (value) => {
    Axios.get("http://localhost:5500/investor").then((res) => {
      //console.log(res.data);
      //setUsers(res.data);

      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") {
        setUsers(res.data);
      } else {
        const filterUsers = users.filter((item) => {
          return Object.keys(item).some((key) => {
            return excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue);
          });
        });
        setUsers(filterUsers);
      }
    });
  };
  return (
    <BeneficiaryWrapper>
      <Header />
      <ProtectedHeader
        loantitle={"Beneficiary"}
        loanHeadLink={"Beneficiary"}
      ></ProtectedHeader>
      <input
        style={{
          marginLeft: 5,
          textAlign: "center",
          marginLeft: "70%",
          border: "none",
          borderBottom: "1px solid rgb(241, 148, 138)",
          marginTop: "1rem",
          outline: "none",
        }}
        type="text"
        placeholder="Search for area administrator..."
        value={searchText}
        className="text-align-center"
        onChange={(e) => handleChange(e.target.value)}
      />
      <section className="testimonials">
        <div className="testimonial-container">
          <h2>Beneficiary</h2>
          <p></p>
          <div className="row">
            {users.map((val, key) => {
              return (
                <div className="iCardinv col-md-3 text-center" key={key}>
                  <div className="profile">
                    <img
                      src="/img/user2.jpg"
                      alt=""
                      className="user justify-content-center"
                    />
                    <div className="text-center">
                      <h6
                        style={{ color: "#333" }}
                        className="name justify-content-center"
                      >
                        {val.firstName} {val.lastName}
                      </h6>
                      <p class="location justify-content-center">
                        <FontAwesomeIcon icon="map-marker-alt" />
                        {val.location}
                      </p>
                    </div>
                    <div class="text-center">
                      {/* <span class="total d-block pt-2">Investment Range</span> */}
                      <span className="amt-range">{val.investmentRange}</span>
                    </div>
                    <div class="text-center expertise">
                      <span>Expertise</span>
                      <p>{val.expertise}</p>
                    </div>
                    <div className="viewmore text-center align-items-center d-flex justify-content-center pt-2 pb-2">
                      <Link to="InvViewProfile">
                        <span className="details">View Details</span>
                        {/* <Icon className="arrow-right" icon={arrowRight} /> */}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="clearboth"></div>
            {users.length === 0 && <span>No records found to display!</span>}
          </div>
        </div>
      </section>
      <Footer />
    </BeneficiaryWrapper>
  );
};

export default BeneficiaryPages;
