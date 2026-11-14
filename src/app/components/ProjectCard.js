import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export const ProjectCard = ({ project }) => {
  return (
    <Project href={project.href} data-aos="zoom-in-up">
      <ImageWrapper>
        <ProjectImage src={project.image} alt={project.name} />
      </ImageWrapper>
      <div>
        <ProjectName>{project.name}</ProjectName>
        <ProjectDesc>{project.description}</ProjectDesc>
      </div>
    </Project>
  );
};

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
