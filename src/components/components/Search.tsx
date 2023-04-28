import React, { FC } from 'react';
import styled from 'styled-components';
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  background-color: #EFF5FF;
`;

const WrapperIcon = styled.div`
  display: flex;
  justify-center;
  align-items: center;
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
`;

const Btn = styled.button`
  font-weight: 500;
  padding: 5px 10px;
  background-color: #1B67DA;
  color: #FBFBFB;
  border-radius: 5px;
`;

const Search: FC = () => {
  return (
    <Wrapper>
      <WrapperIcon><BsSearch size={15} /></WrapperIcon>
      <Input placeholder="Введите название города..." />
      <WrapperIcon style={{ cursor: "pointer" }}><MdClose size={15} /></WrapperIcon>
      <Btn>Поиск</Btn>
    </Wrapper>
  );
};

export default Search;