import React, { useState,useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { PageBody, PageMain, PageTitle } from "./ProfileLayout.style";
import ProfileSidebar from "./ProfileSidebar.style";
import PageHeader from "./PageHeader.style";
import { Link, Redirect, useParams } from "react-router-dom";
import { userSet } from "../../state/user";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/user";


const MentorPage = () => {
  const [sent, setSent] = useState(false);
  const [text, setText] = useState("");
  const [info, setInfo] = useState("");
  const user = useSelector(selectUser);
  const {id} = useParams()
  const [visible, setVisible] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(user);
    Axios.get(`http://localhost:5500/singlementor`,{
      headers: {
        id
      },

    }).then((res) => {
      console.log(res.data);
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(id)
  if (!user.accesstoken) {
    return <Redirect from="" to="login" noThrow />;
  }

  const handleSend = async (e) => {
    setSent(true);
    try {
      await Axios.post("http://localhost:5500/auth/send_mail", {
        text,
        info,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const mentor = users.length ? users[0] : null;

  return (
    <div>
      <Header />
      <PageHeader
        pagetitle={"Mentor Profile"}
        pageHeadLink={"Mentors"}
      ></PageHeader>
      <PageMain>
        <PageBody>
          <div className="assetWrapper">
            <div className="leftAsset">
              <PageTitle>
                <h5>Summary</h5>
              </PageTitle>
              <div className="assetText">
                <p>
                  I’ve always had a love of science, and reproductive
                  endocrinology is full of cutting-edge scientific advancements.
                  Reproductive endocrinology is a perfect blend of clinical
                  care, procedures, and science, and at the end of the day I
                  don’t just make patients feel better — I get to make them
                  really happy!
                </p>
                <h5>My Goal</h5>
                <ul>
                  <li>End period stigma in the society.</li>
                  <li>
                    End stigma around premenstrual stress and enourage
                    women/girls to speak out.
                  </li>
                  <li>
                    Ensure all girls and women have access to the right
                    menstrual products.
                  </li>
                  <li>
                    Educate ladies on how to maintain proper menstrual hygiene.
                  </li>
                  <li>
                    Reach girls and women in remote areas who may not get access
                    to the right menstrual products.
                  </li>
                  <li>
                    Offer any form of support to ladies whether young or old on
                    matters partaining to menses.
                  </li>
                </ul>
              </div>
            </div>
            <div className="rightAsset">
              {mentor && (
                <ProfileSidebar
                  name={mentor.firstName + " " + mentor.lastName}
                  email={mentor.email}
                  location={mentor.location}
                />
              )}
            </div>
          </div>
        </PageBody>
        <div className="query">
          {!sent ? (
            <form style={{ margin: "0 4rem 4rem 4rem" }} onSubmit={handleSend}>
              <div class="form-group">
                <label
                  for="exampleInputEmail1"
                  style={{ fontFamily: "Poppins" }}
                >
                  Any questions partaining to menstrual hygiene are welcome.
                </label>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Full Name"
                  value={text}
                  style={{
                    width: "23.9rem",
                    fontFamily: "Poppins",
                    outline: "none",
                  }}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <div class="form-group">
                <textarea
                  name="message"
                  id="contactform"
                  cols="40"
                  rows="5"
                  placeholder="Type your question here ..."
                  value={info}
                  style={{ fontFamily: "Poppins", outline: "none" }}
                  onChange={(e) => setInfo(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                style={{
                  backgroundColor: "rgb(241, 148, 138)",
                  border: "none",
                }}
              >
                Ask a Question(s)
              </button>
            </form>
          ) : (
            <h1>Email Sent</h1>
          )}
        </div>
      </PageMain>
      <Footer />
    </div>
  );
};;

export default MentorPage;
