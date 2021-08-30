import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/user";
import Avatar from "@material-ui/core/Avatar";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const Navwrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #f8f9fa !important;
  width: 100vw;
  //box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;

  & .navbar {
    padding: 0rem 1rem 0;
  }

  & a.navbar-brand {
    width: 11rem;
    height: 4.6rem;
    padding: 0;
    display: flex;
  }

  & .navbar-brand h3 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
  }
  & #navbarNavDropdown {
    margin-left: 3rem;
  }
  & .navbar-brand img {
    margin-right: 0.25rem;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & a.nav-link {
    text-transform: capitalize;
  }

  & .navbar-dark .navbar-nav .nav-link {
    color: #333;
    font-size: 1rem;
  }

  & .dropdown-item {
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
  }

  & .dropdown-toggle:after {
    display: none;
  }

  & .dropdown-menu {
    background-color: #f8f9fa !important;
    border: 0;
  }

  & .dropdown-item:hover {
    color: rgb(241, 148, 138);
  }

  & .dropdown-item:focus {
    color: #fff;
    background-color: rgb(241, 148, 138);
  }

  & .navbar-dark .navbar-brand {
    padding: 0;
  }

  & div#responsive-navbar-nav {
    margin-left: 4rem;
  }

  & .fCnFeG .dropdown-menu.show {
    margin-top: 1rem !important;
    border-top: 0;
    border-radius: 0;
  }

  & .dropdown:hover .dropdown-menu {
    display: block;
  }

  & .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  & li.nav-item {
    position: relative;
  }

  & li.nav-item a.nav-link:hover {
    cursor: pointer;
    color: rgb(241, 148, 138);
  }

  & li.nav-item a.nav-link:focus {
    cursor: pointer;
    color: rgb(241, 148, 138);
  }

  & .nav-item::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    background-color: rgb(241, 148, 138);
    left: 0;
    bottom: 0;
    transform: scaleX(0);
    transition: 0.5s;
  }

  & .nav-item:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }

  ${media.mobile} {
    & .nav-item::after {
      display: none;
    }
    & li.nav-item a.nav-link:focus {
      cursor: pointer;
      color: rgb(241, 148, 138);
    }
    & .dropdown-menu a .dropdown-item:focus {
      color: #fff;
      background-color: rgb(241, 148, 138) !important;
    }
  }

  ${media.tablet} {
    & .nav-item::after {
      display: none;
    }
    & .dropdown-item:focus {
      color: #fff;
      background-color: rgb(241, 148, 138);
    }
  }
`;

const Header = () => {
  const [redirect, setRedirect] = useState("");
  const user = useSelector(selectUser);

  const logOutCallback = async () => {
    await fetch("http://localhost:5500/auth/logout", {
      method: "POST",
    });
    //create user from context
    //setUser({});
    //navigate back to the home page
    console.log("Logged out");
    setRedirect("/");
  };

  return (
    <div style={{ overflowX: "hidden" }}>
      <Navwrapper name="pagetop">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link class="navbar-brand" to="/">
            {/* <img src="/img/logo.jpg"></img> */}
            <h3>LadyBloom</h3>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/" id="homenav">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="about"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  About
                </Link>
                {/* <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link class="dropdown-item" to="/who-we-are">
                    Who We Are
                  </Link>
                  <Link class="dropdown-item" to="/our-team">
                    Our Team
                  </Link>
                  <Link class="dropdown-item" to="/our-story">
                    Our Story
                  </Link>
                </div> */}
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="beneficiarycards">
                  Beneficiaries
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="mentors">
                  Mentors
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="local-authority">
                  Local Authority
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="contacts">
                  Contacts Us
                </Link>
              </li>
              {!user.accesstoken ? (
                <div style={{ display: "flex" }}>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="signup">
                      Signup
                    </Link>
                  </li>
                </div>
              ) : null}
              {user.accesstoken ? (
                <li>
                  <Link className="nav-link" to="" onClick={logOutCallback}>
                    Logout
                  </Link>
                </li>
              ) : null}
              {user.accesstoken ? (
                <li>
                  <Link className="nav-link" to="beneficiary">
                    <Avatar
                      icon="user"
                      style={{ height: "30px", width: "30px" }}
                    />
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </nav>
      </Navwrapper>
    </div>
  );
};;

export default Header;
