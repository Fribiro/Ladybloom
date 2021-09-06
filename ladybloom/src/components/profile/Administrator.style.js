import styled from "styled-components";

export const AdministratorWrapper = styled.div`
  .userProfile {
    display: grid;
    grid-template-columns: 20% 80%;
    margin: 8rem 0 4rem 40px;
    overflow-x: hidden;
  }

  .profileNav {
    grid-column: 1;
    grid-row: 1;
    height: 400px;
    background-color: #efefef;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    width: 240px;
    justify-content: center;
  }
  .profileNavClickable {
    cursor: pointer;
  }
  .userHeader {
    border-radius: 50%;
    border: 1px solid #000;
    height: 150px;
    width: 150px;
    align-self: center;
    margin: 20px 0 0 0;
    padding: 0;
  }

  .userHeader img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    filter: brightness(60%);
  }

  .userNav {
    padding: 0;
  }

  .usernav,
  ul {
    list-style: none;
    padding-left: 60px;
  }

  .usernav,
  ul li {
    padding: 5px 0;
  }
  .sideheaders {
    font-family: "Abril Fatface", cursive;
  }
  .profileDetails {
    grid-column: 2;
    grid-row: 1;
    margin-left: 10px;
    background-color: #efefef;
    padding: 30px 0px 0 60px;
  }

  .profile-head h5 {
    color: #333;
  }

  .profile-head h6 {
    color: rgb(241, 148, 138);
  }

  .profile-edit-btn {
    border: none;
    border-radius: 1.5rem;
    width: 30%;
    padding: 2%;
    background-color: rgb(241, 148, 138);
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin-left: 260px;
  }
  .profile-sub-headers {
    margin: 10px 0;
    font-weight: bold;
  }

  .profile-head .nav-tabs {
    margin-bottom: 0;
  }

  .profile-head .nav-tabs .nav-link {
    font-weight: 600;
    border: none;
  }

  .profile-head .nav-tabs .nav-link.active {
    border: none;
    border-bottom: 2px solid rgb(241, 148, 138);
  }

  .profile-tab label {
    font-weight: 600;
  }

  .profile-tab p {
    font-weight: 600;
    color: rgb(241, 148, 138);
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
  }
  .nav-tabs {
    border-bottom: 0;
  }

  .nav-item a:focus {
    background: rgb(241, 148, 138);
    color: #fff;
  }

  .order-table {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }

  .left-order {
    width: 40%;
  }

  .right-order {
    width: 60%;
  }
`;