import React, { useState, useEffect } from "react";
import Header from '../navigation/Header'
import Footer from '../navigation/Footer'
import ProtectedHeader from './ProtectedHeader.style';
import { Icon } from "@iconify/react";
// import arrowRight from "@iconify-icons/mdi/arrow-right";
// import locationIcon from "@iconify-icons/codicon/location";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/user";
import Axios from "axios";
import $ from "jquery";
import { MentorWrapper } from "./Mentors.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Mentors = () => {
  const [visible, setVisible] = useState(true);
  const [users, setUsers] = useState([]);
  const [userdetails, setUserdetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const user = useSelector(selectUser);
  // if (!user.accesstoken) {
  //   return <Redirect from="" to="login" noThrow />;
  // }

  const getUser = (id) => {
    Axios.get("http://localhost:5500/mentor").then((res) => {
      console.log(res.data);
      setUserdetails(res.data[0]);
      $("#myModal").modal("show");
    });
  };
  useEffect(() => {
    Axios.get("http://localhost:5500/mentor").then((res) => {
      console.log(res.data);
      setUsers(res.data);
      //console.log(users);
    });
  }, []);
  const handleChange = (value) => {
    setSearchText(value);
    filterUsers(value);
  };

  const excludeColumns = ["id"];

  const filterUsers = (value) => {
    Axios.get("http://localhost:5500/mentor").then((res) => {
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
    <MentorWrapper>
      <Header />
      <ProtectedHeader
        protectedtitle={"Mentors"}
        protectedHeadLink={"Mentors"}
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
        placeholder="Search for mentors..."
        value={searchText}
        className="text-align-center"
        onChange={(e) => handleChange(e.target.value)}
      />
      <section className="testimonials">
        <div className="testimonial-container">
          <h2>Mentors</h2>
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
                      <span className="amt-range">{val.profession}</span>
                    </div>
                    <div class="text-center expertise">
                      <span>Interests</span>
                      <p>{val.interests}</p>
                    </div>
                    <div className="viewmore text-center align-items-center d-flex justify-content-center pt-2 pb-2">
                      <Link to="mentor-page">
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
    </MentorWrapper>
  );
}

export default Mentors
