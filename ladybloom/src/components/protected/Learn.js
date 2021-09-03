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
                <h3>How to use panty liners</h3>
                <ul>
                  <h5>Step 1</h5>
                  <li> Remove the packing paper from the pantyliner.</li>
                  <h5>Step 2</h5>
                  <li>
                    Place the pantyliner on the crotch or the gusset area of the
                    panty.
                  </li>
                  <h5>Step 3</h5>
                  <li>
                    You can adjust the pantyliner to place it in an effective
                    position
                  </li>
                  <h5>N/B</h5>
                  <li>
                    Mostly used to avoid spots during pre and post period days.
                  </li>
                  <li>
                    Do not consider panty liners as a replacement for pads, it
                    can’t hold heavy period flow.
                  </li>
                </ul>
              </div>
              <div className="left">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/HijgRcSeVw0"
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
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/6UykBMEEtRw"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="right">
                <h3>How to use a tampon</h3>
                <ul>
                  <h5>Step 1</h5>
                  <li>
                    Wash your hands and get into a comfortable position to
                    prevent dirt and germs from getting into or near the vagina.
                  </li>
                  <h5>Step 2</h5>
                  <li>
                    Push the tampon into your vagina using the applicator or
                    your finger, depending on what kind of tampon you have.
                  </li>
                  <h5>Step 3</h5>
                  <li>Throw the wrapper and applicator in the trash.</li>
                  <h5>Step 4</h5>
                  <li>Change your tampon every 4-8 hours.</li>
                  <h5>Step 5</h5>
                  <li>
                    Take the tampon out by gently pulling the string at one end
                    that hangs out of your vagina.
                  </li>
                </ul>
              </div>
            </div>
            <div className="to-note">
              <h5>N/B: Choose your tampon accordingly:</h5>
              <ul>
                <li>Junior or slim, for very light days</li>
                <li>Junior or slim, for very light days</li>
                <li>Regular, for normal flow</li>
                <li>Super, for heavy days</li>
                <li>Super plus/ultra, for very heavy flow</li>
              </ul>
            </div>
          </LearnTampon>
          <LearnCups>
            <h2>Menstrual Cups</h2>
            <div className="menss-cup-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/o9fPUfm-uYE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="learn-min-body">
              <div className="left">
                <h3>How to wear</h3>
                <ul>
                  <h5>Step 1</h5>
                  <li>Wash your hands thoroughly.</li>
                  <h5>Step 2</h5>
                  <li>
                    Apply water or a water-based lube to the rim of the cup.
                  </li>
                  <h5>Step 3</h5>
                  <li>
                    Tightly fold the menstrual cup in half, holding it in one
                    hand with the rim facing up.
                  </li>
                  <h5>Step 4</h5>
                  <li>
                    Insert the cup, rim up, into your vagina like you would a
                    tampon without an applicator. It should sit a few inches
                    below your cervix.
                  </li>
                  <h5>Step 5</h5>
                  <li>
                    Once the cup is in your vagina, rotate it. It will spring
                    open to create an airtight seal that stops leaks.
                  </li>
                </ul>
              </div>
              <div className="right">
                <h3>How to remove</h3>
                <ul>
                  <li>
                    You can wear a menstrual cup for 6 to 12 hours, depending on
                    whether or not you have a heavy flow.
                  </li>
                  <h5>Step 1</h5>
                  <li>Wash your hands thoroughly.</li>
                  <h5>Step 2</h5>
                  <li>
                    Place your index finger and thumb into your vagina. Pull the
                    stem of the cup gently until you can reach the base.
                  </li>
                  <h5>Step 3</h5>
                  <li>
                    Pinch the base to release the seal and pull down to remove
                    the cup.
                  </li>
                  <h5>Step 4</h5>
                  <li>Once it’s out, empty the cup into the sink or toilet.</li>
                </ul>
              </div>
            </div>
            <div className="to-note">
              <h5>N/B:</h5>
              <ul>
                <li>
                  Reusable menstrual cups should be washed and wiped clean
                  before being reinserted into your vagina.
                </li>
                <li>Your cup should be emptied at least twice a day.</li>
                <li>
                  Reusable menstrual cups are durable and can last for 6 months
                  to 10 years with proper care.
                </li>
                <li>Throw away disposable cups after removal.</li>
              </ul>
            </div>
          </LearnCups>
        </LearnBody>

        <Footer />
      </LearnWrapper>
    );
}

export default Learn
