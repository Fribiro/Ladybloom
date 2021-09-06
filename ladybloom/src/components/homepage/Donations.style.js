import styled from "styled-components";

export const DonationsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 10rem;

  & #donations-head {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
  }
  & #donations-head:after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 6rem;
    margin: 7px auto 5px;
  }

  & .parent-donations {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(63, 63, 63);
  }

  & .left-donations {
    width: 50%;
    height: 38.5rem;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    background: URL("/img/ladybloom/basket.jpg");
    background: no repeat center center scroll;
    backdrop-filter: brightness(40%);
    -webkit-background-size: cover;
    background-size: cover;
    filter: brightness(70%);
    /* z-index: 1; */
  }

  & .frozen-glass {
    margin: 0 4rem;
    height: 60%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: transparent;
    backdrop-filter: blur(0.7rem) contrast(0.7) brightness(100%);
  }

  & .right-donations {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & form {
    margin: 1rem 0;
  }

  & .input-group {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.5rem 0;
  }

  & .input-group label {
    align-self: flex-start;
  }

  & input {
    width: 100%;
    margin: 0.3rem 0;
    border-radius: 0.4rem;
    border: none;
    padding: 0.4rem 1rem;
    outline: none;
  }

  & .input-group > :not(:first-child):not(.dropdown-menu) {
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
  }

  & .contactFormInput {
    background-color: rgb(86, 86, 86);
  }

  & input[type="submit"] {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    font-size: 1.2rem;
    width: 100%;
    background: rgb(241, 148, 138);
  }
  & ::placeholder {
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
    color: rgb(241, 148, 138);
  }

  & label {
    color: #fff;
  }

  & .mpesa {
    width: 100%;
    height: 4rem;
  }

  & .mpesa img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .frozen-glass h2 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    font-size: 2.3rem;
  }

  & .paybill {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .paybill-no {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .num {
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    border: 0.2rem solid rgb(241, 148, 138);
  }

  & .num p {
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;
