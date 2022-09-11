import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Raleway";
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #000;
  }

  .App {
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <GlobalStyle />
    </div>
  );
}

export default App;
