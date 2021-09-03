import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
`;

const Pagelinkwrapper = styled.ul` 
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 10rem;
  width: 100%;
  background-color: rgb(241, 148, 138);
  padding-left: 0;

  & li {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  & #assetFin {
    border-bottom: 0 !important;
  }

  & li a {
    text-decoration: none;
    color: #fff;
  }

  & li a:hover {
    color: #000;
  }

  & .icon {
    margin-right: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1rem;
    color: #fff;
  }
`;

const ProfileImg = styled.button`
  font-family: "Crimson Text", serif;
  outline: none;
  border: 0;
  //margin-bottom: 2rem;
  height: 10rem;
  padding: 0.2rem;
  background-color: rgb(241, 148, 138);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 50%;
    height: 80%;
    border-radius: 50%;
    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
      0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }

  & svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  & h6 {
    text-align: center;
    margin: 0;
  }
`;

const ProfileSidebar = ({name, email, location}) => {
  return (
    <SidebarPageWrapper>
      <ProfileImg>
        <img src="./img/user2.jpg" alt="" />
      </ProfileImg>
      <Pagelinkwrapper>
        <li>
          <div className="icon">
            <FontAwesomeIcon icon="user" />
          </div>
          <div className="icon-text">{name}</div>
        </li>
        <li>
          <div className="icon">
            <FontAwesomeIcon icon="envelope" />
          </div>
          <div className="icon-text">{email}</div>
        </li>
        <li>
          <div className="icon">
            <FontAwesomeIcon icon="map-marker-alt" />
          </div>
          <div className="icon-text">{location}</div>
        </li>
      </Pagelinkwrapper>
    </SidebarPageWrapper>
  );
};

export default ProfileSidebar;
