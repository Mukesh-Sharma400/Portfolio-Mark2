"use client";

import Image from "next/image";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Footer";
import { uiState } from "../../redux/uiSlice";
import BaseLayout from "@/app/components/BaseLayout";
import scct from "../../../../public/assets/scct.jpeg";
import pace from "../../../../public/assets/pace.webp";
import tilak from "../../../../public/assets/tilak.webp";

export default function Education() {
  const { theme } = useSelector(uiState);

  return (
    <BaseLayout>
      <Heading>Education</Heading>
      <Description>
        Explore academic achievements and qualifications
      </Description>
      <EducationsWrapper>
        <EducationWrapper>
          <LeftSide>
            <EducationImage
              className="rounded-3"
              src={scct}
              alt="Sanpada College of Commerce & Technology"
              width={100}
              height={100}
            />
          </LeftSide>
          <RightSide>
            <EducationName>
              Bachelors in Information Technology{" "}
              <span>(September 2020 - May 2023)</span>
            </EducationName>
            <College>
              Sanpada College of Commerce & Technology{" "}
              <span>(Sanpada, Navi Mumbai)</span>
            </College>
            <Content>
              I always had a passion for web development and acquired skills in
              various web technologies. I have created many websites, which
              impressed all my colleagues and professors. I became a
              sought-after web developer, proving that hard work and dedication
              can lead to success.
            </Content>
          </RightSide>
        </EducationWrapper>
        <Divider />
        <EducationWrapper>
          <LeftSide>
            <EducationImage
              className="rounded-3"
              src={pace}
              alt="Pace Education Society"
              width={100}
              height={100}
            />
          </LeftSide>
          <RightSide>
            <EducationName>
              Higher School Certification <span>(June 2016 - May 2018)</span>{" "}
            </EducationName>
            <College>
              Pace Education Society <span>(Nerul, Navi Mumbai)</span>
            </College>
            <Content>
              I was always fascinated by the mysteries of the universe. Despite
              not being the smartest student in my class, I spends every free
              moment delving into books and videos on cosmology and
              astrophysics.
            </Content>
          </RightSide>
        </EducationWrapper>
        <Divider />
        <EducationWrapper>
          <LeftSide>
            <EducationImage
              className="rounded-3"
              src={tilak}
              alt="Tilak International School"
              width={100}
              height={100}
            />
          </LeftSide>
          <RightSide>
            <EducationName>
              Secondary School Certification{" "}
              <span>(June 2015 - March 2016)</span>
            </EducationName>
            <College>
              Tilak International School <span>(Ghansoli, Navi Mumbai)</span>
            </College>
            <Content>
              I always had a keen interest in computers and technology, I used
              to participate in a school computer science competition despite my
              lack of confidence. I studied hard, boosting my confidence and
              setting me on a path towards a successful career in technology.
            </Content>
          </RightSide>
        </EducationWrapper>
      </EducationsWrapper>
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

const EducationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const EducationWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  transition: all 0.5s ease-in-out;
`;

const LeftSide = styled.div`
  width: 20%;
  position: relative;
  transition: all 0.5s ease-in-out;
`;

const EducationImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  transition: all 0.5s ease-in-out;
`;

const RightSide = styled.div`
  width: 80%;
  transition: all 0.5s ease-in-out;
`;

const EducationName = styled.p`
  font-size: 16px;
  margin-bottom: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
  span {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.greyColor100
        : theme.darkMode.greyColor100};
  }
`;

const College = styled.p`
  font-size: 14px;
  margin-bottom: 10px !important;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
  span {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.greyColor100
        : theme.darkMode.greyColor100};
  }
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;
