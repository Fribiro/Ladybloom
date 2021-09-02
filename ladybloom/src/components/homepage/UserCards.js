import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const UserCardsWrapper = styled.div`
  margin: 2rem 2rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //background: rgb(110, 108, 108);

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
`;

const UserCards = () => {
    return (
      <UserCardsWrapper>
        <div className="user">
          <div className="parentCol">
            <div className="col1">
              <img src="./img/ladybloom/recepient.jpeg" alt="" />
            </div>
            <div className="col2">
              <h5>Beneficiary</h5>
              <p>
                This enables them to gain a broader knowledge on menstrual
                hygiene and easily reach out to verified mentors on any problems
                that might occur during this period.
              </p>
              <Link to="beneficiary">View More</Link>
            </div>
          </div>
          <div className="parentCol">
            <div className="col1">
              <img src="./img/ladybloom/donate1.jpeg" alt="" />
            </div>
            <div className="col2">
              <h5>Donor</h5>
              <p>
                This enables them to gain a broader knowledge on menstrual
                hygiene and easily reach out to verified mentors on any problems
                that might occur during this period.
              </p>
              <Link to="donor">View More</Link>
            </div>
          </div>
        </div>
        <div className="user">
          <div className="parentCol">
            <div className="col2">
              <h5>Mentor</h5>
              <p>
                This enables them to gain a broader knowledge on menstrual
                hygiene and easily reach out to verified mentors on any problems
                that might occur during this period.
              </p>
              <Link to="mentor">View More</Link>
            </div>
            <div className="col1">
              <img src="./img/ladybloom/mentor.jpeg" alt="" />
            </div>
          </div>
          <div className="parentCol">
            <div className="col2">
              <h5>Local Authority</h5>
              <p>
                This enables them to gain a broader knowledge on menstrual
                hygiene and easily reach out to verified mentors on any problems
                that might occur during this period.
              </p>
              <Link to="local-authority">View More</Link>
            </div>
            <div className="col1">
              <img src="./img/ladybloom/dc.jpeg" alt="" />
            </div>
          </div>
        </div>
      </UserCardsWrapper>
    );
}

export default UserCards
