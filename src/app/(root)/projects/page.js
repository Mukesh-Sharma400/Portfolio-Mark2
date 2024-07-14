"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import youtube from "../../../../public/assets/youtube-thumbnail.png";
import netflix from "../../../../public/assets/netflix-thumbnail.jpg";
import memories from "../../../../public/assets/memories-thumbnail.jpg";
import ecommerce from "../../../../public/assets/ecommerce-thumbnail.jpg";
import dashboard from "../../../../public/assets/dashboard-thumbnail.webp";
import mjinterior from "../../../../public/assets/mjinterior-thumbnail.png";
import primevideo from "../../../../public/assets/primevideo-thumbnail.jpg";
import socialnetwork from "../../../../public/assets/socialnetwork-thumbnail.jpg";
import stackoverflow from "../../../../public/assets/stack-overflow-thumbnail.jpg";

export default function Projects() {
  const { theme } = useSelector(uiState);

  const projectsData = [
    {
      name: "SocialNetwork Web App",
      imageSrc: socialnetwork,
      href: "/projects/socialnetwork",
      description: "Social Media Web Application",
    },
    {
      name: "Memories Web App",
      imageSrc: memories,
      href: "/projects/memories",
      description: "Social Blog Web Application",
    },
    {
      name: "Stack Overflow Clone",
      imageSrc: stackoverflow,
      href: "/projects/stackoverflow",
      description: "Copy of Stack Overflow Application",
    },
    {
      name: "YouTube Clone",
      imageSrc: youtube,
      href: "/projects/youtube",
      description: "Copy of YouTube Application",
    },
    {
      name: "Dashboard Web App",
      imageSrc: dashboard,
      href: "/projects/dashboard",
      description: "Data Visualization Web Application",
    },
    {
      name: "E-Commerce Web App",
      imageSrc: ecommerce,
      href: "/projects/ecommerce",
      description: "Shopping Web Application",
    },
    {
      name: "Prime Video Clone",
      imageSrc: primevideo,
      href: "/projects/primevideo",
      description: "UI of Prime Video Landing Page",
    },
    {
      name: "Netflix Clone",
      imageSrc: netflix,
      href: "/projects/netflix",
      description: "UI of Netflix Landing Page",
    },
    {
      name: "MJ Interior",
      imageSrc: mjinterior,
      href: "/projects/mjinterior",
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
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
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
