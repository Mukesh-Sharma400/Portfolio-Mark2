import styled from "styled-components";

export const SectionHeader = ({ sectionHeading }) => {
  return <HeadingTwo>{sectionHeading}</HeadingTwo>;
};

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
