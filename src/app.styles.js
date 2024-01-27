import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "Roboto";
    src:
      local("Roboto"),
      url("/fonts/Roboto-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  a,
  a:visited {
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
  }
  
  button
  {
    cursor: pointer;
  }
  
  ul li {
    list-style: none;
  }

  
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "Roboto", sans-serif;
    color: #000000;
    background-color: #009EE4;

  }
  
  div,
  button,
  a,
  textarea {
    font-family: "Roboto", sans-serif;
  }
  
  h1 {
    font-weight: 400;
    font-size: 28px;
    line-height: 88px;
  }
  button {
    background-color: #009ee4;
    border-radius: 10px;
    border: 1px solid #009ee4;
    font-size: 16px;
    line-height: 1;
    color: #ffffff;
  }
  button:hover {
      background-color: #0080c1;
    }
  
    button:active {
      background-color: #015681;
    }
  
    button:disabled {
      border: none;
      background-color: #5e5e5e;
    }
    button:hover:disabled {
      border: none;
      background-color: #4d4d4d;
      cursor: default;
     
    }

`
export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 100px auto;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 50px;
  height: 100%;


`
