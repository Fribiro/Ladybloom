import React from "react";
import styled from "styled-components";

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

export const PageMain = styled.div`
  overflow-x: hidden;

  & .query {
    margin-left: 5rem;
  }
`;

export const PageBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;

  & .assetWrapper {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  & .leftAsset {
    left: 0;
    width: 70%;
    height: 100%;
  }

  & .rightAsset {
    width: 30%;
    display: flex;
    justify-content: start;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
    margin: 2rem 0rem 4rem 6rem;
    justify-content: flex-end;
  }

  & .assetText p {
    font-family: "Crimson Text", serif;
    font-size: 1.3rem;
  }

  & .assetText > ul > li {
    list-style-type: circle solid black;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }

  & .assetText h5 {
    font-family: "Crimson Text", serif;
    color: rgb(241, 148, 138);
    font-size: 1.5rem;
    font-weight: bold;
  }

  ${media.mobile} {
    & .assetWrapper {
      flex-direction: column;
    }

    & .leftAsset {
      width: 100%;
      text-align: justify;
    }

    & .rightAsset {
      width: 90%;
      margin: 0;
    }
  }
  ${media.tablet} {
    & .assetWrapper {
      width: 87%;
    }

    & .rightAsset {
      margin-left: 1rem;
    }
  }
`;

export const PageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & h5 {
    align-items: center;
    font-family: "Abril Fatface", cursive;
    justify-content: flex-start;
    color: rgb(241, 148, 138);
    margin: 2rem 0;
  }

  & h5::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 4rem;
    margin: 7px auto 5px;
  }
`;
