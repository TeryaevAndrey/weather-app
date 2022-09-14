import React from "react";
import styled from "styled-components";
import SunnyImg from "../../../img/sunny.svg";
import ColdImg from "../../../img/cold.svg";
import CloudyImg from "../../../img/cloudy.svg";
import { useAppSelector } from "../../../store/hooks";
import Loader from "../../Loader/Loader";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  min-height: 300px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);
`;

const Inner = styled.div`
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
  color: #4793ff;
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
  color: #939cb0;
  margin-top: auto;
`;

const City = styled.p`
  font-size: 25px;
  color: #939cb0;
  margin-top: 10px;
`;

function MainInfo() {
  const weatherInfo = useAppSelector((state) => state.weatherInfo.weatherInfo);
  const loading = useAppSelector((state) => state.weatherInfo.loading);
  const temp = Math.round(weatherInfo.main.temp - 273);
  const city = weatherInfo.name;

  const { timezone, dt }: { timezone: number; dt: number } = weatherInfo;
  const dateTime: Date = new Date(dt * 1000);
  const toUtc: number =
    dateTime.getTime() + dateTime.getTimezoneOffset() * 60000;
  const currentLocalTime: number = toUtc + 1000 * timezone;
  const selectedDate: Date = new Date(currentLocalTime);
  let hours: string = selectedDate.getHours().toString();
  let minutes: string = selectedDate.getMinutes().toString();

  if (hours.length === 1) {
    hours = "0" + hours;
  }

  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }

  let weatherIcon: string = SunnyImg;

  if(temp > 0 && temp < 10) {
    weatherIcon = CloudyImg;
  } 
  
  if(temp < 0) {
    weatherIcon = ColdImg;
  }

  return (
    <Wrapper>
      {loading && <Loader />}
      <Inner>
      <WrapperMaininfo>
        <DegreesDayWrapper>
          <Degrees>{temp}°</Degrees>
          <CurrentDay>Сегодня</CurrentDay>
        </DegreesDayWrapper>
        <WeatherImg src={weatherIcon} alt="weather" />
      </WrapperMaininfo>
      <Time>
        Время: {hours}:{minutes}
      </Time>
      <City>Город: {city}</City>
      </Inner>
    </Wrapper>
  );
}

export default MainInfo;
