"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import Footer from "../components/Footer";

export default function Home() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <Heading>Home</Heading>
      <Footer />
    </BaseLayout>
  );
}

const Heading = styled.h1`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;
