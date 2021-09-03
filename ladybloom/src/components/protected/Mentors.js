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
import { selectMentors, selectUser ,mentorsSet} from "../../state/user";
import Axios from "axios";
import $ from "jquery";
import { MentorWrapper } from "./Mentors.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

const Mentors = () => {
  const [visible, setVisible] = useState(true);
  // const [mentors, setUsers] = useState([]);
  const [userdetails, setUserdetails] = useState([]);
  const [searchText, setSearchText] = useState("");
  const currentUser = useSelector(selectUser);
const mentors = useSelector(selectMentors);
const dispatch = useDispatch()

  useEffect(() => {
    Axios.get("http://localhost:5500/mentor").then((res) => {
      console.log(res.data);
      dispatch(mentorsSet(res.data))
      //console.log(users);
    });
  }, []);

  if (!currentUser.accesstoken) {
    return <Redirect from="" to="login" noThrow />;
  }

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
      dispatch(mentorsSet(res.data));
      } else {
        const filterUsers = mentors.filter((item) => {
          return Object.keys(item).some((key) => {
            return excludeColumns.includes(key)
              ? false
              : item[key].toString().toLowerCase().includes(lowercasedValue);
          });
        });
        dispatch(mentorsSet(filterUsers));
      }
    });
  };

  // const submitId = (e) => {
  //   e.preventDefault();
  //   Axios.post("http://localhost:5500/auth/single", {})
  //     .then((res) => {
  //       setUsers(
  //         users.map((val) => {
  //           return val.id === id
  //             ? {
  //                 id: val.id,
  //               }
  //             : val;
  //         })
  //       );
  //     })
  //     .then(
  //       (res) => {
  //         dispatch(userSet(res.data.accesstoken));
  //         setRedirect("/mentor-page");
  //       },
  //       (err) => {
  //         setMessage(err.response.data.message);

  //         //dispatch(userSet(null));
  //       }
  //     );
  // };

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
            {mentors.map((val, key) => {
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
                      <Link to="/mentors/{val.id}">
                        <span className="details">View Details</span>
                        {/* <Icon className="arrow-right" icon={arrowRight} /> */}
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="clearboth"></div>
            {mentors.length === 0 && <span>No records found to display!</span>}
          </div>
        </div>
      </section>
      <Footer />
    </MentorWrapper>
  );
}

export default Mentors
