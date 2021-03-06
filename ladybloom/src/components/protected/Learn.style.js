import styled from 'styled-components'

export const LearnWrapper = styled.div`
    
`
export const LearnBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const LearnVideo = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
    margin-bottom: 2rem;
  }

  & h2::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 13rem;
    margin: 7px auto 5px;
  }
`;
export const LearnPads = styled.div`
  margin: 1rem 0;
  width: 80%;
  height: 31rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
    margin-bottom: 0;
  }

  & h2::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 11rem;
    margin: 7px auto 5px;
  }

  & .learn-min-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  & .left {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  & .left iframe {
    width: 100%;
    top: 0;
  }

  & .right {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .right h3 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & .right ul {
    padding: 0;
  }

  & .right ul h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .right ul li {
    font-family: "Crimson Text", serif;
    list-style: none;
  }
`;
export const LearnTampon = styled.div`
  margin: 2rem 0;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
    margin-bottom: 0;
  }

  & h2::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 5rem;
    margin: 7px auto 5px;
  }

  & .learn-min-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  & .left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    padding-top: 2.5rem;
  }

  & .left iframe {
    width: 100%;
    top: 0;
  }

  & .right {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .right h3 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & .right ul {
    padding: 0;
  }

  & .right ul h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .right ul li {
    font-family: "Crimson Text", serif;
    list-style: none;
  }
  & .to-note {
    //align-self: flex-start;
  }

  & .to-note h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .to-note ul li {
    font-family: "Crimson Text", serif;
    list-style: lower-roman;
  }
`;
export const LearnCups = styled.div`
  margin: 2rem 0;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
    margin-bottom: 1rem;
  }

  & h2::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 11rem;
    margin: 7px auto 5px;
  }

  & .learn-min-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  & .left {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .left h3 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & .left ul {
    padding: 0;
  }

  & .left ul h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .left ul li {
    font-family: "Crimson Text", serif;
    list-style: none;
  }

  & .right {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-self: flex-start;
  }
  & .right h3 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & .right ul {
    padding: 0;
  }

  & .right ul h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .right ul li {
    font-family: "Crimson Text", serif;
    list-style: none;
  }
  & .to-note {
    //align-self: flex-start;
  }

  & .to-note h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .to-note ul li {
    font-family: "Crimson Text", serif;
    list-style: lower-roman;
  }
`;

export const LearnLiner = styled.div`
  margin: 2rem 0;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & h2 {
    font-family: "Abril Fatface", cursive;
    color: rgb(241, 148, 138);
    margin-bottom: 0;
  }

  & h2::after {
    content: "";
    background: rgb(241, 148, 138);
    display: block;
    height: 0.2rem;
    width: 9rem;
    margin: 7px auto 5px;
  }

  & .learn-min-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  & .left {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  & .left iframe {
    width: 100%;
    top: 0;
  }

  & .right {
    width: 50%;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .right h3 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
  }

  & .right ul {
    padding: 0;
  }

  & .right ul h5 {
    font-family: "Crimson Text", serif;
    font-weight: bold;
    color: rgb(241, 148, 138);
  }

  & .right ul li {
    font-family: "Crimson Text", serif;
    list-style: none;
  }
`;