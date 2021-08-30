import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Scroll = styled.button`
  border-radius: 50%;
  position: fixed;
  bottom: 4rem;
  right: 0rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: none;
  outline: none;
  width: 3rem;
  height: 3rem;
`;

const ScrollUp = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });
  return (
    <>
      {show && (
        <Scroll onClick={handleClick}>
          <FontAwesomeIcon icon="chevron-up" />
        </Scroll>
      )}
    </>
  );
};

export default ScrollUp;
