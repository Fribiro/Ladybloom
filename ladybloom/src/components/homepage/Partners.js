import React from 'react'
import styled from 'styled-components'

const PartnersWrapper = styled.div`
  margin: 2rem 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
  }

  & h2:after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 9rem;
    margin: 7px auto 5px;
  }

  & .partnersMain {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  & .partner {
    width: 25%;
    height: 9rem;
    margin-right: 1rem;
  }

  & .partner img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Partners = () => {
    return (
      <PartnersWrapper>
        <h2>Our Partners</h2>
        <div className="partnersMain">
          <div className="partner" style={{ width: "20%", height: "6rem" }}>
            <img src="./img/partners/always.png" alt="" />
          </div>
          <div className="partner" style={{ width: "20%", height: "5rem" }}>
            <img src="./img/partners/kotex.png" alt="" />
          </div>
          <div className="partner">
            <img src="./img/partners/un.jpeg" alt="" />
          </div>
          <div className="partner">
            <img src="./img/partners/inuadada.png" alt="" />
          </div>
        </div>
      </PartnersWrapper>
    );
}

export default Partners
