"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { Toast } from "../components/Toast";
import { useRouter } from "next/navigation";
import node from "../../../public/assets/node.jpg";
import next from "../../../public/assets/next.jpg";
import BaseLayout from "@/app/components/BaseLayout";
import mongo from "../../../public/assets/mongo.png";
import react from "../../../public/assets/react.webp";
import express from "../../../public/assets/express.jpg";
import angular from "../../../public/assets/angular.jpg";
import profilePic from "../../../public/assets/no-image.jpg";
import youtube from "../../../public/assets/youtube-thumbnail.png";
import memories from "../../../public/assets/memories-thumbnail.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import socialnetwork from "../../../public/assets/socialnetwork-thumbnail.jpg";
import stackoverflow from "../../../public/assets/stack-overflow-thumbnail.jpg";

export default function Home() {
  const router = new useRouter();
  const { theme } = useSelector(uiState);
  const [showToast, setShowToast] = useState(false);

  const showToastMethod = () => {
    setShowToast(true);
    const timeoutId = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
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
      <ToastWrapper showToast={showToast}>
        <Toast message="Email copied to clipboard" />
      </ToastWrapper>
      <IntroWrapper>
        <AvailableBadge>
          <AvailableDot /> Available for work
        </AvailableBadge>
        <MyName>Hello! I’m Mukesh</MyName>
        <MyDesc>Code. Create. Conquer.</MyDesc>
        <Location>
          <i className="bi bi-geo-alt-fill"></i> Navi Mumbai, India
        </Location>
        <MyStory>
          Solution driven MERN Stack Developer with over a year of work
          experience building consumer focused online products and services.
          Designed and developed web apps across multiple APIs, third party
          integrations, and databases.
        </MyStory>
        <ButtonsWrapper>
          <PrimaryBtn href="/about">About me</PrimaryBtn>
          <SecondaryBtn onClick={showToastMethod}>
            <i className="bi bi-copy"></i> Copy email
          </SecondaryBtn>
        </ButtonsWrapper>
      </IntroWrapper>
      <HeadingTwo>Hall of Fame: My Best Work</HeadingTwo>
      <ProjectsWrapper>
        <Project href="/projects/socialnetwork">
          <ImageWrapper>
            <ProjectImage src={socialnetwork} alt="SocialNetwork Web App" />
          </ImageWrapper>
          <div>
            <ProjectName>SocialNetwork Web App</ProjectName>
            <ProjectDesc>Social Media Web Application</ProjectDesc>
          </div>
        </Project>
        <Project href="/projects/memories">
          <ImageWrapper>
            <ProjectImage src={memories} alt="Memories Web App" />
          </ImageWrapper>
          <div>
            <ProjectName>Memories Web App</ProjectName>
            <ProjectDesc>Social Blog Web Application</ProjectDesc>
          </div>
        </Project>
        <Project href="/projects/stackoverflow">
          <ImageWrapper>
            <ProjectImage src={stackoverflow} alt="Stack Overflow Clone" />
          </ImageWrapper>
          <div>
            <ProjectName>Stack Overflow Clone</ProjectName>
            <ProjectDesc>Copy of Stack Overflow Application</ProjectDesc>
          </div>
        </Project>
        <Project href="/projects/youtube">
          <ImageWrapper>
            <ProjectImage src={youtube} alt="YouTube Clone" />
          </ImageWrapper>
          <div>
            <ProjectName>YouTube Clone</ProjectName>
            <ProjectDesc>Copy of YouTube Application</ProjectDesc>
          </div>
        </Project>
      </ProjectsWrapper>
      <ShowMoreWrapper>
        <SecondaryBtn
          onClick={() => {
            showMoreMethod("projects");
          }}
        >
          Browse Complete Collection
        </SecondaryBtn>
      </ShowMoreWrapper>
      <HeadingTwo>Proficiencies & Expertise</HeadingTwo>
      <SkillsWrapper>
        <Skill>
          <SkillImage src={mongo} alt="MONGO" />
          MONGO
        </Skill>
        <Skill>
          <SkillImage src={express} alt="EXPRESS" />
          EXPRESS
        </Skill>
        <Skill>
          <SkillImage src={react} alt="REACT" />
          REACT
        </Skill>
        <Skill>
          <SkillImage src={node} alt="NODE" />
          NODE
        </Skill>
        <Skill>
          <SkillImage src={next} alt="NEXT" />
          NEXT
        </Skill>
        <Skill>
          <SkillImage src={angular} alt="ANGULAR" />
          ANGULAR
        </Skill>
        <SecondaryBtn
          onClick={() => {
            showMoreMethod("about");
          }}
        >
          Explore Further Abilities
        </SecondaryBtn>
      </SkillsWrapper>
      <HeadingTwo>Voices of Appreciation</HeadingTwo>
      <TestimonialsWrapper>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry gutter="16px">
            <Testimonial>
              <Message>
                "Mukesh Sharma consistently demonstrated exceptional aptitude
                and enthusiasm for learning the ins and outs of the MERN Stack.
                He exhibited a strong grasp of the core concepts and principles,
                showcasing their ability to apply them effectively in real-world
                scenarios. He has exhibited a remarkable work ethic and
                commitment to excellence throughout the training period. He
                consistently showed a thirst for knowledge, actively seeking
                additional resources and going above and beyond to expand their
                understanding of the MERN Stack. His dedication and passion for
                learning were evident in their consistent progress and the
                quality of their work."
              </Message>
              <PicNameWrapper>
                <Image
                  className="rounded-3"
                  src={profilePic}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                />
                <div>
                  <TestimonialName>Ali Karim Sayed</TestimonialName>
                  <TestimonialDesc>Corporate Trainer</TestimonialDesc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "I highly recommend Mukesh as a MERN Stack Developer and would
                love to work together. Mukesh is amazing at his job! He knows
                his way around people, he is good with the clients, does
                whatever it takes to help colleagues and gets things done. He
                makes sure that everyone is on the same page and focused on the
                main goal."
              </Message>
              <PicNameWrapper>
                <Image
                  className="rounded-3"
                  src={profilePic}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                />
                <div>
                  <TestimonialName>Nitin Prajapati</TestimonialName>
                  <TestimonialDesc>Full Stack Developer</TestimonialDesc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "Mukesh is an exceptional web developer who possesses all the
                skills one would want in an excellent software developer."
              </Message>
              <PicNameWrapper>
                <Image
                  className="rounded-3"
                  src={profilePic}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                />
                <div>
                  <TestimonialName>Shweta Jadhav</TestimonialName>
                  <TestimonialDesc>Data Analyst</TestimonialDesc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "Mukesh is Very friendly in nature. He can work very nicely in a
                team. He helps to understand concept while working in a team. He
                helps others in team to grow with his own growth. He inspires
                other people to work better."
              </Message>
              <PicNameWrapper>
                <Image
                  className="rounded-3"
                  src={profilePic}
                  alt="Profile Picture"
                  width={50}
                  height={50}
                />
                <div>
                  <TestimonialName>Diksha Dubey</TestimonialName>
                  <TestimonialDesc>Data Scientist</TestimonialDesc>
                </div>
              </PicNameWrapper>
            </Testimonial>
          </Masonry>
        </ResponsiveMasonry>
      </TestimonialsWrapper>
      <ShowMoreWrapper>
        <SecondaryBtn
          onClick={() => {
            showMoreMethod("testimonials");
          }}
        >
          Read More Testimonials
        </SecondaryBtn>
      </ShowMoreWrapper>
      <Footer />
    </BaseLayout>
  );
}

const ToastWrapper = styled.div`
  position: absolute;
  top: ${(props) => (props.showToast ? "7%" : "-10%")};
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
  width: 140px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 12px;
  border-radius: 15px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor200
      : theme.darkMode.greenColor200};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor150
      : theme.darkMode.greenColor150};
  transition: all 0.5s ease-in-out;
`;

const AvailableDot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor200
      : theme.darkMode.greenColor200};
  transition: all 0.5s ease-in-out;
`;

const MyName = styled.h1`
  width: fit-content;
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::after {
    content: "👋";
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
`;

const MyDesc = styled.h1`
  line-height: 40px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
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
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
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
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.globalColors.blackColor
        : theme.darkMode.blackColor202};
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
    border: 1.5px solid
      ${({ theme }) =>
        theme.currentTheme === "light"
          ? theme.lightMode.greyColor100
          : theme.darkMode.greyColor100} !important;
  }
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
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
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
  }
`;

const Skill = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-align: center;
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
`;

const SkillImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: all 0.5s ease-in-out;
`;

const TestimonialsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.5s ease-in-out;
`;

const Testimonial = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor202
      : theme.darkMode.blackColor202};
  transition: all 0.5s ease-in-out;
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-style: italic;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const PicNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px !important;
  transition: all 0.5s ease-in-out;
`;

const TestimonialName = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const TestimonialDesc = styled.p`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
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
