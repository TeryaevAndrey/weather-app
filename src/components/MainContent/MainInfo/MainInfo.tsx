import React from 'react';
import styled from "styled-components";
import SunnyImg from "../../../img/sunny.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  min-height: 300px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  padding: 20px;
`;

const WrapperMaininfo = styled.div`
  display: flex;
  align-items: center;
  gap: 65px;
`;

const DegreesDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Degrees = styled.p`
  font-size: 96px;
  font-weight: 600;
  color: #4793FF;
`;

const CurrentDay = styled.p`
  font-size: 40px;
  margin-top: 5px;
`;

const WeatherImg = styled.img`
  width: 120px;
  height: 120px;
`;

const Time = styled.p`
  font-size: 25px;
  color: #939CB0;
  margin-top: auto;
`;

const City = styled.p`
  font-size: 25px;
  color: #939CB0;
  margin-top: 10px;
`;

function MainInfo() {
  return (
    <Wrapper>
      <WrapperMaininfo>
        <DegreesDayWrapper>
          <Degrees>20°</Degrees>
          <CurrentDay>Сегодня</CurrentDay>
        </DegreesDayWrapper>
        <WeatherImg src={SunnyImg} alt="weather" />
      </WrapperMaininfo>
      <Time>Время: 21:54</Time>
      <City>Город: Санкт-Петербург</City>
    </Wrapper>
  );
}

export default MainInfo;