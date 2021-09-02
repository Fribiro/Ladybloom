import styled from "styled-components";

export const PackagesWrapper = styled.div`
  .danger-error {
    color: #e74c3c;
    font-size: 16px;
  }
`;

export const PackagesBody = styled.div`
  margin: 2rem;

  & .col-md-6 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  & .package-left {
    width: 40%;
    height: 100%;
    margin-right: -8rem;
    background: #4b4b4b;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .package-left img {
    width: 94%;
    height: 94%;
  }

  & .package-right {
    width: 60%;
    height: 100%;
    background: #4b4b4b;
    padding: 1rem;
  }

  & .package-right h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .package-right p {
    font-family: "Crimson Text", serif;
    color: #fff;
  }

  & .package-right button {
    font-family: "Crimson Text", serif;
    outline: none;
    border: 0.1rem solid rgb(241, 148, 138);
    background: transparent;
    color: #fff;
  }
`;