"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import { BackHeader } from "@/app/components/BackHeader";
import ecommerce from "../../../../../public/assets/ecommerce-thumbnail.jpg";
import dashboard from "../../../../../public/assets/dashboard-thumbnail.webp";
import primevideo from "../../../../../public/assets/primevideo-thumbnail.jpg";

export default function Dashboard() {
  const { theme } = useSelector(uiState);

  const tags = [
    { class: "my-success", text: "mongo" },
    { class: "my-danger", text: "express" },
    { class: "my-warning", text: "react" },
    { class: "my-info", text: "node" },
  ];

  return (
    <BaseLayout>
      <BackHeader />
      <TagsWrapper>
        {tags.map((tag, index) => (
          <Tag
            className={tag.class}
            data-aos="fade-right"
            data-aos-delay={`${(index + 1) * 100}`}
          >
            #{tag.text}
          </Tag>
        ))}
      </TagsWrapper>
      <Heading>Dashboard Web App</Heading>
      <Description>
        Experience the ultimate MERN Stack Admin Dashboard - efficient,
        user-friendly, and powerful. Manage projects, visualize data with Nivo
        Charts, and enjoy seamless state management with Redux Toolkit. Our
        backend runs on Node JS, Express JS, Mongoose, and MongoDB, providing a
        robust foundation for your success. Take control of your data and
        productivity today!
      </Description>
      <ButtonsWrapper>
        <PrimaryBtn
          href="https://dashboard-smoky-three.vercel.app"
          target="_blank"
          data-aos="zoom-in-up"
        >
          Live Preview
        </PrimaryBtn>
        <SecondaryBtn
          href="https://github.com/Mukesh-Sharma400/Dashboard"
          target="_blank"
          data-aos="zoom-in-up"
        >
          Source Code
        </SecondaryBtn>
      </ButtonsWrapper>
      <ImageTimelineWrapper>
        <CurrentProjectImage src={dashboard} alt="Dashboard Web App" />
        <TimeLine data-aos="fade-right">
          <CalendarIcon>
            <i className="bi bi-calendar-week-fill"></i>
          </CalendarIcon>
          <TimelineHeading>07/2023 - 09/2023</TimelineHeading>
          <TimelineDesc>Timeline</TimelineDesc>
        </TimeLine>
      </ImageTimelineWrapper>
      <Divider />
      <Divider />
      <HeadingTwo>Check Out More</HeadingTwo>
      <ProjectsWrapper>
        <Project href="/projects/ecommerce" data-aos="zoom-in-up">
          <ImageWrapper>
            <ProjectImage src={ecommerce} alt="E-Commerce Web App" />
          </ImageWrapper>
          <div>
            <ProjectName>E-Commerce Web App</ProjectName>
            <ProjectDesc>Shopping Web Application</ProjectDesc>
          </div>
        </Project>
        <Project href="/projects/primevideo" data-aos="zoom-in-up">
          <ImageWrapper>
            <ProjectImage src={primevideo} alt="Prime Video Clone" />
          </ImageWrapper>
          <div>
            <ProjectName>Prime Video Clone</ProjectName>
            <ProjectDesc>UI of Prime Video Landing Page</ProjectDesc>
          </div>
        </Project>
      </ProjectsWrapper>
      <SecondaryBtn className="all-work" href="/projects" data-aos="zoom-in-up">
        Uncover All Work
      </SecondaryBtn>
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
    transition: background-color 0.5s ease-in-out !important;
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
    transition: border 0.5s ease-in-out !important;
    transition-delay: none !important;
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
