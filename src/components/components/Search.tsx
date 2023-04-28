import React, { FC } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useStore } from "effector-react";
import { $searchStore, setSearchValue } from "../../store/searchStore";

const Wrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  background-color: #eff5ff;
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
  background-color: #1b67da;
  color: #fbfbfb;
  border-radius: 5px;
`;

const Search: FC = () => {
  const searchValue = useStore($searchStore);

  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Wrapper>
      <WrapperIcon>
        <BsSearch size={15} />
      </WrapperIcon>
      <Input
        placeholder="Введите название города..."
        onChange={changeSearchValue}
        value={searchValue}
      />
      <WrapperIcon style={{ cursor: "pointer" }}>
        <MdClose size={15} />
      </WrapperIcon>
      <Btn>Поиск</Btn>
    </Wrapper>
  );
};

export default Search;
