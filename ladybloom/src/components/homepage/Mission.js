import React from 'react'
import styled from 'styled-components'

const MissionWrapper = styled.div`
  margin: 2rem 8rem;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  & .missionLeft {
    width: 50%;
    height: 90%;
  }

  .missionLeft img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }

  & .missionRight {
    width: 50%;
    height: 100%;
    padding: 1.4rem;
    background-color: rgb(241, 148, 138);
    line-height: 1.8rem;
  }

  & .missionRight h2 {
    font-family: "Abril Fatface", cursive;
  }

  & .missionRight p {
    color: #fff;
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
  }
`;

const Mission = () => {
    return (
      <MissionWrapper>
        <div className="missionLeft">
            <img src="./img/ladycup.jpg" alt="" />
        </div>
        <div className="missionRight">
          <h2>Our Mission</h2>
          <p>
            Our purpose is to provide information on menstrual hygiene for access by girls and women. This enables them to gain a broader knowledge on menstrual hygiene; as well as allow gthem to reach out to verified mentors on any problems that might occur during this period. We also aim to reach needy girls and women in any local neighborhood and enable them to acquire menstrual packages from donations made by our partners. We wish to civic education on menstrual hygiene and also avail menstrual packages or other healthy alternative products to use for those who cannot access the commonly used products.
          </p>
        </div>
      </MissionWrapper>
    );
}

export default Mission
