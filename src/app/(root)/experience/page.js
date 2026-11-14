"use client";

import { experienceCertificates, experiences } from "@/app/data/experience";
import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { BaseLayout } from "@/app/components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import { SectionHeader } from "@/app/components/SectionHeader";
import { CertificateCard } from "@/app/components/CertificateCard";

export default function Experience() {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const pageData = {
    heading: "Experience",
    description: "Navigate through professional milestones and achievements",
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
      <ExperiencesWrapper>
        {experiences.map((experience, index) => (
          <React.Fragment key={index}>
            <ExperienceWrapper>
              <CompanyImageNameWrapper>
                <CompanyImage
                  data-aos="fade-left"
                  className="rounded-3"
                  src={experience.image}
                  alt={experience.alt}
                  width={65}
                  height={65}
                />
                <div style={{ width: "100%" }}>
                  <Role>
                    {screenWidth > 400
                      ? experience.role
                      : (experience.roleShort ?? experience.role)}
                  </Role>
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
            {index < experiences.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </ExperiencesWrapper>
      <SectionHeader sectionHeading="Certificates" />
      <CertificatesWrapper>
        {experienceCertificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </CertificatesWrapper>
    </BaseLayout>
  );
}

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
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const CompanyName = styled.p`
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

const ContentWrapper = styled.ul`
  padding-left: 14px;
`;

const Content = styled.li`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;

  & > b {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.border};
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
