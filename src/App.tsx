import React from "react";
import "./index.css";
import styled, { createGlobalStyle } from "styled-components";
import Search from "./components/components/Search";

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: #0f172a;
  }

  body {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    background-color: #FBFBFB;
    overflow-x: hidden;
  }

  input,
  button {
    outline: none;
    border: none;
  }

  button {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  border-radius: 30px;
  background-color: #fff;
  max-width: 400px;
  min-height: 400px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Block>
          <Search />
        </Block>
      </Wrapper>
    </>
  );
}

export default App;
