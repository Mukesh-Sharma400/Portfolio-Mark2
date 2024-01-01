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
import primevideo from "../../../../public/assets/primevideo-thumbnail.jpg";
import socialnetwork from "../../../../public/assets/socialnetwork-thumbnail.jpg";
import stackoverflow from "../../../../public/assets/stack-overflow-thumbnail.jpg";

export default function Projects() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <Heading>Projects</Heading>
      <Description>
        Explore a showcase of completed and ongoing projects
      </Description>
      <ProjectsWrapper>
        <Project href="/projects/socialnetwork">
          <ImageWrapper>
            <ProjectImage src={socialnetwork} alt="SocialNetwork Web App" />
          </ImageWrapper>
          <div>
            <Name>SocialNetwork Web App</Name>
            <Desc>Social Media Web Application</Desc>
          </div>
        </Project>
        <Project href="/projects/memories">
          <ImageWrapper>
            <ProjectImage src={memories} alt="Memories Web App" />
          </ImageWrapper>
          <div>
            <Name>Memories Web App</Name>
            <Desc>Social Blog Web Application</Desc>
          </div>
        </Project>
        <Project href="/projects/stackoverflow">
          <ImageWrapper>
            <ProjectImage src={stackoverflow} alt="Stack Overflow Clone" />
          </ImageWrapper>
          <div>
            <Name>Stack Overflow Clone</Name>
            <Desc>Copy of Stack Overflow Application</Desc>
          </div>
        </Project>
        <Project href="/projects/youtube">
          <ImageWrapper>
            <ProjectImage src={youtube} alt="YouTube Clone" />
          </ImageWrapper>
          <div>
            <Name>YouTube Clone</Name>
            <Desc>Copy of YouTube Application</Desc>
          </div>
        </Project>
        <Project href="/projects/dashboard">
          <ImageWrapper>
            <ProjectImage src={dashboard} alt="Dashboard Web App" />
          </ImageWrapper>
          <div>
            <Name>Dashboard Web App</Name>
            <Desc>Data Visualization Web Application</Desc>
          </div>
        </Project>
        <Project href="/projects/ecommerce">
          <ImageWrapper>
            <ProjectImage src={ecommerce} alt="E-Commerce Web App" />
          </ImageWrapper>
          <div>
            <Name>E-Commerce Web App</Name>
            <Desc>Shopping Web Application</Desc>
          </div>
        </Project>
        <Project href="/projects/primevideo">
          <ImageWrapper>
            <ProjectImage src={primevideo} alt="Prime Video Clone" />
          </ImageWrapper>
          <div>
            <Name>Prime Video Clone</Name>
            <Desc>UI of Prime Video Landing Page</Desc>
          </div>
        </Project>
        <Project href="/projects/netflix">
          <ImageWrapper>
            <ProjectImage src={netflix} alt="Netflix Clone" />
          </ImageWrapper>
          <div>
            <Name>Netflix Clone</Name>
            <Desc>UI of Netflix Landing Page</Desc>
          </div>
        </Project>
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
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
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
  width: 350px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const ProjectImage = styled(Image)`
  width: 350px;
  height: 200px;
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
