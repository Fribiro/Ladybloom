import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = () => {

  useEffect(() => {
      
  }, [])
    return (
      <div>
        <input type="checkbox" id="sidebar-toggle"></input>
        <div class="sidebar">
          <div class="sidebar-header">
            <h3 class="brand">
              <span>Ladybloom</span>
            </h3>
            <label for="sidebar-toggle">
              <FontAwesomeIcon icon="bars" size="lg" />
            </label>
          </div>

          <div class="sidebar-menu">
            <ul>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon="home" size="lg" />
                  <span>Home</span>
                </Link>
              </li>

              <li className="dropmenu">
                <Link>
                  <FontAwesomeIcon icon="users" size="lg" />
                </Link>
                <label htmlFor="btn">Users</label>
                <input type="checkbox" id="btn" />
                <ul className="subMenu" id="subMenu">
                  <li>
                    <Link className="" to="/beneficiaries">
                      Beneficiary
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/mentors">
                      Mentors
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="/administrators">
                      Administrators
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/packages">
                  <FontAwesomeIcon icon="" size="lg" />
                  <span>Package</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <FontAwesomeIcon icon="cog" size="lg" />
                  <span>Account</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;
