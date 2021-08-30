import React from 'react'
import styled from "styled-components";
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

const BeneficiaryProfileWrapper = styled.div`

`

const BeneficiaryProfile = () => {
    return (
      <BeneficiaryProfileWrapper>
        <Header />
        <Footer />
      </BeneficiaryProfileWrapper>
    );
}

export default BeneficiaryProfile
