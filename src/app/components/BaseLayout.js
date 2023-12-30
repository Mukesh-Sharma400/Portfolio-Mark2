"use client";

import Sidebar from "./Sidebar";
import styled from "styled-components";

export default function BaseLayout({ children }) {
  return (
    <DisplayWrapper className="d-flex">
      <Sidebar />
      <MainContent className="m-3 p-5 rounded-3 shadow-sm w-100">
        {children}
      </MainContent>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor200
      : theme.darkMode.blackColor200};
`;

const MainContent = styled.div`
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.darkMode.blackColor100};
`;
