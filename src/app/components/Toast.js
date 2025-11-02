import { uiState } from "%/uiSlice";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const Toast = ({ message }) => {
  const { theme } = useSelector(uiState);

  return <DisplayWrapper>{message}</DisplayWrapper>;
};

const DisplayWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor202
        : theme.darkMode.blackColor202};
  }
`;
