"use client";

import { educationCertificates, educations } from "@/app/data/education";
import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { BaseLayout } from "@/app/components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import { SectionHeader } from "@/app/components/SectionHeader";
import { CertificateCard } from "@/app/components/CertificateCard";

export default function Education() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const pageData = {
    heading: "Education",
    description: "Explore academic achievements and qualifications",
  };

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
      <PageHeader pageData={pageData} />
      <EducationsWrapper>
        {educations.map((education, index) => (
          <React.Fragment key={index}>
            <EducationWrapper>
              <EducationImageNameWrapper>
                <EducationImage
                  data-aos="fade-left"
                  className="rounded-3"
                  src={education.image}
                  alt={education.alt}
                  width={65}
                  height={65}
                />
                <div style={{ width: "100%" }}>
                  <EducationName>
                    {screenWidth > 500
                      ? education.degree
                      : (education.degreeShort ?? education.degree)}
                  </EducationName>
                  <College>
                    {screenWidth > 500
                      ? education.college
                      : (education.collegeShort ?? education.college)}
                  </College>
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
            {index < educations.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </EducationsWrapper>
      <SectionHeader sectionHeading="Certificates" />
      <CertificatesWrapper>
        {educationCertificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </CertificatesWrapper>
    </BaseLayout>
  );
}

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
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const College = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
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
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;

  & > i {
    margin-right: 5px;
  }
`;

const Location = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;

  & > i {
    margin-right: 5px;
  }
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border};
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
