import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <Testimonial data-aos="zoom-in-up">
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
          <TestimonialName>{testimonial.name}</TestimonialName>
          <TestimonialDesc>{testimonial.role}</TestimonialDesc>
        </div>
      </PicNameWrapper>
    </Testimonial>
  );
};

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
