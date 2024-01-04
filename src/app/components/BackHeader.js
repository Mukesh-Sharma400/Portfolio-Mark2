"use client";

import Link from "next/link";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";

export const BackHeader = () => {
  const { theme } = useSelector(uiState);

  return (
    <BackHeaderWrapper>
      <BackBtn href="/projects">
        <i className="bi bi-arrow-left-circle-fill"></i>{" "}
        <span>Back to list</span>
      </BackBtn>
    </BackHeaderWrapper>
  );
};

const BackHeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const BackBtn = styled(Link)`
  width: 100px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor200
      : theme.darkMode.greyColor100};
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  span {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
  }
`;
