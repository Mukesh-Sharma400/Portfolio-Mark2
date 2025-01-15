"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { uiState } from "../../redux/uiSlice";
import js from "../../../../public/assets/js.png";
import git from "../../../../public/assets/git.png";
import css from "../../../../public/assets/css.png";
import sql from "../../../../public/assets/sql.png";
import BaseLayout from "@/app/components/BaseLayout";
import html from "../../../../public/assets/html.png";
import node from "../../../../public/assets/node.jpg";
import next from "../../../../public/assets/next.jpg";
import agile from "../../../../public/assets/agile.png";
import mongo from "../../../../public/assets/mongo.png";
import react from "../../../../public/assets/react.webp";
import gitHub from "../../../../public/assets/github.webp";
import styledC from "../../../../public/assets/styled.png";
import jenkins from "../../../../public/assets/jenkins.jpg";
import express from "../../../../public/assets/express.jpg";
import angular from "../../../../public/assets/angular.jpg";
import tailwind from "../../../../public/assets/tailwind.png";
import material from "../../../../public/assets/material.png";
import bitBucket from "../../../../public/assets/bitbucket.png";
import bootstrap from "../../../../public/assets/bootstrap.png";
import typescript from "../../../../public/assets/typescript.png";
import profilePic from "../../../../public/assets/profile-picture-blue.png";

export default function About() {
  const { theme } = useSelector(uiState);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    { name: "SQL", imageSrc: sql },
    { name: "Typescript", imageSrc: typescript },
    { name: "Styled", imageSrc: styledC },
    { name: "Bootstrap", imageSrc: bootstrap },
    { name: "Tailwind", imageSrc: tailwind },
    { name: "Material", imageSrc: material },
    { name: "Git", imageSrc: git },
    { name: "GitHub", imageSrc: gitHub },
    { name: "Bitbucket", imageSrc: bitBucket },
    { name: "Jenkins", imageSrc: jenkins },
    { name: "Agile", imageSrc: agile },
  ];

  const interests = [
    { class: "first", text: "Coding" },
    { class: "", text: "Music" },
    { class: "third", text: "Chess" },
    { class: "forth", text: "Cricket" },
    { class: "", text: "Football" },
    { class: "last", text: "Pool" },
  ];

  const languages = [
    { class: "first", text: "English" },
    { class: "", text: "Hindi" },
    { class: "last", text: "Marathi" },
  ];

  return (
    <BaseLayout>
      <IntroWrapper>
        <DetailsWrapper>
          <MyName data-aos="fade-right">Mukesh Sharma</MyName>
          <MyDesc data-aos="fade-right" data-aos-delay="100">
            FULL STACK DEVELOPER
          </MyDesc>
          <MyStory>
            Hi, I'm Mukesh Sharma, a passionate IT professional currently
            working as an SDE 1 - Node.js at Playerzpot Media Pvt Ltd. In my
            role, I focus on backend development, designing and implementing
            robust APIs, and optimizing server performance. Prior to this, I
            gained valuable experience as a Junior Web Developer at AppAvengers
            Labs Pvt Ltd, and honed my skills in the MERN Stack during an
            internship at NullClass.
          </MyStory>
        </DetailsWrapper>
        <PicWrapper data-aos="fade-right" data-aos-delay="300">
          <Image
            className="rounded-3"
            src={profilePic}
            alt="Profile Picture"
            width={150}
            height={150}
          />
        </PicWrapper>
      </IntroWrapper>
      <MyStory>
        I specialize in MongoDB, Express, React, and Node.js, and I'm proficient
        with tools like Redux, Sass, and Bootstrap. My experience spans
        collaborating with diverse clients and industries, where I've adapted to
        various project requirements and emphasized clean, maintainable, and
        reusable code.
      </MyStory>
      <MyStory>
        As a self-motivated individual, I continuously seek opportunities to
        enhance my skills and tackle new challenges. If you're looking for a
        dedicated professional passionate about backend development and web
        technologies, feel free to reach out for potential collaborations.
      </MyStory>
      <SkillsSection id="skills">
        <HeadingTwo>Skills</HeadingTwo>
        <SkillsWrapper>
          {skillsData.map((skill, index) => (
            <Skill
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <SkillImage src={skill.imageSrc} alt={skill.name} />
              {skill.name}
            </Skill>
          ))}
        </SkillsWrapper>
      </SkillsSection>
      <InterestsSection>
        <HeadingTwo>Interests</HeadingTwo>
        <InterestsWrapper>
          {interests.map((interest, index) => (
            <Interest
              key={index}
              className={interest.class}
              data-aos={screenWidth > 600 ? "fade-right" : "fade-up"}
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {interest.text}
            </Interest>
          ))}
        </InterestsWrapper>
      </InterestsSection>
      <LanguagesSection>
        <HeadingTwo>Languages</HeadingTwo>
        <LanguagesWrapper>
          {languages.map((language, index) => (
            <Language
              key={index}
              className={language.class}
              data-aos={screenWidth > 600 ? "fade-right" : "fade-up"}
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {language.text}
            </Language>
          ))}
        </LanguagesWrapper>
      </LanguagesSection>
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
