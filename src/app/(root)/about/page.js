"use client";

import { interests, languages, skills } from "@/app/data/skills";
import Image from "next/image";
import styled from "styled-components";
import { useEffect, useState } from "react";
import profilePic from "#/profile-picture.webp";
import { BaseLayout } from "@/app/components/BaseLayout";
import { SkillItem } from "@/app/components/SkillItem";
import { SectionHeader } from "@/app/components/SectionHeader";

export default function About() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
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
        <SectionHeader sectionHeading="Skills" />
        {Object.entries(skills).map(([category, skills]) => (
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
                <SkillItem key={index} skill={skill} index={index} />
              ))}
            </SkillsWrapper>
          </Category>
        ))}
      </SkillsSection>
      <InterestsSection>
        <SectionHeader sectionHeading="Interests" />
        <InterestsWrapper>
          {interests.map((interest, index) => (
            <Interest
              key={index}
              className={interest.className}
              data-aos={screenWidth > 600 ? "fade-right" : "fade-up"}
              data-aos-delay={`${(index + 1) * 100}`}
            >
              {interest.text}
            </Interest>
          ))}
        </InterestsWrapper>
      </InterestsSection>
      <LanguagesSection>
        <SectionHeader sectionHeading="Languages" />
        <LanguagesWrapper>
          {languages.map((language, index) => (
            <Language
              key={index}
              className={language.className}
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
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const MyDesc = styled.h1`
  line-height: 40px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;

const MyStory = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin-top: 10px !important;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;

const PicWrapper = styled.div`
  transition: all 0.5s ease-in-out;
`;

const SkillsSection = styled.div`
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const Category = styled.div``;

const CategoryTitle = styled.h6`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
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
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.surfaceTranslucent};
  transition: all 0.5s ease-in-out;

  &.first {
    border-top-left-radius: 10px;
  }

  &.third {
    border-top-right-radius: 10px;
  }

  &.fourth {
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
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.surfaceTranslucent};
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
