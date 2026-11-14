"use client";

import { profile } from "@/app/data/site";
import { featuredSkills } from "@/app/data/skills";
import { featuredProjectCards } from "@/app/data/projects";
import { featuredTestimonials } from "@/app/data/testimonials";
import Link from "next/link";
import { useState } from "react";
import copy from "clipboard-copy";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { Toast } from "@/app/components/Toast";
import { BaseLayout } from "@/app/components/BaseLayout";
import { SkillItem } from "@/app/components/SkillItem";
import { ProjectCard } from "@/app/components/ProjectCard";
import { SectionHeader } from "@/app/components/SectionHeader";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Home() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const nameArray = [
    { char: "H" },
    { char: "e" },
    { char: "l" },
    { char: "l" },
    { char: "o" },
    { char: "!", className: "me-2" },
    { char: "I" },
    { char: "’" },
    { char: "m", className: "me-2" },
    { char: "M" },
    { char: "u" },
    { char: "k" },
    { char: "e" },
    { char: "s" },
    { char: "h", className: "me-2" },
  ];

  const descArray = [
    { char: "C" },
    { char: "o" },
    { char: "d" },
    { char: "e" },
    { char: ".", className: "me-2" },
    { char: "C" },
    { char: "r" },
    { char: "e" },
    { char: "a" },
    { char: "t" },
    { char: "e" },
    { char: ".", className: "me-2" },
    { char: "C" },
    { char: "o" },
    { char: "n" },
    { char: "q" },
    { char: "u" },
    { char: "e" },
    { char: "r" },
    { char: "." },
  ];

  const showToastMethod = () => {
    setShowToast(true);
    const timeoutId = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  };

  const handleCopyEmail = () => {
    const emailToCopy = profile.email;
    copy(emailToCopy);
    showToastMethod();
  };

  const showMoreMethod = (page) => {
    if (page === "projects") {
      router.push("/projects");
    }
    if (page === "about") {
      router.push("/about#skills");
    }
    if (page === "testimonials") {
      router.push("/testimonials");
    }
  };

  return (
    <BaseLayout>
      <ToastWrapper $showToast={showToast}>
        <Toast message="Email copied to clipboard" />
      </ToastWrapper>
      <IntroWrapper>
        <AvailableBadge>
          <AvailableDot /> Available for Work
        </AvailableBadge>
        <MyName>
          {nameArray.map(({ char, className }, index) => (
            <span
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
              className={className}
            >
              {char}
            </span>
          ))}
        </MyName>
        <MyDesc>
          {descArray.map(({ char, className }, index) => (
            <span
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${(index + 1) * 100}`}
              className={className}
            >
              {char}
            </span>
          ))}
        </MyDesc>
        <Location>
          <i className="bi bi-geo-alt-fill"></i> Navi Mumbai, India
        </Location>
        <MyStory>
          <b>Full Stack Developer</b> specialized in delivering{" "}
          <b>high-performance backend solutions</b> within{" "}
          <b>financial technology</b> and <b>gaming</b> sectors. Expertise
          includes designing{" "}
          <b>scalable RESTful APIs, optimizing database operations</b>, and
          managing <b>cloud deployments on OpenShift</b> to ensure{" "}
          <b>service reliability</b>. Adept at collaborating in{" "}
          <b>Agile environments</b> to deliver{" "}
          <b>robust, secure, and user-centric applications</b>.
        </MyStory>
        <ButtonsWrapper>
          <PrimaryBtn href="/about" data-aos="zoom-in-up">
            About me
          </PrimaryBtn>
          <SecondaryBtn onClick={handleCopyEmail} data-aos="zoom-in-up">
            <i className="bi bi-copy"></i> Copy email
          </SecondaryBtn>
        </ButtonsWrapper>
      </IntroWrapper>
      <SectionHeader sectionHeading="Hall of Fame: My Best Work" />
      <ProjectsWrapper>
        {featuredProjectCards.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ProjectsWrapper>
      <ShowMoreWrapper>
        <SecondaryBtn
          onClick={() => {
            showMoreMethod("projects");
          }}
          data-aos="zoom-in-up"
        >
          Browse Complete Collection
        </SecondaryBtn>
      </ShowMoreWrapper>
      <SectionHeader sectionHeading="Proficiencies & Expertise" />
      <SkillsWrapper>
        {featuredSkills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </SkillsWrapper>
      <ShowMoreWrapper>
        <SecondaryBtn
          onClick={() => showMoreMethod("about")}
          data-aos="zoom-in-up"
        >
          Explore Further Abilities
        </SecondaryBtn>
      </ShowMoreWrapper>
      <SectionHeader sectionHeading="Voices of Appreciation" />
      <TestimonialsWrapper>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry gutter="16px">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </TestimonialsWrapper>
      <ShowMoreWrapper>
        <SecondaryBtn
          onClick={() => {
            showMoreMethod("testimonials");
          }}
          data-aos="zoom-in-up"
        >
          Read More Testimonials
        </SecondaryBtn>
      </ShowMoreWrapper>
    </BaseLayout>
  );
}

const ToastWrapper = styled.div`
  position: fixed;
  top: ${(props) => (props.$showToast ? "7%" : "-20%")};
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  transition: all 0.5s ease-in-out;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: all 0.5s ease-in-out;
`;

const AvailableBadge = styled.p`
  width: 180px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  border-radius: 15px;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.accentSubtle};
  transition: all 0.5s ease-in-out;
`;

const AvailableDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  transition: all 0.5s ease-in-out;

  animation: pulse-animation 2s infinite;

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px ${({ theme }) => theme.colors.accentSubtle};
    }
    100% {
      box-shadow: 0 0 0 8px ${({ theme }) => theme.colors.accentSubtle};
    }
  }
`;

const MyName = styled.h1`
  width: fit-content;
  line-height: 40px;
  background-color: #4181d0;
  background-image: linear-gradient(
    90deg,
    #4181d0 0%,
    #c850c0 25%,
    #ff7072 50%,
    #c850c0 75%,
    #4181d0 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
  position: relative;
  animation: moveBackground 1s linear 1 2s;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "👋";
    -webkit-text-fill-color: initial;
    position: absolute;
  }

  &:hover::after {
    content: "👋";
    position: absolute;
    animation: wave 0.5s linear;
  }

  @keyframes wave {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(15deg);
    }
  }

  @keyframes moveBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const MyDesc = styled.h1`
  line-height: 40px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;

const Location = styled.p`
  font-size: 14px;
  color: royalblue;
  transition: all 0.5s ease-in-out;
`;

const MyStory = styled.p`
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

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;
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

const SecondaryBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.border} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: border 0.5s ease-in-out !important;
    transition-delay: none !important;
    border: 1.5px solid ${({ theme }) => theme.colors.textSecondary} !important;
  }
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

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  transition: all 0.5s ease-in-out;

  & > button {
    margin: auto;
    width: max-content;
    height: 35px;
    padding: 0 20px;
    font-size: 14px;

    @media (max-width: 1024px) {
      margin: 30px auto 0px;
    }
  }
`;

const TestimonialsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const ShowMoreWrapper = styled.div`
  width: 100%;
  margin: 30px 0px 50px;
  transition: all 0.5s ease-in-out;

  & > button {
    margin: auto;
    width: max-content;
    padding: 0 20px;
    height: 35px;
    font-size: 14px;
  }
`;
