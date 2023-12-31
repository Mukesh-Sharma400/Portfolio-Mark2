"use client";

import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import profilePic from "../../../../public/assets/no-image.jpg";

export default function Testimonials() {
  const { theme } = useSelector(uiState);
  const [showMore, setShowMore] = useState(false);

  return (
    <BaseLayout>
      <Heading>Testimonials</Heading>
      <Description>
        Read what others have to say about experiences and collaborations
      </Description>
      <TestimonialsWrapper>
        <Testimonial>
          <Message>
            "Mukesh Sharma consistently demonstrated exceptional aptitude and
            enthusiasm for learning the ins and outs of the MERN Stack. He
            exhibited a strong grasp of the core concepts and principles,
            showcasing their ability to apply them effectively in real-world
            scenarios. He has exhibited a remarkable work ethic and commitment
            to excellence throughout the training period. He consistently showed
            a thirst for knowledge, actively seeking additional resources and
            going above and beyond to expand their understanding of the MERN
            Stack. His dedication and passion for learning were evident in their
            consistent progress and the quality of their work."
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
              <Name>Ali Karim Sayed</Name>
              <Desc>Corporate Trainer</Desc>
            </div>
          </PicNameWrapper>
        </Testimonial>
        <Testimonial>
          <Message>
            "I highly recommend Mukesh as a MERN Stack Developer and would love
            to work together. Mukesh is amazing at his job! He knows his way
            around people, he is good with the clients, does whatever it takes
            to help colleagues and gets things done. He makes sure that everyone
            is on the same page and focused on the main goal."
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
              <Name>Nitin Prajapati</Name>
              <Desc>Full Stack Developer</Desc>
            </div>
          </PicNameWrapper>
        </Testimonial>
        <Testimonial>
          <Message>
            "Mukesh is Very friendly in nature. He can work very nicely in a
            team. He helps to understand concept while working in a team. He
            helps others in team to grow with his own growth. He inspires other
            people to work better."
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
              <Name>Diksha Dubey</Name>
              <Desc>Data Scientist</Desc>
            </div>
          </PicNameWrapper>
        </Testimonial>
        {!showMore && (
          <>
            <ShowMoreBtn
              onClick={() => {
                setShowMore(true);
              }}
            >
              Load More
            </ShowMoreBtn>
          </>
        )}
        {showMore && (
          <>
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
                  <Name>Shweta Jadhav</Name>
                  <Desc>Data Analyst</Desc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "Working with Mukesh was so friendly as well as professional at
                the same time. Looking forward to work with you again."
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
                  <Name>Rituraj Roj</Name>
                  <Desc>Web Developer</Desc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "Having worked with Mukesh for three years, I have to say he is
                an excellent professional. He helped me understand the project
                management process and introduced me to useful tools. I am
                impressed with his work ethic and communication skills."
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
                  <Name>Reshma Yadav</Name>
                  <Desc>Student</Desc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "Mukesh is a very hardworking person and can easily tackle web
                problems. We have worked together on several projects, and he is
                a very skilled and dedicated professional. His expertise in the
                web development field has helped us a lot! I highly recommend
                him to anyone."
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
                  <Name>Anjumaara Ansari</Name>
                  <Desc>Web Developer</Desc>
                </div>
              </PicNameWrapper>
            </Testimonial>
            <Testimonial>
              <Message>
                "Mukesh is best in Front-End design and clean UI."
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
                  <Name>Aman Sharma</Name>
                  <Desc>Dot Net Developer</Desc>
                </div>
              </PicNameWrapper>
            </Testimonial>
          </>
        )}
      </TestimonialsWrapper>
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

const ShowMoreBtn = styled.button`
width: 130px;
height: 35px;
margin: 20px auto;
font-size: 14px;
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
`;
