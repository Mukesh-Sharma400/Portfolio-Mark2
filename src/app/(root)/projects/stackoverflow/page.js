"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import { BackHeader } from "@/app/components/BackHeader";
import youtube from "../../../../../public/assets/youtube-thumbnail.png";
import dashboard from "../../../../../public/assets/dashboard-thumbnail.webp";
import stackoverflow from "../../../../../public/assets/stack-overflow-thumbnail.jpg";

export default function StackOverflow() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <BackHeader />
      <TagsWrapper>
        <Tag className="my-success">#mongo</Tag>
        <Tag className="my-danger">#express</Tag>
        <Tag className="my-warning">#react</Tag>
        <Tag className="my-info">#node</Tag>
      </TagsWrapper>
      <Heading>Stack Overflow Clone</Heading>
      <Description>
        Discover a powerful Stack Overflow clone built on the MERN stack.
        Harness the potential of MongoDB, ExpressJS, ReactJS, and NodeJS,
        combined with advanced features like Axios, Redux, Redux-Thunk, React
        Hooks, CORS, and Context/RESTful API integration. Enjoy a seamless
        experience in a feature-rich environment for all your coding queries and
        discussions.
      </Description>
      <ButtonsWrapper>
        <PrimaryBtn
          href="https://stackoverflow-mukesh.netlify.app"
          target="_blank"
        >
          Live Preview
        </PrimaryBtn>
        <SecondaryBtn
          href="https://github.com/Mukesh-Sharma400/StackOverflow-Clone"
          target="_blank"
        >
          Source Code
        </SecondaryBtn>
      </ButtonsWrapper>
      <ImageTimelineWrapper>
        <CurrentProjectImage src={stackoverflow} alt="Stack Overflow Clone" />
        <TimeLine>
          <CalendarIcon>
            <i className="bi bi-calendar-week-fill"></i>
          </CalendarIcon>
          <TimelineHeading>12/2022 - 01/2023</TimelineHeading>
          <TimelineDesc>Timeline</TimelineDesc>
        </TimeLine>
      </ImageTimelineWrapper>
      <Divider />
      <Divider />
      <HeadingTwo>Check Out More</HeadingTwo>
      <ProjectsWrapper>
        <Project href="/projects/youtube">
          <ImageWrapper>
            <ProjectImage src={youtube} alt="YouTube Clone" />
          </ImageWrapper>
          <div>
            <ProjectName>YouTube Clone</ProjectName>
            <ProjectDesc>Copy of YouTube Application</ProjectDesc>
          </div>
        </Project>
        <Project href="/projects/dashboard">
          <ImageWrapper>
            <ProjectImage src={dashboard} alt="Dashboard Web App" />
          </ImageWrapper>
          <div>
            <ProjectName>Dashboard Web App</ProjectName>
            <ProjectDesc>Data Visualization Web Application</ProjectDesc>
          </div>
        </Project>
      </ProjectsWrapper>
      <SecondaryBtn className="all-work" href="/projects">
        Uncover All Work
      </SecondaryBtn>
      <Footer />
    </BaseLayout>
  );
}

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  transition: all 0.5s ease-in-out;
`;

const Tag = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0 10px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &.my-success {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.successTextColor
        : theme.darkMode.successTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.successBgColor
        : theme.darkMode.successBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.successBorderColor
          : theme.darkMode.successBorderColor};
  }
  &.my-danger {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.dangerTextColor
        : theme.darkMode.dangerTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.dangerBgColor
        : theme.darkMode.dangerBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.dangerBorderColor
          : theme.darkMode.dangerBorderColor};
  }
  &.my-warning {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.warningTextColor
        : theme.darkMode.warningTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.warningBgColor
        : theme.darkMode.warningBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.warningBorderColor
          : theme.darkMode.warningBorderColor};
  }
  &.my-info {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoTextColor
        : theme.darkMode.infoTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoBgColor
        : theme.darkMode.infoBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.infoBorderColor
          : theme.darkMode.infoBorderColor};
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  margin-bottom: 25px !important;
  transition: all 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 25px 0;
`;

const PrimaryBtn = styled(Link)`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
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

const SecondaryBtn = styled(Link)`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
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

  &.all-work {
    width: 100%;
    margin-top: 50px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin: 30px 0;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const ImageTimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const CurrentProjectImage = styled(Image)`
  width: 60%;
  height: auto;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const TimeLine = styled.div`
  width: 100%;
  padding: 50px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const CalendarIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const TimelineHeading = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const TimelineDesc = styled.p`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const HeadingTwo = styled.h2`
  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-top: 50px !important;
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  transition: all 0.5s ease-in-out;
`;

const Project = styled(Link)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 350px;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 295px;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const ProjectImage = styled(Image)`
  width: 350px;
  height: auto;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 295px;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const ProjectName = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const ProjectDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;
