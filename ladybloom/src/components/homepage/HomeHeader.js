import React from "react";
import styled from "styled-components";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Headerhome = styled.div`
  height: 89vh;
  margin-top: 11vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to bottom left,
    rgb(255, 255, 255) 50%,
    rgb(241, 148, 138) 50%
  );

  & .headerLeft {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3rem;
    flex-direction: column;
  }

  & .headerLeft h3 {
    font-family: "Abril Fatface", cursive;
    padding-top: 1rem;
  }

  & .headerLeft h3 span {
    font-family: "Abril Fatface", cursive;
    color: rgb(255, 255, 255);
  }

  & .headerLeft button {
    font-family: "Abril Fatface", cursive;
    background-color: rgb(255, 255, 255);
    color: rgb(241, 148, 138);
    outline: none;
    border: none;
    margin-left: 3rem;
    align-self: flex-start;
    font-size: 1.2rem;
    width: 9rem;
    height: 3rem;
    border-radius: 4rem;
  }

  & .headerLeft p {
    padding-left: 3rem;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }

  & .headerRight {
    padding-top: 4rem;
    padding-left: 9rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: row;
  }

  & .frontImg,
  .leftImg,
  .rightImg {
    height: 90%;
    position: relative;
  }

  & .frontImg img,
  .leftImg img,
  .rightImg img {
    height: 70%;
    border-bottom: black;
  }

  & .leftImg {
    align-self: flex-start;
  }

  & .frontImg {
    align-self: flex-end;
  }

  & .rightImg {
    align-self: flex-start;
  }

  & .frontImg .shadow {
    background: #000;
    border-radius: 100%;
  }

  ${media.mobile} {
    height: 30vh;
  }
  ${media.tablet} {
    height: 40vh;
    margin-top: 7vh;
  }
`;


const Homeheader = () => {
    return (
      <Headerhome>
        <div className="headerLeft">
          <h3>
            Creating <span>Menstrual Hygiene</span> Awareness
          </h3>
          <p>
            Get numerous resources partaining to menstrual hygiene, as well as
            expert advice from our pool of mentors. Let us work to end the
            stigma around menstrual health and ensure that every girl or lady
            has access to menstrual products.
          </p>
          <button>More Info</button>
        </div>
        <div className="headerRight">
          <div className="leftImg">
            <img src="./img/svg/left.svg" alt="" />
          </div>
          <div className="frontImg">
            <img src="./img/svg/raised.svg" alt="" />
            <div className="shadow"></div>
          </div>
          <div className="rightImg">
            <img src="./img/svg/right.svg" alt="" />
          </div>
        </div>
      </Headerhome>
    );
}

export default Homeheader;