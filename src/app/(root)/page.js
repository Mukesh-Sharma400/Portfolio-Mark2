"use client";

import styled from "styled-components";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";

export default function Home() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <IntroWrapper>
        <AvailableBadge>
          <i class="bi bi-dot"></i> Available for work
        </AvailableBadge>
        <MyName>Hello! I’m Mukesh</MyName>
        <MyDesc>Code. Create. Conquer.</MyDesc>
        <Location>
          <i class="bi bi-geo-alt-fill"></i> Navi Mumbai, India
        </Location>
        <MyStory>
          Solution driven MERN Stack Developer with over a year of work
          experience building consumer focused online products and services.
          Designed and developed web apps across multiple APIs, third party
          integrations, and databases.
        </MyStory>
        <ButtonsWrapper>
          <PrimaryBtn>About</PrimaryBtn>
          <SecondaryBtn>
            <i class="bi bi-copy"></i> Copy email
          </SecondaryBtn>
        </ButtonsWrapper>
      </IntroWrapper>
      <Footer />
    </BaseLayout>
  );
}

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;
`;

const AvailableBadge = styled.p`
  width: 140px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 15px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor200
      : theme.darkMode.greenColor200};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor150
      : theme.darkMode.greenColor150};
  transition: all 0.5s ease-in-out;
`;

const MyName = styled.h2`
  width: fit-content;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "👋";
    position: absolute;
  }

  &:hover::after {
    content: "👋";
    position: absolute;
    animation: wave 0.5s linear;
  }

  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(15deg);
    }
  }
`;

const MyDesc = styled.h2`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const Location = styled.p`
  font-size: 14px;
  color: royalblue;
  transition: all 0.5s ease-in-out;
`;

const MyStory = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const PrimaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor300
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.globalColors.blackColor
        : theme.darkMode.blackColor202};
  }
`;

const SecondaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: transparent;
  border: 1.5px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    border: 1.5px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.greyColor100
          : theme.darkMode.greyColor100} !important;
  }
`;
