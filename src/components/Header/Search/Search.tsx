import React, { FormEvent } from 'react';
import styled from "styled-components";
import SearchImg from "../../../img/search.svg";
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setCity, setSearchValue } from '../../../store/WeatherInfo';

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;

  @media(max-width: 720px) {
    flex-direction: column;
    width: 100%;
    gap: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  width: 195px;
  min-height: 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme};
  border-radius: 20px;
  gap: 5px;
  box-shadow: 2px 5px 25px -3px rgba(180, 180, 180, 0.25);

  @media(max-width: 720px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  width: 100%;
`;

const Btn = styled.button`
  padding: 10px 20px;
  background-color: #4793FF;
  color: #fff;
  min-height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  margin-left: 10px;
  font-weight: 600;
  cursor: pointer;

  @media(max-width: 720px) {
    width: 100%;
    min-height: 45px;
    margin-left: 0;
  }
`;

function Search() {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.weatherInfo.searchValue);
  const darkTheme = useAppSelector((state) => state.weatherInfo.darkTheme);

  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(event.target.value));
  };

  const chooseCity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setCity(searchValue));
  };

  return (
    <Form onSubmit={(event) => chooseCity(event)}>
    <Wrapper theme={darkTheme ? "#fff" : "rgba(71, 147, 255, 0.2)"}>
      <Img src={SearchImg} alt="search" />
      <SearchInput onChange={(event) => handleChangeSearch(event)} value={searchValue} placeholder="Город" />
    </Wrapper>
    <Btn type="submit">Выбрать</Btn>
    </Form>
  );
}

export default Search;