import React from "react";
import styled from "styled-components";
import { StringLiteral } from "typescript";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const Title = styled.p`
  font-size: 14px;
  color: #939cb0;
`;

const Result = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

interface ParameterProps {
  img: string;
  title: string;
  result: string;
}

function Parameter({ img, title, result }: ParameterProps) {
  return (
    <Wrapper>
      <Icon src={img} alt="icon" />
      <Title>{title}</Title>
      <Result>{result}</Result>
    </Wrapper>
  );
}

export default Parameter;
