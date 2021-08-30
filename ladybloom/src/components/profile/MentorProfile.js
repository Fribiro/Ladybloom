import React from 'react'
import styled from 'styled-components'
import Header from "../navigation/Header";
import Footer from "../navigation/Footer";

const MentorProfileWrapper = styled.div`

`

const MentorProfile = () => {
    return (
        <MentorProfileWrapper>
            <Header />
            <Footer />
        </MentorProfileWrapper>
    )
}

export default MentorProfile
