import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const SkillItem = ({ skill, index }) => {
  return (
    <Skill data-aos="fade-right" data-aos-delay={`${(index + 1) * 100}`}>
      <SkillImage src={skill.imageSrc} alt={skill.name} />
      {skill.name}
    </Skill>
  );
};

const Skill = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 5px;
  padding-bottom: 10px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;

  @media (max-width: 426px) {
    margin: 0 auto;
  }
`;

const SkillImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.5s ease-in-out;
`;
