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
import { BackHeader } from "@/app/components/BackHeader";
import socialnetwork from "#/socialnetwork-thumbnail.jpg";
import stackoverflow from "#/stack-overflow-thumbnail.jpg";
import opinion from "#/opinion-trading-league-thumbnail.png";
import npsmutualfund from "#/nps-mutual-funds-thumbnail.webp";

export default function ProjectPage({ params }) {
  const { slug } = params;
  const { theme } = useSelector(uiState);

  const PROJECTS = {
    "nps-mutual-fund-module": {
      name: "NPS & Mutual Fund Module",
      intro: "Valuefy Technologies Pvt Ltd",
      description:
        "These modules enable clients to manage investments efficiently, providing secure onboarding and transaction processing for NPS investors, while ensuring stable and compliant Mutual Fund operations through workflow improvements and bug fixes.",
      image: npsmutualfund,
      tech: ["node", "loopback", "oracle-sql"],
      live: "/",
      source: "/",
      timeline: "03/2025 - Present",
      related: ["opinion-trading-league", "social-network"],
    },
    "opinion-trading-league": {
      name: "Opinion Trading & League",
      intro: "Playerzpot Media Pvt Ltd",
      description:
        "These models enables clients to integrate an opinion-based experience into their systems, enhancing engagement and driving revenue through predictions on real-world events like sports and stocks.",
      image: opinion,
      tech: ["node", "express", "postgres-sql", "redis"],
      live: "/",
      source: "/",
      timeline: "05/2024 - 02/2025",
      related: ["social-network", "memories-webapp"],
    },
    "social-network": {
      name: "SocialNetwork Web App",
      intro: "Social Media Web Application",
      description:
        "Discover a powerful MERN stack social network app, fueled by MongoDB, ExpressJS, ReactJS, and NodeJS. Experience seamless media management with Cloudinary integration and efficient email communication through SendGrid Email API. Leveraging React Hooks, CORS, Context/RESTful API, and a plethora of other cutting-edge technologies, this app redefines the social networking landscape.",
      image: socialnetwork,
      tech: ["mongo", "express", "react", "node"],
      live: "/",
      source: "/",
      timeline: "07/2022 - 09/2022",
      related: ["memories-webapp", "stack-overflow-clone"],
    },
    "memories-webapp": {
      name: "Memories Web App",
      intro: "Social Blog Web Application",
      description:
        "Experience the power of MERN stack in our Memories application! Harnessing MongoDB for data storage, ExpressJS for server-side development, ReactJS for dynamic user interfaces, and NodeJS for backend support. Integrated with Google OAuth for seamless login, Redux and Redux-Thunk for state management, and enhanced with React Hooks and CORS for flexibility. Delve into our rich feature set and unleash the potential of Context/RESTful API integration. Unleash your memories today!",
      image: memories,
      tech: ["mongo", "express", "react", "node"],
      live: "/",
      source: "/",
      timeline: "11/2022 - 12/2022",
      related: ["stack-overflow-clone", "youtube-clone"],
    },
    "stack-overflow-clone": {
      name: "Stack Overflow Clone",
      intro: "Copy of Stack Overflow Application",
      description:
        "Discover a powerful Stack Overflow clone built on the MERN stack. Harness the potential of MongoDB, ExpressJS, ReactJS, and NodeJS, combined with advanced features like Axios, Redux, Redux-Thunk, React Hooks, CORS, and Context/RESTful API integration. Enjoy a seamless experience in a feature-rich environment for all your coding queries and discussions.",
      image: stackoverflow,
      tech: ["mongo", "express", "react", "node"],
      live: "/",
      source: "/",
      timeline: "12/2022 - 01/2023",
      related: ["youtube-clone", "dashboard-webapp"],
    },
    "youtube-clone": {
      name: "YouTube Clone",
      intro: "Copy of YouTube Application",
      description:
        "The fully responsive YouTube Clone application built with React.js, the YouTube API, Axios, and Bootstrap aims to replicate the core functionality and user experience of YouTube while providing a seamless and intuitive interface for users to discover, watch, and engage with videos.",
      image: youtube,
      tech: ["react", "bootstrap", "youtube-api", "axios"],
      live: "/",
      source: "/",
      timeline: "07/2023 - 08/2023",
      related: ["dashboard-webapp", "ecommerce-webapp"],
    },
    "dashboard-webapp": {
      name: "Dashboard Web App",
      intro: "Data Visualization Web Application",
      description:
        "Experience the ultimate MERN Stack Admin Dashboard - efficient, user-friendly, and powerful. Manage projects, visualize data with Nivo Charts, and enjoy seamless state management with Redux Toolkit. Our backend runs on Node JS, Express JS, Mongoose, and MongoDB, providing a robust foundation for your success. Take control of your data and productivity today!",
      image: dashboard,
      tech: ["mongo", "express", "react", "node"],
      live: "/",
      source: "/",
      timeline: "07/2023 - 08/2023",
      related: ["ecommerce-webapp", "prime-video-clone"],
    },
    "ecommerce-webapp": {
      name: "E-Commerce Web App",
      intro: "Shopping Web Application",
      description:
        "Experience seamless online shopping with our React-based e-commerce app. Powered by ReactJS, Firebase, and Firestore, it utilizes Context API, AJAX, and React Hooks for smooth interactions. With Express, CORS, NodeJS, and RESTful API integration, it ensures secure and efficient data management. Enjoy a user-friendly interface and hassle-free transactions.",
      image: ecommerce,
      tech: ["react", "firebase", "axios", "stripe"],
      live: "/",
      source: "/",
      timeline: "04/2022 - 06/2022",
      related: ["prime-video-clone", "netflix-clone"],
    },
    "prime-video-clone": {
      name: "Prime Video Clone",
      intro: "UI of Prime Video Landing Page",
      description:
        "Discover a captivating streaming experience with our Prime Video clone website. Crafted with HTML, CSS, and Javascript, it offers a vast library of movies and TV shows for your enjoyment. Immerse yourself in high-quality content, user-friendly navigation, and personalized recommendations, all within a sleek and intuitive interface. Start binge-watching today!",
      image: primevideo,
      tech: ["html", "css", "javascript"],
      live: "/",
      source: "/",
      timeline: "11/2021 - 12/2021",
      related: ["netflix-clone", "mj-interior"],
    },
    "netflix-clone": {
      name: "Netflix Clone",
      intro: "UI of Netflix Landing Page",
      description:
        "Introducing our Netflix clone website! Built using HTML, CSS, and Javascript, this platform offers a seamless streaming experience. Enjoy a vast library of movies and TV shows, personalized recommendations, and user-friendly interface. Dive into the world of entertainment and binge-watch your favorite content at your convenience.",
      image: netflix,
      tech: ["html", "css", "javascript"],
      live: "/",
      source: "/",
      timeline: "10/2021 - 11/2021",
      related: ["mj-interior", "nps-mutual-fund-module"],
    },
    "mj-interior": {
      name: "MJ Interior",
      intro: "MJ Interior Company Website",
      description:
        "MJ Interior is a company of creative interior designers who have the ability to see the world through an aesthetic filter and transitioning the domain into the versions of their perspective, filled with captivating sights.",
      image: mjinterior,
      tech: ["nextjs", "styled-components", "react-hooks", "aos"],
      live: "/",
      source: "/",
      timeline: "02/2024 - 03/2024",
      related: ["nps-mutual-fund-module", "opinion-trading-league"],
    },
  };

  const project = PROJECTS[slug];
  console.log(project);

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
          const rel = PROJECTS[relSlug];
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
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.successTextColor
        : theme.darkMode.successTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.successBgColor
        : theme.darkMode.successBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.successBorderColor
          : theme.darkMode.successBorderColor};
  }
  &.my-danger {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.dangerTextColor
        : theme.darkMode.dangerTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.dangerBgColor
        : theme.darkMode.dangerBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.dangerBorderColor
          : theme.darkMode.dangerBorderColor};
  }
  &.my-warning {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.warningTextColor
        : theme.darkMode.warningTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.warningBgColor
        : theme.darkMode.warningBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.warningBorderColor
          : theme.darkMode.warningBorderColor};
  }
  &.my-info {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoTextColor
        : theme.darkMode.infoTextColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.infoBgColor
        : theme.darkMode.infoBgColor};
    border: 1px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.infoBorderColor
          : theme.darkMode.infoBorderColor};
  }
`;

const Heading = styled.h1`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
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
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.whiteColor
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor300
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: background-color 0.5s ease-in-out !important;
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.globalColors.blackColor
        : theme.darkMode.blackColor202};
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
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: transparent;
  border: 1.5px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201} !important;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: border 0.5s ease-in-out !important;
    transition-delay: none !important;
    border: 1.5px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.greyColor100
          : theme.darkMode.greyColor100} !important;
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
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
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
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const CalendarIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const TimelineHeading = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const TimelineDesc = styled.p`
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const HeadingTwo = styled.h2`
  font-weight: 400;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
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
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const ProjectDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;
