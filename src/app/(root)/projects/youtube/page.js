"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import { BackHeader } from "@/app/components/BackHeader";

export default function YouTube() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <BackHeader />
      <Heading>YouTube</Heading>
      <Footer />
    </BaseLayout>
  );
}

const Heading = styled.h1`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;
