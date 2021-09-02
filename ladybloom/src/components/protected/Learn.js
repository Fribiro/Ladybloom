import React from 'react'
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";
import { LearnBody, LearnCups, LearnLiner, LearnPads, LearnTampon, LearnVideo, LearnWrapper } from './Learn.style';
import ProtectedHeader from "./ProtectedHeader.style";
import Iframe from "react-iframe";

const Learn = () => {
    return (
      <LearnWrapper>
        <Header />
        <ProtectedHeader
          protectedtitle={"Learn how to use the different menstrual products"}
          protectedHeadLink={"Beneficiary"}
        ></ProtectedHeader>
        <LearnBody>
          <LearnVideo>
            <h2>The Menstrual Cycle</h2>
            <Iframe
              url="https://www.youtube.com/embed/tOluxtc3Cpw"
              width="900px"
              height="500px"
              id="pitchVid"
              className="pitchVid"
              display="initial"
              position="center"
              allowFullScreen
            />
          </LearnVideo>
          <LearnPads>
            <h2>Sanitary Pads</h2>
            <div className="learn-min-body">
              <div className="left">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0IETjnY90pY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="right">
                <h3>How to wear a Sanitary Pad</h3>
                <ul>
                  <h5>Step 1</h5>
                  <li>Remove the backing paper from the sanitary pad.</li>
                  <h5>Step 2</h5>
                  <li>
                    Place the sanitary pad on the crotch or the gusset area of
                    the panty.
                  </li>
                  <h5>Step 3</h5>
                  <li>Remove the paper from the center of the pad.</li>
                  <h5>Step 4</h5>
                  <li>
                    Flip open the wings and stick it to either side of the
                    panty.
                  </li>
                  <h5>Step 5</h5>
                  <li>
                    You can adjust the sanitary pad to place it at an effective
                    position. It shouldn’t be riding up your back or covering
                    your front too much, it should be right underneath to absorb
                    all the period blood
                  </li>
                </ul>
              </div>
            </div>
          </LearnPads>
          <LearnLiner>
            <h2>Panty Liners</h2>
            <div className="learn-min-body">
              <div className="right">
                <h6>How to use panty liners</h6>
                <ul>
                  <li>
                    <small></small>
                  </li>
                  <li>
                    <small></small>
                  </li>
                  <li>
                    <small></small>
                  </li>
                  <li>
                    <small></small>
                  </li>
                  <li>
                    <small></small>
                  </li>
                </ul>
              </div>
              <div className="right">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0IETjnY90pY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </LearnLiner>
          <LearnTampon>
            <h2>Tampon</h2>

            <div className="learn-min-body">
              <div className="left">
                <h6>How to wear a Sanitary Pad</h6>
              </div>
              <div className="right">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0IETjnY90pY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </LearnTampon>
          <LearnCups>
            <h2>Menstrual Cups</h2>
            <div className="learn-min-body">
              <div className="left">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0IETjnY90pY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="right">
                <h6>How to use a tampon</h6>
              </div>
            </div>
            <div className="step2">
              <div className="with"></div>
              <div className="without"></div>
            </div>
          </LearnCups>
        </LearnBody>

        <Footer />
      </LearnWrapper>
    );
}

export default Learn
