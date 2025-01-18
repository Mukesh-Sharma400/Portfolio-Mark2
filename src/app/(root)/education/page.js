"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { uiState } from "../../redux/uiSlice";
import React, { useEffect, useState } from "react";
import BaseLayout from "@/app/components/BaseLayout";
import scct from "../../../../public/assets/scct-logo.jpeg";
import pace from "../../../../public/assets/pace-logo.webp";
import tilak from "../../../../public/assets/tilak-logo.webp";
import certificateofbrainstorm from "../../../../public/assets/certificate-of-brainstorm.png";
import certificateofaptitudetest from "../../../../public/assets/certificate-of-aptitudetest.png";

export default function Education() {
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

  const educationsData = [
    {
      degree:
        screenWidth > 500
          ? "Bachelors in Information Technology"
          : "Bachelors in I.T.",
      imageSrc: scct,
      alt:
        screenWidth > 500
          ? "Sanpada College of Commerce & Technology"
          : "S.C.C.T.",
      period: "09/2020 - 05/2023",
      college:
        screenWidth > 500
          ? "Sanpada College of Commerce & Technology"
          : "S.C.C.T.",
      location: "Sanpada",
      content:
        "I always had a passion for web development and acquired skills in various web technologies. I have created many websites, which impressed all my colleagues and professors. I became a sought-after web developer, proving that hard work and dedication can lead to success.",
    },
    {
      degree: screenWidth > 500 ? "Higher School Certification" : "H.S.C.",
      imageSrc: pace,
      alt: "Pace Education Society",
      period: "06/2016 - 05/2018",
      college: "Pace Education Society",
      location: "Nerul",
      content:
        "I was always fascinated by the mysteries of the universe. Despite not being the smartest student in my class, I spend every free moment delving into books and videos on cosmology and astrophysics.",
    },
    {
      degree: screenWidth > 500 ? "Secondary School Certification" : "S.S.C.",
      imageSrc: tilak,
      alt: "Tilak International School",
      period: "06/2015 - 03/2016",
      college: "Tilak International School",
      location: "Ghansoli",
      content:
        "I always had a keen interest in computers and technology. I used to participate in a school computer science competition despite my lack of confidence. I studied hard, boosting my confidence and setting me on a path towards a successful career in technology.",
    },
  ];

  const certificatesData = [
    {
      title: "Certificate of Brain Storm",
      imageSrc: certificateofbrainstorm,
      alt: "Certificate of Brain Storm",
      description:
        "During my second year in Bachelors, I participated in the Brain Storm event, a competitive academic challenge designed to test and enhance problem-solving and critical thinking skills. I successfully secured a Certificate of Appreciation by scoring 80%, reflecting my strong analytical abilities and dedication to continuous learning in the field of IT.",
    },
    {
      title: "Certificate of Aptitude Test",
      imageSrc: certificateofaptitudetest,
      alt: "Certificate of Aptitude Test",
      description:
        "During my first year in Bachelors, I took part in an Aptitude Test designed to evaluate logical reasoning, quantitative skills, and problem-solving abilities. I achieved an impressive score of 93%, earning a Certificate of Appreciation. This accomplishment underscores my strong analytical skills, quick thinking, and proficiency in handling challenging scenarios.",
    },
  ];

  return (
    <BaseLayout>
      <Heading data-aos="fade-right">Education</Heading>
      <Description data-aos="fade-right">
        Explore academic achievements and qualifications
      </Description>
      <EducationsWrapper>
        {educationsData.map((education, index) => (
          <React.Fragment key={index}>
            <EducationWrapper>
              <EducationImageNameWrapper>
                <EducationImage
                  data-aos="fade-left"
                  className="rounded-3"
                  src={education.imageSrc}
                  alt={education.alt}
                  width={65}
                  height={65}
                />
                <div style={{ width: "100%" }}>
                  <EducationName>{education.degree}</EducationName>
                  <College>{education.college}</College>
                  <TimeLocationWrapper>
                    <Time>
                      <i className="bi bi-calendar3"></i>
                      {education.period}
                    </Time>
                    <Location>
                      <i className="bi bi-geo-alt-fill"></i>
                      {education.location}
                    </Location>
                  </TimeLocationWrapper>
                </div>
              </EducationImageNameWrapper>
              <Content>{education.content}</Content>
            </EducationWrapper>
            {index < educationsData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </EducationsWrapper>
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

const EducationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const EducationWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  transition: all 0.5s ease-in-out;
`;

const EducationImageNameWrapper = styled.div`
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

const EducationImage = styled(Image)`
  transition: all 0.5s ease-in-out;
`;

const EducationName = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const College = styled.p`
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
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    flex-direction: column;
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

  @media (max-width: 426px) {
    width: 100%;
  }
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
