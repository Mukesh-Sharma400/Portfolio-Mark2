"use client";

import js from "#/js.png";
import git from "#/git.png";
import css from "#/css.png";
import sql from "#/sql.png";
import html from "#/html.png";
import node from "#/node.jpg";
import next from "#/next.jpg";
import Image from "next/image";
import agile from "#/agile.png";
import mongo from "#/mongo.png";
import redis from "#/redis.png";
import react from "#/react.webp";
import docker from "#/docker.png";
import gitHub from "#/github.webp";
import styledC from "#/styled.png";
import { uiState } from "%/uiSlice";
import jenkins from "#/jenkins.jpg";
import express from "#/express.jpg";
import angular from "#/angular.jpg";
import postman from "#/postman.png";
import tailwind from "#/tailwind.png";
import material from "#/material.png";
import styled from "styled-components";
import openshift from "#/openshift.png";
import bitBucket from "#/bitbucket.png";
import bootstrap from "#/bootstrap.png";
import { useSelector } from "react-redux";
import typescript from "#/typescript.png";
import { useEffect, useState } from "react";
import profilePic from "#/profile-picture-blue.png";
import BaseLayout from "@/app/components/BaseLayout";

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

  const skillsData = {
    frontend: [
      { name: "HTML", imageSrc: html },
      { name: "CSS", imageSrc: css },
      { name: "JavaScript", imageSrc: js },
      { name: "TypeScript", imageSrc: typescript },
      { name: "ReactJS", imageSrc: react },
      { name: "NextJS", imageSrc: next },
      { name: "Angular", imageSrc: angular },
      { name: "Styled", imageSrc: styledC },
      { name: "Material", imageSrc: material },
      { name: "Bootstrap", imageSrc: bootstrap },
      { name: "Tailwind", imageSrc: tailwind },
    ],
    backend: [
      { name: "NodeJS", imageSrc: node },
      { name: "ExpressJS", imageSrc: express },
      { name: "MongoDB", imageSrc: mongo },
      { name: "SQL", imageSrc: sql },
      { name: "Redis", imageSrc: redis },
      // { name: "RESTful APIs", imageSrc: api }, // optional if you have an icon
      // { name: "Third-party Integrations", imageSrc: integration }, // optional
    ],
    devops: [
      { name: "Docker", imageSrc: docker },
      { name: "OpenShift", imageSrc: openshift },
      { name: "Jenkins", imageSrc: jenkins },
      { name: "Git", imageSrc: git },
      { name: "GitHub", imageSrc: gitHub },
      { name: "Bitbucket", imageSrc: bitBucket },
      { name: "Postman", imageSrc: postman },
      { name: "Agile", imageSrc: agile },
      // { name: "API Testing", imageSrc: testing }, // optional if you have an icon
    ],
  };

  const interests = [
    { text: "Coding", class: "first" },
    { text: "Music", class: "" },
    { text: "Chess", class: "third" },
    { text: "Cricket", class: "forth" },
    { text: "Football", class: "" },
    { text: "Pool", class: "last" },
  ];

  const languages = [
    { text: "English", class: "first" },
    { text: "Hindi", class: "" },
    { text: "Marathi", class: "last" },
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
            Hi, I'm Mukesh Sharma, a passionate Software Development Engineer
            currently working at Valuefy Technologies Pvt Ltd. Previously, I
            contributed to backend development and API design at Playerzpot
            Media Pvt Ltd, and before that, I gained valuable experience as a
            Junior Web Developer at AppAvengers Labs Pvt Ltd. My journey began
            with an internship at NullClass, where I built a strong foundation
            in the MERN Stack and developed an interest in building efficient,
            scalable applications.
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
        I specialize in both frontend and backend technologies, including
        ReactJS, NextJS, Angular, Node.js, Express.js, MongoDB, SQL, and Redis.
        I also work with tools and frameworks like Material UI, Tailwind CSS,
        Bootstrap, and Styled Components to create responsive and modern
        interfaces. While my primary focus lies in full-stack JavaScript
        development, I have basic familiarity with DevOps tools such as Docker,
        Jenkins, Git, and Postman, which help me understand and support the
        deployment and integration processes.
      </MyStory>
      <MyStory>
        As a self-motivated and detail-oriented developer, I constantly seek
        opportunities to improve my skills and embrace new challenges. I enjoy
        collaborating with teams, solving complex problems, and writing clean,
        maintainable code that delivers real impact. If you're looking for a
        dedicated professional who’s passionate about backend development and
        full-stack web technologies, I’d be glad to connect and collaborate.
      </MyStory>
      <SkillsSection id="skills">
        <HeadingTwo>Skills</HeadingTwo>
        {Object.entries(skillsData).map(([category, skills]) => (
          <Category key={category}>
            <CategoryTitle>
              {category === "frontend"
                ? "Frontend & UI"
                : category === "backend"
                ? "Backend & Databases"
                : "DevOps & Tools"}
            </CategoryTitle>
            <SkillsWrapper>
              {skills.map((skill, index) => (
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
          </Category>
        ))}
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

const Category = styled.div``;

const CategoryTitle = styled.h6`
  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin: 15px 0 10px !important;
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
