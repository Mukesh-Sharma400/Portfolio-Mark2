"use client";

import { projects } from "@/app/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import styled from "styled-components";
import { BaseLayout } from "@/app/components/BaseLayout";
import { BackHeader } from "@/app/components/BackHeader";

export default function ProjectPage({ params }) {
  const { slug } = params;

  const project = projects[slug];
  if (!project) notFound();

  return (
    <BaseLayout>
      <BackHeader />
      <TagsWrapper>
        {project.tech.map((tech, index) => (
          <Tag
            key={index}
            className={`my-${
              ["success", "danger", "warning", "info"][index % 4]
            }`}
            data-aos="fade-right"
            data-aos-delay={`${(index + 1) * 100}`}
          >
            #{tech}
          </Tag>
        ))}
      </TagsWrapper>
      <Heading>{project.name}</Heading>
      <Description>{project.description}</Description>
      <ButtonsWrapper>
        <PrimaryBtn href={project.live} data-aos="zoom-in-up">
          Live Preview
        </PrimaryBtn>
        <SecondaryBtn href={project.source} data-aos="zoom-in-up">
          Source Code
        </SecondaryBtn>
      </ButtonsWrapper>
      <ImageTimelineWrapper>
        <CurrentProjectImage src={project.image} alt={project.name} />
        <TimeLine data-aos="fade-right">
          <CalendarIcon>
            <i className="bi bi-calendar-week-fill"></i>
          </CalendarIcon>
          <TimelineHeading>{project.timeline}</TimelineHeading>
          <TimelineDesc>Timeline</TimelineDesc>
        </TimeLine>
      </ImageTimelineWrapper>
      <Divider />
      <HeadingTwo>Check Out More</HeadingTwo>
      <ProjectsWrapper>
        {project.related.map((relSlug, index) => {
          const rel = projects[relSlug];
          return (
            <Project
              key={index}
              href={`/projects/${relSlug}`}
              data-aos="zoom-in-up"
            >
              <ImageWrapper>
                <ProjectImage src={rel.image} alt={rel.name} />
              </ImageWrapper>
              <div>
                <ProjectName>{rel.name}</ProjectName>
                <ProjectDesc>{rel.intro}</ProjectDesc>
              </div>
            </Project>
          );
        })}
      </ProjectsWrapper>
      <SecondaryBtn className="all-work" href="/projects" data-aos="zoom-in-up">
        Uncover All Work
      </SecondaryBtn>
    </BaseLayout>
  );
}

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin: 30px 0;
  transition: all 0.5s ease-in-out;
`;

const Tag = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0 10px;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;

  &.my-success {
    color: ${({ theme }) => theme.colors.successText};
    background-color: ${({ theme }) => theme.colors.successBg};
    border: 1px solid ${({ theme }) => theme.colors.successBorder};
  }
  &.my-danger {
    color: ${({ theme }) => theme.colors.dangerText};
    background-color: ${({ theme }) => theme.colors.dangerBg};
    border: 1px solid ${({ theme }) => theme.colors.dangerBorder};
  }
  &.my-warning {
    color: ${({ theme }) => theme.colors.warningText};
    background-color: ${({ theme }) => theme.colors.warningBg};
    border: 1px solid ${({ theme }) => theme.colors.warningBorder};
  }
  &.my-info {
    color: ${({ theme }) => theme.colors.infoText};
    background-color: ${({ theme }) => theme.colors.infoBg};
    border: 1px solid ${({ theme }) => theme.colors.infoBorder};
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 25px !important;
  transition: all 0.5s ease-in-out;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 25px 0;
`;

const PrimaryBtn = styled(Link)`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: background-color 0.5s ease-in-out !important;
    background-color: ${({ theme }) => theme.colors.buttonPrimaryHover};
  }
`;

const SecondaryBtn = styled(Link)`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.border} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: border 0.5s ease-in-out !important;
    transition-delay: none !important;
    border: 1.5px solid ${({ theme }) => theme.colors.textSecondary} !important;
  }

  &.all-work {
    width: 100%;
    margin-top: 50px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  margin: 30px 0;
  background-color: ${({ theme }) => theme.colors.border};
  transition: all 0.5s ease-in-out;
`;

const ImageTimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    flex-direction: column;
  }
`;

const CurrentProjectImage = styled(Image)`
  width: 60%;
  height: auto;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const TimeLine = styled.div`
  width: 100%;
  padding: 50px 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.surfaceTranslucent};
  transition: all 0.5s ease-in-out;
`;

const CalendarIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const TimelineHeading = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const TimelineDesc = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;

const HeadingTwo = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 50px !important;
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Project = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectName = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const ProjectDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;
