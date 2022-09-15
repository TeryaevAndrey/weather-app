import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";

interface WrapperProps {
  bg: string;
}

const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${(props) => props.bg};
`;

const LoaderStyle = styled.div`
  display: inline-flex;
  position: absolute;
  width: 50px;
  height: 50px;
  border: 8px solid #fafafa;
  border-radius: 50%;
  border-top: 8px solid blue;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: LoaderAnim 2s linear infinite;

  @keyframes LoaderAnim {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

function Loader() {
  const darkTheme = useAppSelector((state) => state.weatherInfo.darkTheme);

  return (
    <Wrapper bg={darkTheme ? "#000" : "#fff"}>
      <LoaderStyle />
    </Wrapper>
  );
}

export default Loader;
