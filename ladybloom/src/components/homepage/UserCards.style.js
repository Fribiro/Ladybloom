import styled from "styled-components";

export const UserCardsWrapper = styled.div`
  padding: 2rem 2rem;
  //height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(63, 63, 63);

  & #userHead {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
  }
  & #userHead:after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 3rem;
    margin: 7px auto 5px;
  }
  & .user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
    height: 50%;
  }

  & .parentCol {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  & .col1 {
    width: 50%;
    height: 100%;
  }

  & .col1 img {
    width: 100%;
    height: 100%;
    filter: brightness(70%);
  }

  & .col2 {
    width: 50%;
    height: 100%;
    padding: 1rem;
  }

  & .col2 h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    font-size: 1.5rem;
  }

  & .col2 p {
    line-height: 1.5rem;
    font-family: "Crimson Text", serif;
    margin-bottom: 1rem;
  }

  & .col2 a {
    color: rgb(241, 148, 138);
  }

  @import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
  @import url(https://fonts.googleapis.com/css?family=Raleway:400,500,800);
  & .parent-card {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure.snip1321 {
    font-family: "Raleway", Arial, sans-serif;
    position: relative;
    overflow: hidden;
    margin: 10px;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    color: #000000;
    text-align: center;
    -webkit-perspective: 50em;
    perspective: 50em;
    height: 315px;
    display: flex;
    position: relative;
  }
  figure.snip1321 * {
    -webkit-box-sizing: padding-box;
    box-sizing: padding-box;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
  }
  .snip1321 h2 {
    font-weight: 400;
    left: 0;
    right: 0;
    letter-spacing: -1px;
    margin: 0 auto;
    position: absolute;
    text-transform: uppercase;
    bottom: 50%;
    -webkit-transform: translateY(50%);
    transform: translateY(50%);
    font-family: "Crimson Text", cursive;
  }

  figure.snip1321 img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    vertical-align: top;
    filter: brightness(70%);
  }
  figure.snip1321 figcaption {
    top: 50%;
    left: 20px;
    right: 20px;
    position: absolute;
    opacity: 0;
    z-index: 1;
  }
  figure.snip1321 h2,
  figure.snip1321 h4 {
    margin: 0;
  }
  figure.snip1321 h2 {
    font-weight: 600;
  }
  figure.snip1321 h4 {
    font-weight: 400;
    text-transform: uppercase;
  }
  figure.snip1321 i {
    font-size: 32px;
  }
  figure.snip1321:after {
    background-color: #ffffff;
    position: absolute;
    content: "";
    display: block;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -webkit-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
    -webkit-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    opacity: 0;
  }
  figure.snip1321 figcaption a {
    /* position: absolute; */
    align-self: flex-end;
    z-index: 1;
  }
  figure.snip1321:hover figcaption,
  figure.snip1321.hover figcaption {
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure.snip1321:hover:after,
  figure.snip1321.hover:after {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
    opacity: 0.9;
  }

  .square {
    height: 78px;
    width: 78px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    content: "";
    -webkit-transform: rotate(45deg) translate(-50%, -50%);
    transform: rotate(45deg) translate(-50%, -50%);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
  }
  figure.snip1321 .square:before,
  figure.snip1321 .square:after,
  figure.snip1321 .square div:before,
  figure.snip1321 .square div:after {
    background-color: #000000;
    position: absolute;
    content: "";
    display: block;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  figure.snip1321 .square:before,
  figure.snip1321 .square:after {
    width: 65%;
    height: 2px;
  }
  figure.snip1321 .square div:before,
  figure.snip1321 .square div:after {
    width: 2px;
    height: 65%;
  }
  figure.snip1321 .square:before,
  figure.snip1321 .square div:before {
    left: 0;
    top: 0;
  }
  figure.snip1321 .square:after,
  figure.snip1321 .square div:after {
    bottom: 0;
    right: 0;
  }
  figure.snip1321 a {
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    color: rgb(241, 148, 138);
  }
`;
