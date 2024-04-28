"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import copy from "clipboard-copy";
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
import mjinterior from "../../../public/assets/mjinterior.png";
import aliKarim from "../../../public/assets/ali-karim-sayed.png";
import youtube from "../../../public/assets/youtube-thumbnail.png";
import memories from "../../../public/assets/memories-thumbnail.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import appavengers from "../../../public/assets/app-avengers-logo.jpg";
import nitinPrajapati from "../../../public/assets/nitin-prajapati.jpg";
import socialnetwork from "../../../public/assets/socialnetwork-thumbnail.jpg";
import stackoverflow from "../../../public/assets/stack-overflow-thumbnail.jpg";

export default function Home() {
  const router = new useRouter();
  const { theme } = useSelector(uiState);
  const emailAddress = "mksh400@gmail.com";
  const [showToast, setShowToast] = useState(false);

  const showToastMethod = () => {
    setShowToast(true);
    const timeoutId = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  };

  const handleCopyEmail = () => {
    const emailToCopy = `${emailAddress}`;
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
  ];

  const skillsData = [
    { name: "MongoDB", imageSrc: mongo },
    { name: "Express", imageSrc: express },
    { name: "React", imageSrc: react },
    { name: "Node", imageSrc: node },
    { name: "Next", imageSrc: next },
    { name: "Angular", imageSrc: angular },
  ];

  const testimonialsData = [
    {
      message:
        "We thank Mukesh Sharma for the association with App Avengers. During this employment we rated him as 'Best Candidate'.",
      image: appavengers,
      name: "AppAvengers Labs Pvt. Ltd.",
      role: "Gujarat, India",
    },
    {
      message:
        "Mukesh Sharma's website design for our interior decoration company exceeded our expectations. His creativity, professionalism, and attention to detail are remarkable. The website perfectly captures our brand's essence and offers a seamless browsing experience. Mukesh was responsive and dedicated throughout the process. Highly recommend his services!",
      image: mjinterior,
      name: "MJ Interior",
      role: "Interior Decoration Company",
    },
    {
      message:
        "Mukesh Sharma consistently demonstrated exceptional aptitude and enthusiasm for learning the ins and outs of the MERN Stack. He exhibited a strong grasp of the core concepts and principles, showcasing their ability to apply them effectively in real-world scenarios. He has exhibited a remarkable work ethic and commitment to excellence throughout the training period. He consistently showed a thirst for knowledge, actively seeking additional resources and going above and beyond to expand their understanding of the MERN Stack. His dedication and passion for learning were evident in their consistent progress and the quality of their work.",
      image: aliKarim,
      name: "Ali Karim Sayed",
      role: "Corporate Trainer",
    },
    {
      message:
        "I highly recommend Mukesh as a MERN Stack Developer and would love to work together. Mukesh is amazing at his job! He knows his way around people, he is good with the clients, does whatever it takes to help colleagues and gets things done. He makes sure that everyone is on the same page and focused on the main goal.",
      image: nitinPrajapati,
      name: "Nitin Prajapati",
      role: "Full Stack Developer",
    },
  ];

  return (
    <BaseLayout>
      <ToastWrapper showToast={showToast}>
        <Toast message="Email copied to clipboard" />
      </ToastWrapper>
      <IntroWrapper>
        <AvailableBadge>
          <AvailableDot /> Available for Work
        </AvailableBadge>
        <MyName>
          <span className="me-2" data-aos="fade-right" data-aos-delay="100">
            Hello!
          </span>
          <span className="me-2" data-aos="fade-right" data-aos-delay="200">
            I’m
          </span>
          <span className="me-2" data-aos="fade-right" data-aos-delay="300">
            Mukesh
          </span>
        </MyName>
        <MyDesc>
          <span className="me-2" data-aos="fade-right" data-aos-delay="400">
            Code.
          </span>
          <span className="me-2" data-aos="fade-right" data-aos-delay="500">
            Create.
          </span>
          <span className="me-2" data-aos="fade-right" data-aos-delay="600">
            Conquer.
          </span>
        </MyDesc>
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
          <PrimaryBtn href="/about" data-aos="zoom-in-up">
            About me
          </PrimaryBtn>
          <SecondaryBtn onClick={handleCopyEmail} data-aos="zoom-in-up">
            <i className="bi bi-copy"></i> Copy email
          </SecondaryBtn>
        </ButtonsWrapper>
      </IntroWrapper>
      <HeadingTwo>Hall of Fame: My Best Work</HeadingTwo>
      <ProjectsWrapper>
        {projectsData.map((project, index) => (
          <Project key={index} href={project.href} data-aos="zoom-in-up">
            <ImageWrapper>
              <ProjectImage src={project.imageSrc} alt={project.name} />
            </ImageWrapper>
            <div>
              <ProjectName>{project.name}</ProjectName>
              <ProjectDesc>{project.description}</ProjectDesc>
            </div>
          </Project>
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
      <HeadingTwo>Proficiencies & Expertise</HeadingTwo>
      <SkillsWrapper>
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            data-aos="fade-right"
            data-aos-delay={`${(index + 1) * 100}`}
          >
            <SkillImage src={skill.imageSrc} alt={skill.name} />
            {skill.name}
          </Skill>
        ))}
        <SecondaryBtn
          onClick={() => showMoreMethod("about")}
          data-aos="zoom-in-right"
          data-aos-delay="700"
        >
          Explore Further Abilities
        </SecondaryBtn>
      </SkillsWrapper>
      <HeadingTwo>Voices of Appreciation</HeadingTwo>
      <TestimonialsWrapper>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry gutter="16px">
            {testimonialsData.map((testimonial, index) => (
              <Testimonial key={index} data-aos="zoom-in-up">
                <Message>{testimonial.message}</Message>
                <PicNameWrapper>
                  <Image
                    className="rounded-3"
                    src={testimonial.image}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                  />
                  <div>
                    <TestimonialName>{testimonial.name}</TestimonialName>
                    <TestimonialDesc>{testimonial.role}</TestimonialDesc>
                  </div>
                </PicNameWrapper>
              </Testimonial>
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
      <Footer />
    </BaseLayout>
  );
}

const ToastWrapper = styled.div`
  position: absolute;
  top: ${(props) => (props.showToast ? "7%" : "-20%")};
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
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greenColor200
      : theme.darkMode.greenColor200};
  transition: all 0.5s ease-in-out;

  animation: pulse-animation 2s infinite;

  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px
        ${({ theme }) =>
          theme.currentTheme === "light"
            ? theme.lightMode.greenColor150
            : theme.darkMode.greenColor150};
    }
    100% {
      box-shadow: 0 0 0 8px
        ${({ theme }) =>
          theme.currentTheme === "light"
            ? theme.lightMode.greenColor150
            : theme.darkMode.greenColor150};
    }
  }
`;

const MyName = styled.h1`
  width: fit-content;
  line-height: 40px;
  width: fit-content;
  background-color: #4181d0;
  background-image: linear-gradient(
    90deg,
    #4181d0 0%,
    #c850c0 50%,
    #ff7072 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.5s ease-in-out;
  position: relative;

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
    transition: background-color 0.5s ease-in-out !important;
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
    transition: border 0.5s ease-in-out !important;
    transition-delay: none !important;
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
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 295px;
  }

  @media (max-width: 426px) {
    width: 100%;
  }
`;

const ProjectImage = styled(Image)`
  width: 350px;
  height: auto;
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 295px;
  }

  @media (max-width: 426px) {
    width: 100%;
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

    @media (max-width: 1024px) {
      margin: 30px auto 0px;
    }
  }
`;

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
