"use client";

import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";

export default function Contact() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <Heading>Contact</Heading>
      <Description>Get in touch for collaborations</Description>
      <EmailNumberWrapper>
        <EmailWrapper>
          <Title>mksh400@gmail.com</Title>
          <SubTitle>Email</SubTitle>
        </EmailWrapper>
        <NumberWrapper>
          <Title>+91 7021739604</Title>
          <SubTitle>Phone</SubTitle>
        </NumberWrapper>
      </EmailNumberWrapper>
      <ButtonsWrapper>
        <PrimaryBtn>Schedule a call</PrimaryBtn>
        <SecondaryBtn>
          <i class="bi bi-copy"></i> Copy email
        </SecondaryBtn>
      </ButtonsWrapper>
      <MessageWrapper>
        <HeadingTwo>Send a message</HeadingTwo>
        <FormWrapper>
          <NameEmailWrapper>
            <TextBox placeholder="Name" />
            <TextBox placeholder="Email" />
          </NameEmailWrapper>
          <TextArea placeholder="Message" />
          <SendBtn>Send Message</SendBtn>
        </FormWrapper>
      </MessageWrapper>
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

const EmailNumberWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  padding-top: 30px;
  border-top: 2px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const EmailWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const NumberWrapper = styled.div`
  width: 100%;
  transition: all 0.5s ease-in-out;
`;

const Title = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const SubTitle = styled.p`
  font-size: 14px;
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
`;

const MessageWrapper = styled.div`
  margin: 100px 0px;
  transition: all 0.5s ease-in-out;
`;

const HeadingTwo = styled.h2`
  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const NameEmailWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const TextBox = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const SendBtn = styled.button`
  width: 100%;
  height: 50px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor200
      : theme.darkMode.greenColor200};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.greenColor100
        : theme.darkMode.greenColor100};
  }
`;
