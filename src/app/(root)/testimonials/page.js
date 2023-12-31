"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import Footer from "@/app/components/Footer";

export default function Testimonials() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <Heading>Testimonials</Heading>
      <Description>
        Read what others have to say about experiences and collaborations
      </Description>
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

const Description = styled.p`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;
