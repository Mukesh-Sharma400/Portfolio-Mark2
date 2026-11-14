import styled from "styled-components";

export const PageHeader = ({ pageData }) => {
  return (
    <div>
      <Heading data-aos="fade-right">{pageData.heading}</Heading>
      <Description data-aos="fade-right">{pageData.description}</Description>
    </div>
  );
};

const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 15px !important;
  transition: all 0.5s ease-in-out;
`;

const Description = styled.p`
  margin-bottom: 50px !important;
  padding-bottom: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  transition: all 0.5s ease-in-out;
`;
