"use client";

import styled from "styled-components";
import youtube from "#/youtube-thumbnail.png";
import netflix from "#/netflix-thumbnail.jpg";
import memories from "#/memories-thumbnail.jpg";
import ecommerce from "#/ecommerce-thumbnail.jpg";
import dashboard from "#/dashboard-thumbnail.webp";
import mjinterior from "#/mjinterior-thumbnail.png";
import primevideo from "#/primevideo-thumbnail.jpg";
import BaseLayout from "@/app/components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import socialnetwork from "#/socialnetwork-thumbnail.jpg";
import stackoverflow from "#/stack-overflow-thumbnail.jpg";
import { ProjectCard } from "@/app/components/ProjectCard";
import opinion from "#/opinion-trading-league-thumbnail.png";
import npsmutualfund from "#/nps-mutual-funds-thumbnail.webp";

export default function Projects() {
  const pageData = {
    heading: "Projects",
    description: "Explore a showcase of completed and ongoing projects",
  };

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
      <PageHeader pageData={pageData} />
      <ProjectsWrapper>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsWrapper>
    </BaseLayout>
  );
}

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
