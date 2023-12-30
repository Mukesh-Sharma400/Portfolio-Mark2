import { useEffect, useState } from "react";
import { themeFn, uiState } from "../redux/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export default function ThemeSwitch() {
  const { theme } = useSelector(uiState);

  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    dispatch(themeFn(newTheme));
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <SwitchContainer>
      <SunIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="#ffd43b">
            <circle r="5" cy="12" cx="12"></circle>
            <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
          </g>
        </svg>
      </SunIcon>
      <MoonIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
        </svg>
      </MoonIcon>
      <Input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <Slider />
      <SliderBefore />
    </SwitchContainer>
  );
}

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const tilt = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const SwitchContainer = styled.label`
  font-size: 15px;
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  cursor: pointer;
`;

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73c0fc;
  border-radius: 30px;
`;

const SliderBefore = styled.div`
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  border-radius: 20px;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  background-color: #e8e8e8;
`;

const SunIcon = styled.div`
  svg {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
    width: 20px;
    height: 20px;
  }

  &:hover {
    svg {
      animation: ${rotate} 15s linear infinite;
    }
  }
`;

const MoonIcon = styled.div`
  svg {
    fill: #73c0fc;
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: 1;
    width: 20px;
    height: 20px;
  }

  &:hover {
    svg {
      animation: ${tilt} 5s linear infinite;
    }
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #183153;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #183153;
  }

  &:checked + ${Slider} + ${SliderBefore} {
    transform: translateX(30px);
  }
`;
