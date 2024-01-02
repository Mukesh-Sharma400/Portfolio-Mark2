import { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";

export const Resume = () => {
  const { theme } = useSelector(uiState);

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <DisplayWrapper
      data-bs-toggle="tooltip"
      data-bs-title="Resume"
      data-bs-custom-class="custom-tooltip"
      aria-label="Resume"
    >
      <i class="bi bi-file-earmark-pdf-fill"></i>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-size: 25px;
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
