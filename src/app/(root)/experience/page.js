"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import playerzpot from "../../../../public/assets/playerzpot.jpg";
import nullclass from "../../../../public/assets/nullclass-logo.png";
import hasbasoft from "../../../../public/assets/hasbasoft-logo.png";
import appavengers from "../../../../public/assets/app-avengers-logo.jpg";
import certificateofnetflix from "../../../../public/assets/certificate-of-netflix.png";
import certificateoftraining from "../../../../public/assets/certificate-of-training.png";
import certificateofdicegame from "../../../../public/assets/certificate-of-dicegame.png";
import certificateofecommerce from "../../../../public/assets/certificate-of-ecommerce.png";
import certificateofinternship from "../../../../public/assets/certificate-of-internship.png";
import certificateofmusicwithjs from "../../../../public/assets/certificate-of-musicwithjs.png";

export default function Experience() {
  const { theme } = useSelector(uiState);

  const experiencesData = [
    {
      company: "Playerzpot Media Pvt Ltd",
      imageSrc: playerzpot,
      alt: "Playerzpot Media Pvt Ltd",
      period: "May 2024 - Present",
      role: "SDE 1 - Nodejs",
      location: "Vashi",
      content:
        "As an SDE 1 - Node.js at Playerzpot Media Pvt Ltd, I am involved in backend development using Node.js. My responsibilities include designing and implementing APIs, optimizing server performance, and ensuring the reliability of server-side applications. I engage in code reviews, and contribute to improving our development processes.",
    },
    {
      company: "AppAvengers Labs Pvt Ltd",
      imageSrc: appavengers,
      alt: "AppAvengers Labs Pvt Ltd",
      period: "July 2023 - April 2024",
      role: "Junior Web Developer",
      location: "Remote",
      content:
        "As a Junior Web Developer at AppAvengers Labs Pvt Ltd, I'm contributing to web app development with Next.js, Angular and Web3 Technologies. I'm designing interfaces, implementing features, and engaging in code reviews for continuous learning.",
    },
    {
      company: "NullClass",
      imageSrc: nullclass,
      alt: "NullClass",
      period: "December 2022 - January 2023",
      role: "Project Intern",
      location: "Remote",
      content:
        "As a NullClass Project Intern, I created a responsive MERN Stack app (Stack Overflow Clone) and added features like a chat bot and community section. I gained valuable experience in React, Node.js, Express.js, and MongoDB, improving my skills in building scalable and user-centric web applications.",
    },
    {
      company: "Hasbasoft Technology Pvt Ltd",
      imageSrc: hasbasoft,
      alt: "Hasbasoft Technology Pvt Ltd",
      period: "August 2021 - October 2022",
      role: "MERN Stack Software Trainee",
      location: "Online",
      content:
        "As a Software Trainee at Hasbasoft Technology Pvt Ltd, I built several MERN Stack applications, including an Ecommerce platform. Through hands-on experience, I gained expertise in React, Node.js, Express.js, and MongoDB, developing dynamic and user-friendly web solutions in a professional software development environment.",
    },
  ];

  const certificatesData = [
    {
      title: "Certificate of Internship",
      imageSrc: certificateofinternship,
      alt: "Certificate of Internship",
      description:
        "I successfully completed a MERN stack web development internship, earning a certification that demonstrates my proficiency in building dynamic web applications using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      title: "Certificate of Training",
      imageSrc: certificateoftraining,
      alt: "Certificate of Training",
      description:
        "I have successfully completed a comprehensive MERN stack web development training program, acquiring in-depth knowledge and skills in MongoDB, Express.js, React, and Node.js.",
    },
    {
      title: "E-Commerce Portal",
      imageSrc: certificateofecommerce,
      alt: "E-Commerce Portal",
      description:
        "I have received a certification in MERN stack web development, specializing in creating and maintaining e-commerce portal web applications with expertise in MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      title: "Dice Game",
      imageSrc: certificateofdicegame,
      alt: "Dice Game",
      description:
        "Certification obtained for advanced JavaScript-based dice game web application. Demonstrating proficiency in developing interactive and engaging gaming experiences using JavaScript and related technologies.",
    },
    {
      title: "Music in JavaScript",
      imageSrc: certificateofmusicwithjs,
      alt: "Music in JavaScript",
      description:
        "Certification of music player web application in advance JavaScript. Verified proficiency in developing interactive and seamless music players, utilizing advanced JavaScript techniques for enhanced user experience.",
    },
    {
      title: "Netflix Like Frontend",
      imageSrc: certificateofnetflix,
      alt: "Netflix Like Frontend",
      description:
        "Certification received for creating a Netflix clone web application using HTML and CSS, demonstrating proficiency in frontend development and UI design.",
    },
  ];

  return (
    <BaseLayout>
      <Heading data-aos="fade-right">Experience</Heading>
      <Description data-aos="fade-right">
        Navigate through professional milestones and achievements
      </Description>
      <ExperiencesWrapper>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceWrapper>
              <LeftSide data-aos="fade-left">
                <CompanyImage
                  className="rounded-3"
                  src={experience.imageSrc}
                  alt={experience.alt}
                  width={100}
                  height={100}
                />
              </LeftSide>
              <RightSide>
                <CompanyName>
                  {experience.company} <span>({experience.period})</span>
                </CompanyName>
                <Role>
                  {experience.role} <span>({experience.location})</span>
                </Role>
                <Content>{experience.content}</Content>
              </RightSide>
            </ExperienceWrapper>
            {index < experiencesData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ExperiencesWrapper>
      <HeadingTwo>Certificates</HeadingTwo>
      <CertificatesWrapper>
        {certificatesData.map((certificate, index) => (
          <CertificateWrapper key={index} data-aos="zoom-in-up">
            <CertificateTitle>{certificate.title}</CertificateTitle>
            <CertificateImage
              src={certificate.imageSrc}
              alt={certificate.alt}
            />
            <CertificateDesc>{certificate.description}</CertificateDesc>
          </CertificateWrapper>
        ))}
      </CertificatesWrapper>
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
  margin-bottom: 50px !important;
  padding-bottom: 30px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  border-bottom: 2px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const ExperienceWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 20%;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const CompanyImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    position: initial;
    transform: initial !important;
  }
`;

const RightSide = styled.div`
  width: 80%;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const CompanyName = styled.p`
  font-size: 16px;
  margin-bottom: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
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
  transition: all 0.5s ease-in-out;
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
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
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

const CertificatesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const CertificateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const CertificateTitle = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 0px 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const CertificateImage = styled(Image)`
  width: 100%;
  height: auto;
  transition: all 0.5s ease-in-out;
`;

const CertificateDesc = styled.p`
  font-size: 14px;
  padding: 0px 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;
