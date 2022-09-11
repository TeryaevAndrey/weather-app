import React from 'react';
import styled from "styled-components";
import MainInfo from './MainInfo/MainInfo';
import SecondInfo from './SecondInfo/SecondInfo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

function MainContent() {
  return (
    <Wrapper>
      <CurrentWeather>
        <MainInfo />
        <SecondInfo />
      </CurrentWeather>
    </Wrapper>
  );
}

export default MainContent;