import styled from "styled-components";

export const LoginWrapper = styled.div`
  /* Root Container */
  .root-container {
    width: 100%;
    height: 100vh;
    vertical-align: middle;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .box-controller {
    visibility: visible;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    max-width: 24em;
    min-width: 21em;
    height: 35px;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
    box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
    margin-bottom: 30px;
    align-items: center;
    transition: visibility 0.5s ease-out;
  }

  .controller {
    flex: 1;
    text-align: center;
    height: 100%;
    line-height: 2;
    cursor: pointer;
  }

  /* Currently Selected Controller */
  .selected-controller {
    transition: border 0.5s ease-out;
    border-bottom: 2px solid blue_theme;
  }

  .box-container {
    display: flex;
    flex-direction: column;
    max-width: 24em;
    min-width: 21em;
    box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
    border-radius: 6px;
    padding: 24px;
  }

  .inner-container {
    transition: visibility 0.2s ease-out;
  }

  .inner-container.show {
    visibility: visible;
  }

  /* Header */
  .header {
    text-align: center;
    padding: 5px;
    margin-bottom: 17px;
    font-family: Ozxgen, sans-serif;
    font-size: 22px;
    border-bottom: 2px solid rgb(241, 148, 138);
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .input-group input {
    height: 2.1em;
    border-radius: 3px;
    border: 1px solid rgb(241, 148, 138);
    transition: border 0.4s ease-out;
    padding: 13px;
    font-family: Oxygen, sans-serif;
    font-size: 19px;
    color: #3e3e42;
    background: rgba(15, 15, 15, 0.01);
    width: 100%;
    outline: antiquewhite;
  }

  /* Label */
  .login-label {
    font-family: Oxygen, sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding-left: 5px;
  }

  /* Input */
  .login-input {
    height: 2.1em;
    border-radius: 3px;
    border: 1px solid rgb(241, 148, 138);
    transition: border 0.4s ease-out;
    padding: 13px;
    font-family: Oxygen, sans-serif;

    font-size: 19px;
    color: #3e3e42;
    background: rgba(15, 15, 15, 0.01);
  }

  .login-input:hover {
    border: 2px solid rgb(241, 148, 138);
  }

  .login-input:focus {
    border: 2px solid rgb(241, 148, 138);
    box-shadow: 0px 0px 20px rgba(15, 15, 15, 0.2);
  }

  /* Input Placeholder */
  .login-input::placeholder {
    font-family: Oxygen, sans-serif;
    font-size: 16px;
    color: rgba(46, 213, 116, 0.839);
    color: rgba(15, 15, 15, 0.4);
  }

  .login-btn {
    padding: 2px 30px;
    border: 0;
    font-size: 18px;
    border-radius: 3px;
    font-family: Oxygen, sans-serif;
    background-color: rgb(241, 148, 138);
    margin-top: 20px;
    border: 2px solid rgb(241, 148, 138);
    transition: background-color 0.3s ease-out;
    cursor: pointer;
  }

  .login-btn:hover,
  .login-btn:focus {
    background-color: rgb(241, 148, 138);
    color: white;
  }

  .danger-error {
    color: #e74c3c;
    font-size: 16px;
  }

  /* Password */
  .password-state {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }

  .pwd {
    height: 6px;
    flex: 1;
    visibility: hidden;
  }

  .show {
    visibility: visible;
  }

  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text-left {
    width: 50%;
  }
  .text-right {
    width: 50%;
  }
`;