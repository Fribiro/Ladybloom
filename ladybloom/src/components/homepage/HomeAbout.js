import React from 'react'
import styled from 'styled-components'

const HomeAboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 15rem;

  & .left-about {
    position: relative;
  }

  & .left-bg {
    width: 14rem;
    height: 14rem;
    z-index: 0;
    position: relative;
    border: 0.3rem solid rgb(241, 148, 138);
  }

  & .left-img {
    width: 14rem;
    height: 14rem;
    z-index: 1;
    position: absolute;
    margin: -2rem -2rem 0 2rem;
  }

  & .left-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }

  & .right-about {
    margin-left: 4rem;
  }

  & .right-about h2 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }
  & .right-about span {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
  }
  & .right-about p {
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }
`;

const HomeAbout = () => {
    return (
      <HomeAboutWrapper>
        <div className="left-about">
          <div className="left-img">
            <img src="./img/lady.jpg" alt="" />
          </div>
          <div className="left-bg"></div>
        </div>
        <div className="right-about">
          <h2>
            Our <span>Founder</span>
          </h2>
          <p>Ladybloom was founded by Virginiah Ng'ang'a who has a passion in matters partaining to menstrual health. Her goal is to put an end to the stigma sorrounding menstrual health and empower young ladies and women to embrace the former. She partnered with various people and organizations to help her realize her dream through Ladybloom. Together they set out to offer civic education on menstrual health as well as dispense various menstrual packages to needy girls and women.</p>
        </div>
      </HomeAboutWrapper>
    );
}

export default HomeAbout
