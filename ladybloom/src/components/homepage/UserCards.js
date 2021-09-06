import React from 'react'
import {Link} from 'react-router-dom'
import { UserCardsWrapper } from './UserCards.style';
import $ from 'jquery'

const UserCards = () => {
    $(".hover").mouseleave(function () {
      $(this).removeClass("hover");
    });

    return (
      <UserCardsWrapper>
        <h2 id='userHead'>Users</h2>
        <div className="parent-card">
          <figure class="snip1321">
            <img src="./img/ladybloom/pad3.jpg" alt="sq-sample26" />
            <div class="square">
              <div></div>
            </div>
            <h2 className="overlay-caption">Beneficiaries</h2>
            <figcaption>
              <p>
                Are you in need but fear speaking out due to the stigma
                sorrounding menstrual hygiene? Well fear no more because you're
                in the right place.
              </p>
              <Link to="/beneficiarycards">View More</Link>
            </figcaption>
          </figure>
          <figure class="snip1321 ">
            <img src="./img/sshow4.jpg" alt="sq-sample27" />
            <div class="square">
              <div></div>
            </div>
            <h2 className="overlay-caption">Mentors</h2>
            <figcaption>
              <i class="ion-stats-bars"></i>
              <p>
                Does impacting lives resonate with you? Is menstrual hygiene and
                matters partaining to menstrual health dear to your heart? Reach
                out to us and join our ever growing pool of mentors.
              </p>
              <Link to="/mentors">View More</Link>
            </figcaption>
          </figure>
          <figure class="snip1321">
            <img src="./img/ladybloom/cup.jpg" alt="sq-sample28" />
            <div class="square">
              <div></div>
            </div>
            <h2 className="overlay-caption">Administrators</h2>
            <figcaption>
              <i class="ion-share"></i>
              <p>
                We work hand in hand with various administrative officers spread
                all over the country to ensure our aid reaches every girl and
                woman to the grass roots.
              </p>
              <Link to="/local-authority">View More</Link>
            </figcaption>
          </figure>
        </div>
      </UserCardsWrapper>
    );
}

export default UserCards
