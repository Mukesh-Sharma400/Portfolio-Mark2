"use client";

import Image from "next/image";
import { uiState } from "%/uiSlice";
import valuefy from "#/valuefy.jpeg";
import styled from "styled-components";
import playerzpot from "#/playerzpot.jpg";
import { useSelector } from "react-redux";
import nullclass from "#/nullclass-logo.png";
import hasbasoft from "#/hasbasoft-logo.png";
import appavengers from "#/app-avengers-logo.jpg";
import React, { useEffect, useState } from "react";
import BaseLayout from "@/app/components/BaseLayout";
import certificateofnetflix from "#/certificate-of-netflix.png";
import certificateoftraining from "#/certificate-of-training.png";
import certificateofdicegame from "#/certificate-of-dicegame.png";
import certificateofecommerce from "#/certificate-of-ecommerce.png";
import certificateofinternship from "#/certificate-of-internship.png";
import certificateofmusicwithjs from "#/certificate-of-musicwithjs.png";

export default function Experience() {
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

  const experiencesData = [
    {
      company: "Valuefy Technologies Pvt Ltd",
      imageSrc: valuefy,
      alt: "Valuefy Technologies Pvt Ltd",
      period: "03/2025 - Present",
      role: "Software Developer Engineer",
      location: "Thane",
      content: [
        "Delivered backend solutions for the <b>National Pension System (NPS) onboarding module</b>, and provided <b>enhancements & maintenance</b> for the <b>Mutual Fund processing module</b>.",
        "Built and optimized <b>RESTful APIs</b> for user <b>onboarding, data validation, and external client interactions</b>.",
        "Integrated with <b>third-party APIs</b> to securely <b>fetch and process financial/transactional data</b>.",
        "Managed <b>application deployment and scaling on OpenShift</b>, ensuring <b>high availability and reliability</b>.",
        "Performed <b>Oracle database administration</b> and <b>query optimization</b> for <b>large-scale financial datasets</b>.",
        "Diagnosed and resolved <b>network-related issues</b> impacting <b>application connectivity and performance</b>.",
        "Provided <b>end-to-end maintenance & production support</b>, ensuring <b>smooth operation of critical financial workflows</b>.",
      ],
    },
    {
      company: "Playerzpot Media Pvt Ltd",
      imageSrc: playerzpot,
      alt: "Playerzpot Media Pvt Ltd",
      period: "05/2024 - 02/2025",
      role: "Software Developer Engineer",
      location: "Vashi",
      content: [
        "Delivered backend solutions for two major projects: <b>Opinion</b>, featuring <b>Trading</b> and <b>League</b> modules, and <b>Stock Saga</b>.",
        "Designed and deployed several <b>RESTful APIs</b>, ensuring high performance and seamless integration with frontend systems.",
        "Enhanced server response times by <b>10-20%</b> through caching, query optimization and load balancing.",
        "Conducted <b>weekly code reviews</b>, fostering clean code practices and mentoring team members.",
        "Engineered a <b>scalable and resilient backend API</b> structure to ensure high availability, achieving <b>seamless performance under heavy user concurrency</b>.",
        "Handled <b>production deployment and monitoring</b>, ensuring high availability and reliability in a live environment.",
      ],
    },
    {
      company: "AppAvengers Labs Pvt Ltd",
      imageSrc: appavengers,
      alt: "AppAvengers Labs Pvt Ltd",
      period: "07/2023 - 04/2024",
      role: "Junior Web Developer",
      location: "Remote",
      content: [
        "Contributed to web app development using <b>Next.js</b>, <b>Angular</b>, and <b>Web3 technologies</b>.",
        "Successfully delivered <b>3-4 different domain projects</b>, designing user interfaces an implementing core features.",
        "Enhanced application <b>performance and usability</b> through efficient coding practices.",
        "Participated in <b>code reviews</b> to ensure quality and foster continuous learning.",
        "Creating <b>responsive web applications</b>, delivering a seamless user experience across all devices.",
      ],
    },
    {
      company: "NullClass",
      imageSrc: nullclass,
      alt: "NullClass",
      period: "12/2022 - 01/2023",
      role: "Project Intern",
      location: "Remote",
      content: [
        "Developed a responsive <b>MERN stack app</b> (Stack Overflow Clone) with advance features like a <b>chat bot</b> and <b>community section</b>.",
        "Enhanced skills in <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>.",
        "Gained experience in building <b>scalable</b> and <b>user-centric web applications</b>.",
        "Deployed both the <b>frontend</b> and <b>backend</b> on servers, ensuring <b>seamless integration</b> and optimal performance.",
        "Successfully launched the application, making it <b>live and accessible</b> on the internet for users.",
      ],
    },
    {
      company: "Hasbasoft Technology Pvt Ltd",
      imageSrc: hasbasoft,
      alt: "Hasbasoft Technology Pvt Ltd",
      period: "08/2021 - 10/2022",
      role:
        screenWidth > 400
          ? "MERN Stack Software Trainee"
          : "MERN Software Trainee",
      location: "Online",
      content: [
        "Developed several <b>MERN stack applications</b>, including a dynamic e-commerce platform.",
        "Enhanced skills in <b>React.js</b>, <b>Node.js</b>, <b>Express.js</b>, and <b>MongoDB</b>, gaining hands-on experience in building scalable applications.",
        "Worked in a <b>professional development environment</b>, implementing best practices and modern web development techniques.",
        "Designed and developed <b>user-friendly interfaces</b>, ensuring optimal performance and responsiveness.",
        "Collaborated with mentors to refine coding skills and understand advanced <b>software development processes</b>.",
        "Participated in <b>code reviews</b> and gained exposure to <b>real-world project management workflows</b>.",
      ],
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
              <CompanyImageNameWrapper>
                <CompanyImage
                  data-aos="fade-left"
                  className="rounded-3"
                  src={experience.imageSrc}
                  alt={experience.alt}
                  width={65}
                  height={65}
                />
                <div style={{ width: "100%" }}>
                  <Role>{experience.role}</Role>
                  <CompanyName>{experience.company}</CompanyName>
                  <TimeLocationWrapper>
                    <Time>
                      <i className="bi bi-calendar3"></i>
                      {experience.period}
                    </Time>
                    <Location>
                      <i className="bi bi-geo-alt-fill"></i>
                      {experience.location}
                    </Location>
                  </TimeLocationWrapper>
                </div>
              </CompanyImageNameWrapper>
              <ContentWrapper>
                {experience.content.map((point, index) => (
                  <Content
                    key={index}
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </ContentWrapper>
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
  flex-direction: column;
  gap: 30px;
  transition: all 0.5s ease-in-out;
`;

const CompanyImageNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 30px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    gap: 20px;
  }
  @media (max-width: 376px) {
    gap: 10px;
  }
`;

const CompanyImage = styled(Image)`
  transition: all 0.5s ease-in-out;
`;

const Role = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const CompanyName = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const TimeLocationWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: all 0.5s ease-in-out;

  @media (max-width: 376px) {
    gap: 0;
    justify-content: space-between;
  }
`;

const Time = styled.p`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;

  & > i {
    margin-right: 5px;
  }
`;

const Location = styled.p`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;

  & > i {
    margin-right: 5px;
  }
`;

const ContentWrapper = styled.ul`
  padding-left: 14px;
`;

const Content = styled.li`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;

  & > b {
    font-weight: 600;
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
  }
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
  grid-template-columns: 1fr 1fr;
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
