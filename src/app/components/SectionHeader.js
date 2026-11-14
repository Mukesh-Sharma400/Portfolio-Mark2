import styled from "styled-components";

export const SectionHeader = ({ sectionHeading }) => {
  return <HeadingTwo>{sectionHeading}</HeadingTwo>;
};

const HeadingTwo = styled.h2`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 50px !important;
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;
