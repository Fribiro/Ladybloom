import React, { useState, useEffect } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Axios from "axios";
import { API_BASE_URL } from "../../../ladybloom/src/constants/constants";

const Dashboard = () => {
    const [administrators, setadministrators] = useState([]);
    const [mentors, setMentors] = useState([]);
    const [beneficiaries, setBeneficiaries] = useState([]);

    useEffect(() => {
      Axios.get(`${API_BASE_URL}/beneficiary`).then((res) => {
        setBeneficiaries(res.data);
      });
    }, []);

    useEffect(() => {
      Axios.get(`${API_BASE_URL}/administrators`).then((res) => {
        setadministrators(res.data);
      });
    }, []);

    useEffect(() => {
      Axios.get(`${API_BASE_URL}/mentors`).then((res) => {
        setMentors(res.data);
      });
    }, []);

    const admNo = administrators.length;
    const benfNo = beneficiaries.length;
    const mentNo = mentors.length;

    return (
      <div>
        <div class="main-content">
          <header>
            <div class="search-wrapper">
              <span class="ti-search"></span>
              <input type="search" placeholder="Search" />
            </div>

            <div class="social-icons">
              <span class="ti-bell"></span>
              <span class="ti-comment"></span>
            </div>
          </header>

          <main>
            <h2 class="dash-title">Overview</h2>

            <div class="dash-cards">
              <div class="card-single">
                <div class="card-body">
                  <span class="ti-briefcase"></span>
                  <div>
                    <h5>Beneficiaries</h5>
                    <h4>{benfNo}</h4>
                  </div>
                </div>
                <div class="card-footer">
                  <Link className="" to="/beneficiaries">
                    View All
                  </Link>
                </div>
              </div>

              <div class="card-single">
                <div class="card-body">
                  <span class="ti-reload"></span>
                  <div>
                    <h5>Mentors</h5>
                    <h4>{mentNo}</h4>
                  </div>
                </div>
                <div class="card-footer">
                  <Link className="" to="/mentors">
                    View All
                  </Link>
                </div>
              </div>

              <div class="card-single">
                <div class="card-body">
                  <span class="ti-check-box"></span>
                  <div>
                    <h5>Administrators</h5>
                    <h4>{admNo}</h4>
                  </div>
                </div>

                <Link className="" to="/administrators">
                  <div class="card-footer">View All</div>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
}

export default Dashboard
