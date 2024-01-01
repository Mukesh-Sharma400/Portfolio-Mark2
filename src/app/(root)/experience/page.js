"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
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
      <HeadingTwo>Certificates</HeadingTwo>
      <CertificatesWrapper>
        <CertificateWrapper>
          <CertificateTitle>Certificate of Internship</CertificateTitle>
          <CertificateImage
            src={certificateofinternship}
            alt="Certificate of Internship"
          />
          <CertificateDesc>
            I successfully completed a MERN stack web development internship,
            earning a certification that demonstrates my proficiency in building
            dynamic web applications using MongoDB, Express.js, React.js, and
            Node.js.
          </CertificateDesc>
        </CertificateWrapper>
        <CertificateWrapper>
          <CertificateTitle>Certificate of Training</CertificateTitle>
          <CertificateImage
            src={certificateoftraining}
            alt="Certificate of Training"
          />
          <CertificateDesc>
            I have successfully completed a comprehensive MERN stack web
            development training program, acquiring in-depth knowledge and
            skills in MongoDB, Express.js, React, and Node.js.
          </CertificateDesc>
        </CertificateWrapper>
        <CertificateWrapper>
          <CertificateTitle>E-Commerce Portal</CertificateTitle>
          <CertificateImage
            src={certificateofecommerce}
            alt="E-Commerce Portal"
          />
          <CertificateDesc>
            I have received a certification in MERN stack web development,
            specializing in creating and maintaining e-commerce portal web
            applications with expertise in MongoDB, Express.js, React.js, and
            Node.js.
          </CertificateDesc>
        </CertificateWrapper>
        <CertificateWrapper>
          <CertificateTitle>Dice Game</CertificateTitle>
          <CertificateImage src={certificateofdicegame} alt="Dice Game" />
          <CertificateDesc>
            Certification obtained for advanced JavaScript-based dice game web
            application. Demonstrating proficiency in developing interactive and
            engaging gaming experiences using JavaScript and related
            technologies.
          </CertificateDesc>
        </CertificateWrapper>
        <CertificateWrapper>
          <CertificateTitle>Music in JavaScript</CertificateTitle>
          <CertificateImage
            src={certificateofmusicwithjs}
            alt="Music in JavaScript"
          />
          <CertificateDesc>
            Certification of music player web application in advance JavaScript.
            Verified proficiency in developing interactive and seamless music
            players, utilizing advanced JavaScript techniques for enhanced user
            experience.
          </CertificateDesc>
        </CertificateWrapper>
        <CertificateWrapper>
          <CertificateTitle>Netflix Like Frontend</CertificateTitle>
          <CertificateImage
            src={certificateofnetflix}
            alt="Netflix Like Frontend"
          />
          <CertificateDesc>
            Certification received for creating a Netflix clone web application
            using HTML and CSS, demonstrating proficiency in frontend
            development and UI design.
          </CertificateDesc>
        </CertificateWrapper>
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
`;

const RightSide = styled.div`
  width: 80%;
  transition: all 0.5s ease-in-out;
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  transition: all 0.5s ease-in-out;
`;

const CertificateWrapper = styled.div`
  width: 250px;
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
  width: 250px;
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
