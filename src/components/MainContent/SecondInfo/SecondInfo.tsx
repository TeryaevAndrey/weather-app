import React from "react";
import styled from "styled-components";
import CloudsImg from "../../../img/cloudsBg.png";
import Parameter from "./Parameter/Parameter";
import TempImg from "../../../img/parameters/temp.svg";
import PressureImg from "../../../img/parameters/pressure.svg";
import WindImg from "../../../img/parameters/wind.svg";
import { useAppSelector } from "../../../store/hooks";
import Loader from "../../Loader/Loader";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: #fff;
  background-image: url(${CloudsImg});
  background-repeat: no-repeat;
  background-position: top right;
  max-width: 750px;
  width: 100%;
  min-height: 300px;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
`;

const Inner = styled.div`
  padding: 50px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

function SecondInfo() {
  const weatherInfo = useAppSelector((state) => state.weatherInfo.weatherInfo);
  const loading = useAppSelector((state) => state.weatherInfo.loading);
  const temp = Math.round(weatherInfo.main.temp - 273);
  const feels_like = Math.round(weatherInfo.main.feels_like - 273);
  const pressure = weatherInfo.main.pressure;
  const windSpeed = weatherInfo.wind.speed;

  return (
    <Wrapper>
      {loading && <Loader />}
      <Inner>
        <Parameter
          img={TempImg}
          title="Температура"
          result={`${temp}°, ощущается как ${feels_like}`}
        />
        <Parameter
          img={PressureImg}
          title="Давление "
          result={`${pressure}мм`}
        />
        <Parameter img={WindImg} title="Ветер" result={`${windSpeed} м/с`} />
      </Inner>
    </Wrapper>
  );
}

export default SecondInfo;
