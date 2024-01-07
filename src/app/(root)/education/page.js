"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import scct from "../../../../public/assets/scct-logo.jpeg";
import pace from "../../../../public/assets/pace-logo.webp";
import tilak from "../../../../public/assets/tilak-logo.webp";
import certificateofbrainstorm from "../../../../public/assets/certificate-of-brainstorm.png";
import certificateofaptitudetest from "../../../../public/assets/certificate-of-aptitudetest.png";

export default function Education() {
  const { theme } = useSelector(uiState);

  const educationsData = [
    {
      degree: "Bachelors in Information Technology",
      imageSrc: scct,
      alt: "Sanpada College of Commerce & Technology",
      period: "September 2020 - May 2023",
      college: "Sanpada College of Commerce & Technology",
      location: "Sanpada, Navi Mumbai",
      content:
        "I always had a passion for web development and acquired skills in various web technologies. I have created many websites, which impressed all my colleagues and professors. I became a sought-after web developer, proving that hard work and dedication can lead to success.",
    },
    {
      degree: "Higher School Certification",
      imageSrc: pace,
      alt: "Pace Education Society",
      period: "June 2016 - May 2018",
      college: "Pace Education Society",
      location: "Nerul, Navi Mumbai",
      content:
        "I was always fascinated by the mysteries of the universe. Despite not being the smartest student in my class, I spend every free moment delving into books and videos on cosmology and astrophysics.",
    },
    {
      degree: "Secondary School Certification",
      imageSrc: tilak,
      alt: "Tilak International School",
      period: "June 2015 - March 2016",
      college: "Tilak International School",
      location: "Ghansoli, Navi Mumbai",
      content:
        "I always had a keen interest in computers and technology. I used to participate in a school computer science competition despite my lack of confidence. I studied hard, boosting my confidence and setting me on a path towards a successful career in technology.",
    },
  ];

  const certificatesData = [
    {
      title: "Certificate of Brain Storm",
      imageSrc: certificateofbrainstorm,
      alt: "Certificate of Brain Storm",
    },
    {
      title: "Certificate of Aptitude Test",
      imageSrc: certificateofaptitudetest,
      alt: "Certificate of Aptitude Test",
    },
  ];

  return (
    <BaseLayout>
      <Heading>Education</Heading>
      <Description>
        Explore academic achievements and qualifications
      </Description>
      <EducationsWrapper>
        {educationsData.map((education, index) => (
          <React.Fragment key={index}>
            <EducationWrapper>
              <LeftSide>
                <EducationImage
                  className="rounded-3"
                  src={education.imageSrc}
                  alt={education.alt}
                  width={100}
                  height={100}
                />
              </LeftSide>
              <RightSide>
                <EducationName>
                  {education.degree} <span>({education.period})</span>
                </EducationName>
                <College>
                  {education.college} <span>({education.location})</span>
                </College>
                <Content>{education.content}</Content>
              </RightSide>
            </EducationWrapper>
            {index < educationsData.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </EducationsWrapper>
      <HeadingTwo>Certificates</HeadingTwo>
      <CertificatesWrapper>
        {certificatesData.map((certificate, index) => (
          <CertificateWrapper key={index}>
            <CertificateTitle>{certificate.title}</CertificateTitle>
            <CertificateImage
              src={certificate.imageSrc}
              alt={certificate.alt}
            />
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

const EducationImage = styled(Image)`
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
`;

const EducationName = styled.p`
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

const College = styled.p`
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
  width: 300px;
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
