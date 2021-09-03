import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const ProtectedHeaderWrapper = styled.div`
  width: 100%;
  height: 76vh;
  margin-top: 11vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & .ladyb-header-bgimg {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("/img/ladybloom/pad2.jpg");
    filter: brightness(60%);
    background: no repeat center center scroll;
    -webkit-background-size: cover;
    background-size: cover;
  }

  & .ladybTitleType {
    position: absolute;
    left: 6rem;
    z-index: 1;
    color: rgb(241, 148, 138);
    font-family: "Abril Fatface", cursive;
    padding-left: 1rem;
    border-left: 0.4rem solid rgb(241, 148, 138);
  }

  & .ladybHeadlink {
    position: absolute;
    top: 22rem;
    left: 4rem;
    z-index: 1;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Crimson Text", serif;
    padding-left: 1rem;
    font-size: 1.2rem;
  }

  & .ladybHeadlink a {
    color: rgba(255, 255, 255, 0.9);
    font-family: "Crimson Text", serif;
    padding-left: 1rem;
    font-size: 1.2rem;
    text-decoration: none;
  }

  ${media.mobile} {
    & .ladybTitleType {
      left: 2rem;
    }
    & .ladybHeadlink {
      left: 0;
    }

    & .ladybHeadlink a {
      color: rgba(255, 255, 255, 0.9);
      font-family: "Crimson Text", serif;
      padding-left: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
  ${media.tablet} {
    margin-top: 7vh;

    & .ladybTitleType {
      left: 2rem;
    }
    & .ladybHeadlink {
      top: 18rem;
      left: 0;
    }

    & .ladybHeadlink a {
      color: rgba(255, 255, 255, 0.9);
      font-family: "Crimson Text", serif;
      padding-left: 1rem;
      font-size: 1.2rem;
      text-decoration: none;
    }
  }
`;

const ProtectedHeader = (props) => {
  return (
    <ProtectedHeaderWrapper>
      <div className="ladyb-header-bgimg"></div>
      <h2 className="ladybTitleType">{props.protectedtitle}</h2>
      <h6 className="ladybHeadlink">
        <Link to="/">Ladybloom</Link> / {props.protectedHeadLink}
      </h6>
    </ProtectedHeaderWrapper>
  );
};

export default ProtectedHeader;
