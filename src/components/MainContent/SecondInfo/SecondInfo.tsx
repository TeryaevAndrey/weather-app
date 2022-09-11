import React from 'react';
import styled from "styled-components";
import CloudsImg from "../../../img/cloudsBg.png";
import Parameter from './Parameter/Parameter';
import TempImg from "../../../img/parameters/temp.svg";
import PressureImg from "../../../img/parameters/pressure.svg";
import PrecipitationImg from "../../../img/parameters/precipitation.svg";
import WindImg from "../../../img/parameters/wind.svg";

const Wrapper = styled.div`
  background-color: #fff;
  background-image: url(${CloudsImg});
  background-repeat: no-repeat;
  background-position: top right;
  max-width: 750px;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

function SecondInfo() {
  return (
    <Wrapper>
      <Parameter img={TempImg} title="Температура" result="20° - ощущается как 17°" />
      <Parameter img={PressureImg} title="Давление " result="765мм" />
      <Parameter img={PrecipitationImg} title="Осадки" result="Без осадков" />
      <Parameter img={WindImg} title="Ветер" result="3 м/с юго-запад" />
    </Wrapper>
  );
}

export default SecondInfo;