"use client";

import Image from "next/image";
import { uiState } from "%/uiSlice";
import styled from "styled-components";
import mjinterior from "#/mjinterior.png";
import { useSelector } from "react-redux";
import amanSharma from "#/aman-sharma.jpg";
import aliKarim from "#/ali-karim-sayed.png";
import appavengers from "#/app-avengers-logo.jpg";
import nitinPrajapati from "#/nitin-prajapati.jpg";
import pratimPabrekar from "#/pratim-pabrekar.jpeg";
import BaseLayout from "@/app/components/BaseLayout";
import malePlaceholder from "#/male-placeholder.jpg";
import femalePlaceholder from "#/female-placeholder.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Testimonials() {
  const { theme } = useSelector(uiState);

  const testimonialsData = [
    {
      message:
        "We thank Mukesh Sharma for the association with App Avengers. During this employment we rated him as 'Best Candidate'.",
      image: appavengers,
      name: "AppAvengers Labs Pvt Ltd",
      role: "Gujarat, India",
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
        "Mukesh Sharma's website design for our interior decoration company exceeded our expectations. His creativity, professionalism, and attention to detail are remarkable. The website perfectly captures our brand's essence and offers a seamless browsing experience. Mukesh was responsive and dedicated throughout the process. Highly recommend his services!",
      image: mjinterior,
      name: "MJ Interior",
      role: "Interior Decoration Company",
    },
    {
      message: "Mukesh is best in Front-End design and clean UI.",
      image: amanSharma,
      name: "Aman Sharma",
      role: "Dot Net Developer",
    },
    {
      message:
        "I highly recommend Mukesh as a MERN Stack Developer and would love to work together. Mukesh is amazing at his job! He knows his way around people, he is good with the clients, does whatever it takes to help colleagues and gets things done. He makes sure that everyone is on the same page and focused on the main goal.",
      image: nitinPrajapati,
      name: "Nitin Prajapati",
      role: "Full Stack Developer",
    },
    {
      message:
        "Mukesh is Very friendly in nature. He can work very nicely in a team. He helps to understand concept while working in a team. He helps others in the team to grow with his own growth. He inspires other people to work better.",
      image: femalePlaceholder,
      name: "Diksha Dubey",
      role: "Data Scientist",
    },
    {
      message:
        "Mukesh is an exceptional web developer who possesses all the skills one would want in an excellent software developer.",
      image: femalePlaceholder,
      name: "Shweta Jadhav",
      role: "Data Analyst",
    },
    {
      message:
        "Working with Mukesh was so friendly as well as professional at the same time. Looking forward to work with you again.",
      image: malePlaceholder,
      name: "Rituraj Roj",
      role: "Web Developer",
    },
    {
      message:
        "Having worked with Mukesh for three years, I have to say he is an excellent professional. He helped me understand the project management process and introduced me to useful tools. I am impressed with his work ethic and communication skills.",
      image: femalePlaceholder,
      name: "Reshma Yadav",
      role: "IT Student",
    },
    {
      message:
        "Mukesh is a very hardworking person and can easily tackle web problems. We have worked together on several projects, and he is a very skilled and dedicated professional. His expertise in the web development field has helped us a lot! I highly recommend him to anyone.",
      image: femalePlaceholder,
      name: "Anjumaara Ansari",
      role: "Web Developer",
    },
  ];

  return (
    <BaseLayout>
      <Heading data-aos="fade-right">Testimonials</Heading>
      <Description data-aos="fade-right">
        Read what others have to say about experiences and collaborations
      </Description>
      <TestimonialsWrapper>
        <Testimonial data-aos="zoom-in-up">
          <Message>
            ❝I had the pleasure of working with Mukesh, a highly skilled Node.js
            developer with remarkable enthusiasm and a great spirit for tackling
            challenges. Mukesh consistently demonstrates exceptional
            problem-solving abilities and a deep understanding of backend
            development, creating efficient, scalable, and maintainable
            solutions. What truly sets Mukesh apart is his strong sense of
            responsibility and proactive approach to his work. He takes
            ownership of tasks with unwavering dedication and ensures every
            detail is handled with precision. His eagerness to explore new tools
            and technologies, coupled with his collaborative mindset and clear
            communication, makes him an invaluable team player. Mukesh's passion
            for continuous learning, combined with his great spirit and sense of
            responsibility, reflects in his work, where he not only meets
            expectations but often exceeds them. I strongly recommend Mukesh for
            any role that requires technical expertise, creativity, and a
            positive attitude.❞
          </Message>
          <PicNameWrapper>
            <Image
              className="rounded-3"
              src={pratimPabrekar}
              alt="Profile Picture"
              width={50}
              height={50}
            />
            <div>
              <Name>Pratim Pabrekar</Name>
              <Desc>Team Lead</Desc>
            </div>
          </PicNameWrapper>
        </Testimonial>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry gutter="16px">
            {testimonialsData.map((testimonial, index) => (
              <Testimonial key={index} data-aos="zoom-in-up">
                <Message>❝{testimonial.message}❞</Message>
                <PicNameWrapper>
                  <Image
                    className="rounded-3"
                    src={testimonial.image}
                    alt="Profile Picture"
                    width={50}
                    height={50}
                  />
                  <div>
                    <Name>{testimonial.name}</Name>
                    <Desc>{testimonial.role}</Desc>
                  </div>
                </PicNameWrapper>
              </Testimonial>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </TestimonialsWrapper>
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

const TestimonialsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 50px 0;
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
