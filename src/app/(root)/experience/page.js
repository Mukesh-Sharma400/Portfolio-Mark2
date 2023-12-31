"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import Footer from "@/app/components/Footer";
import appavengers from "../../../../public/assets/app-avengers.jpg";
import nullclass from "../../../../public/assets/nullclass.png";
import hasbasoft from "../../../../public/assets/hasbasoft.png";

export default function Experience() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <Heading>Experience</Heading>
      <Description>
        Navigate through professional milestones and achievements
      </Description>
      <ExperiencesWrapper>
        <ExperienceWrapper>
          <LeftSide>
            <CompanyImage
              className="rounded-3"
              src={appavengers}
              alt="App Avengers"
              width={100}
              height={100}
            />
          </LeftSide>
          <RightSide>
            <CompanyName>
              App Avengers Technologies <span>(July 2023 - Present)</span>
            </CompanyName>
            <Role>
              Web Developer Intern <span>(Remote)</span>
            </Role>
            <Content>
              As a Web Developer Intern at App Avengers Technologies, I'm
              contributing to web app development with React.js, Next.js, and
              Web3 Technologies I'm designing interfaces, implementing features,
              and engaging in code reviews for continuous learning.
            </Content>
          </RightSide>
        </ExperienceWrapper>
        <Divider />
        <ExperienceWrapper>
          <LeftSide>
            <CompanyImage
              className="rounded-3"
              src={nullclass}
              alt="NullClass"
              width={100}
              height={100}
            />
          </LeftSide>
          <RightSide>
            <CompanyName>
              NullClass <span>(December 2022 - January 2023)</span>{" "}
            </CompanyName>
            <Role>
              Project Intern <span>(Remote)</span>
            </Role>
            <Content>
              As a NullClass Project Intern, I created a responsive MERN Stack
              app (Stack Overflow Clone) and added features like a chat bot and
              community section. I gained valuable experience in React, Node.js,
              Express.js, and MongoDB, improving my skills in building scalable
              and user-centric web applications.
            </Content>
          </RightSide>
        </ExperienceWrapper>
        <Divider />
        <ExperienceWrapper>
          <LeftSide>
            <CompanyImage
              className="rounded-3"
              src={hasbasoft}
              alt="Hasbasoft Technology"
              width={100}
              height={100}
            />
          </LeftSide>
          <RightSide>
            <CompanyName>
              Hasbasoft Technology Pvt Ltd{" "}
              <span>(August 2021 - October 2022)</span>
            </CompanyName>
            <Role>
              MERN Stack Software Trainee <span>(Remote)</span>
            </Role>
            <Content>
              As a Software Trainee at Hasbasoft Technology Pvt Ltd, I built
              several MERN Stack applications, including an Ecommerce platform.
              Through hands-on experience, I gained expertise in React, Node.js,
              Express.js, and MongoDB, developing dynamic and user-friendly web
              solutions in a professional software development environment.
            </Content>
          </RightSide>
        </ExperienceWrapper>
      </ExperiencesWrapper>
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

const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0;
`;

const ExperienceWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`;

const LeftSide = styled.div`
  width: 20%;
  position: relative;
`;

const CompanyImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
`;

const RightSide = styled.div`
  width: 80%;
`;

const CompanyName = styled.p`
  font-size: 16px;
  margin-bottom: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};

  span {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.greyColor100
        : theme.darkMode.greyColor100};
  }
`;

const Role = styled.p`
  font-size: 14px;
  margin-bottom: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};

  span {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.greyColor100
        : theme.darkMode.greyColor100};
  }
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
`;
