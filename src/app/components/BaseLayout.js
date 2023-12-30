"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

export default function BaseLayout({ children }) {
  return (
    <DisplayWrapper>
      <Header />
      <Sidebar />
      <MainContent className="rounded-3 shadow-sm">{children}</MainContent>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor200
      : theme.darkMode.blackColor200};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  width: 100%;
  margin: 20px;
  padding: 30px 50px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.darkMode.blackColor100};
  overflow-y: scroll;
  transition: all 0.5s ease-in-out;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    margin-top: 100px;
  }
`;
