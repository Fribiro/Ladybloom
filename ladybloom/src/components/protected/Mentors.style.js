import styled from 'styled-components'

export const MentorWrapper = styled.div`
  .testimonials {
    margin: 40px 100px;
  }

  .testimonials-container p {
    text-align: center;
  }

  .testimonials h2 {
    text-align: center;
    font-weight: bold;
    color: rgb(241, 148, 138);
    padding-bottom: 10px;
  }

  .testimonials h2::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 3px;
    width: 6rem;
    margin: 7px auto 5px;
  }

  .testimonials .row {
    margin-top: 30px;
  }
  .iCardinv {
    display: flex;
    height: 350px;
    margin: 20px 0;
  }

  .iCardinv .profile {
    padding: 20px 10px 10px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    /* background-color: #333; */
  }

  .iCardinv .profile:hover {
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s;
  }

  .iCardinv .profile img {
    top: 0 !important;
    position: unset;
    left: unset;
    border-top: 5px solid rgb(241, 148, 138);
    border-bottom: transparent;
    border-left: 5px solid rgb(241, 148, 138);
    border-right: transparent;
  }

  .iCardinv .user {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .location-icon {
    margin-bottom: 10px;
    width: 19px;
    height: 19px;
  }

  span.amt-range {
    background-color: rgb(241, 148, 138);
    border-radius: 24px;
    align-items: center;
    justify-content: center;
    padding: 3px 7px;
  }

  .text-center Link {
    color: rgb(241, 148, 138);
  }

  .details {
    color: rgb(241, 148, 138);
  }

  .viewmore.text-center.align-items-center.d-flex.justify-content-center.pt-2.pb-2 {
    bottom: 20px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
  }

  .viewmore a:hover {
    text-decoration: underline rgb(241, 148, 138);
  }

  .arrow-right {
    color: rgb(241, 148, 138);
  }

  .expertise {
    margin-top: 15px;
  }

  .profile {
    background-color: #ececec;
  }
`; 