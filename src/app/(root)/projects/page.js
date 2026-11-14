"use client";

import { projectCards } from "@/app/data/projects";
import styled from "styled-components";
import { BaseLayout } from "@/app/components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import { ProjectCard } from "@/app/components/ProjectCard";

export default function Projects() {
  const pageData = {
    heading: "Projects",
    description: "Explore a showcase of completed and ongoing projects",
  };

  return (
    <BaseLayout>
      <PageHeader pageData={pageData} />
      <ProjectsWrapper>
        {projectCards.map((project, index) => (
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
