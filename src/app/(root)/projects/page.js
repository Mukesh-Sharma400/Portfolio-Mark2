"use client";

import Link from "next/link";
import Image from "next/image";
import { uiState } from "%/uiSlice";
import styled from "styled-components";
import { useSelector } from "react-redux";
import youtube from "#/youtube-thumbnail.png";
import netflix from "#/netflix-thumbnail.jpg";
import memories from "#/memories-thumbnail.jpg";
import ecommerce from "#/ecommerce-thumbnail.jpg";
import dashboard from "#/dashboard-thumbnail.webp";
import mjinterior from "#/mjinterior-thumbnail.png";
import primevideo from "#/primevideo-thumbnail.jpg";
import BaseLayout from "@/app/components/BaseLayout";
import socialnetwork from "#/socialnetwork-thumbnail.jpg";
import stackoverflow from "#/stack-overflow-thumbnail.jpg";
import opinion from "#/opinion-trading-league-thumbnail.png";
import npsmutualfund from "#/nps-mutual-funds-thumbnail.webp";

export default function Projects() {
  const { theme } = useSelector(uiState);

  const projectsData = [
    {
      name: "NPS & Mutual Fund Module",
      imageSrc: npsmutualfund,
      href: "/projects/nps-mutual-fund-module",
      description: "Valuefy Technologies Pvt Ltd",
    },
    {
      name: "Opinion Trading & League",
      imageSrc: opinion,
      href: "/projects/opinion-trading-league",
      description: "Playerzpot Media Pvt Ltd",
    },
    {
      name: "SocialNetwork Web App",
      imageSrc: socialnetwork,
      href: "/projects/social-network",
      description: "Social Media Web Application",
    },
    {
      name: "Memories Web App",
      imageSrc: memories,
      href: "/projects/memories-webapp",
      description: "Social Blog Web Application",
    },
    {
      name: "Stack Overflow Clone",
      imageSrc: stackoverflow,
      href: "/projects/stack-overflow-clone",
      description: "Copy of Stack Overflow Application",
    },
    {
      name: "YouTube Clone",
      imageSrc: youtube,
      href: "/projects/youtube-clone",
      description: "Copy of YouTube Application",
    },
    {
      name: "Dashboard Web App",
      imageSrc: dashboard,
      href: "/projects/dashboard-webapp",
      description: "Data Visualization Web Application",
    },
    {
      name: "E-Commerce Web App",
      imageSrc: ecommerce,
      href: "/projects/ecommerce-webapp",
      description: "Shopping Web Application",
    },
    {
      name: "Prime Video Clone",
      imageSrc: primevideo,
      href: "/projects/prime-video-clone",
      description: "UI of Prime Video Landing Page",
    },
    {
      name: "Netflix Clone",
      imageSrc: netflix,
      href: "/projects/netflix-clone",
      description: "UI of Netflix Landing Page",
    },
    {
      name: "MJ Interior",
      imageSrc: mjinterior,
      href: "/projects/mj-interior",
      description: "MJ Interior Company Website",
    },
  ];

  return (
    <BaseLayout>
      <Heading data-aos="fade-right">Projects</Heading>
      <Description data-aos="fade-right">
        Explore a showcase of completed and ongoing projects
      </Description>
      <ProjectsWrapper>
        {projectsData.map((project, index) => (
          <Project key={index} href={project.href} data-aos="zoom-in-up">
            <ImageWrapper>
              <ProjectImage src={project.imageSrc} alt={project.name} />
            </ImageWrapper>
            <div>
              <Name>{project.name}</Name>
              <Desc>{project.description}</Desc>
            </div>
          </Project>
        ))}
      </ProjectsWrapper>
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

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 50px 0;
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

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const Desc = styled.p`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;
