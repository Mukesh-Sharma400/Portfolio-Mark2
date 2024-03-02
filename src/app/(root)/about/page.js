"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import js from "../../../../public/assets/js.png";
import css from "../../../../public/assets/css.png";
import BaseLayout from "@/app/components/BaseLayout";
import html from "../../../../public/assets/html.png";
import node from "../../../../public/assets/node.jpg";
import next from "../../../../public/assets/next.jpg";
import mongo from "../../../../public/assets/mongo.png";
import react from "../../../../public/assets/react.webp";
import styledc from "../../../../public/assets/styled.png";
import express from "../../../../public/assets/express.jpg";
import angular from "../../../../public/assets/angular.jpg";
import tailwind from "../../../../public/assets/tailwind.png";
import material from "../../../../public/assets/material.png";
import bootstrap from "../../../../public/assets/bootstrap.png";
import profilePic from "../../../../public/assets/profile-picture-blue.png";

export default function About() {
  const { theme } = useSelector(uiState);

  const skillsData = [
    { name: "HTML", imageSrc: html },
    { name: "CSS", imageSrc: css },
    { name: "JavaScript", imageSrc: js },
    { name: "Mongo", imageSrc: mongo },
    { name: "Express", imageSrc: express },
    { name: "React", imageSrc: react },
    { name: "Node", imageSrc: node },
    { name: "Next", imageSrc: next },
    { name: "Angular", imageSrc: angular },
    { name: "Styled", imageSrc: styledc },
    { name: "Bootstrap", imageSrc: bootstrap },
    { name: "Tailwind", imageSrc: tailwind },
    { name: "Material", imageSrc: material },
  ];

  return (
    <BaseLayout>
      <IntroWrapper>
        <DetailsWrapper>
          <MyName data-aos="fade-right">Mukesh Sharma</MyName>
          <MyDesc data-aos="fade-right">MERN STACK DEVELOPER</MyDesc>
          <MyStory data-aos="fade-right">
            Hi, I'm Mukesh Sharma, an aspiring IT professional currently working
            as a Web Developer Intern at App Avengers Technologies. Previously,
            I interned at NullClass and dedicated time to mastering the MERN
            Stack. My focus is on building efficient and user-friendly web
            applications, specializing in MongoDB, Express, React, and Node.js.
            I'm adept at using tools like Redux, Sass, and Bootstrap.
          </MyStory>
        </DetailsWrapper>
        <PicWrapper data-aos="fade-right">
          <Image
            className="rounded-3"
            src={profilePic}
            alt="Profile Picture"
            width={150}
            height={150}
          />
        </PicWrapper>
      </IntroWrapper>
      <MyStory data-aos="fade-right">
        Despite being early in my career, I've collaborated with diverse clients
        and industries, adapting to varying project requirements. As a
        self-motivated individual, I continuously seek opportunities to enhance
        my skills and tackle challenges, emphasizing the importance of clean,
        maintainable, and reusable code. If you're looking for an enthusiastic
        IT fresher passionate about web development, feel free to reach out for
        potential collaborations.
      </MyStory>
      <SkillsSection id="skills">
        <HeadingTwo>Skills</HeadingTwo>
        <SkillsWrapper>
          {skillsData.map((skill, index) => (
            <Skill key={index}>
              <SkillImage src={skill.imageSrc} alt={skill.name} />
              {skill.name}
            </Skill>
          ))}
        </SkillsWrapper>
      </SkillsSection>
      <InterestsSection>
        <HeadingTwo>Interests</HeadingTwo>
        <InterestsWrapper>
          <Interest className="first">Coding</Interest>
          <Interest>Music</Interest>
          <Interest className="third">Chess</Interest>
          <Interest className="forth">Cricket</Interest>
          <Interest>Football</Interest>
          <Interest className="last">Carrom</Interest>
        </InterestsWrapper>
      </InterestsSection>
      <LanguagesSection>
        <HeadingTwo>Languages</HeadingTwo>
        <LanguagesWrapper>
          <Language className="first">English</Language>
          <Language>Hindi</Language>
          <Language className="last">Marathi</Language>
        </LanguagesWrapper>
      </LanguagesSection>
      <Footer />
    </BaseLayout>
  );
}

const IntroWrapper = styled.div`
  display: flex;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const MyName = styled.h1`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const MyDesc = styled.h1`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const MyStory = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin-top: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const PicWrapper = styled.div`
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

const SkillsSection = styled.div`
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  transition: all 0.5s ease-in-out;
`;

const Skill = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  padding-bottom: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    margin: 0 auto;
  }
`;

const SkillImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.5s ease-in-out;
`;

const InterestsSection = styled.div`
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const InterestsWrapper = styled.div`
  width: 465px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Interest = styled.div`
  width: 150px;
  padding: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;

  &.first {
    border-top-left-radius: 10px;
  }

  &.third {
    border-top-right-radius: 10px;
  }

  &.forth {
    border-bottom-left-radius: 10px;
  }

  &.last {
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 426px) {
    flex: 1;
  }
`;

const LanguagesSection = styled.div`
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const LanguagesWrapper = styled.div`
  width: 465px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const Language = styled.div`
  width: 150px;
  padding: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;

  &.first {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &.last {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 426px) {
    flex: 1;
  }
`;
