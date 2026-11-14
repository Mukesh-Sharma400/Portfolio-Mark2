import Image from "next/image";
import styled from "styled-components";

export const CertificateCard = ({ certificate }) => {
  return (
    <CertificateWrapper data-aos="zoom-in-up">
      <CertificateTitle>{certificate.title}</CertificateTitle>
      <CertificateImage src={certificate.image} alt={certificate.alt} />
      <CertificateDesc>{certificate.description}</CertificateDesc>
    </CertificateWrapper>
  );
};

const CertificateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.surfaceTranslucent};
  transition: all 0.5s ease-in-out;
`;

const CertificateTitle = styled.p`
  font-size: 14px;
  text-align: center;
  padding: 0px 10px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const CertificateImage = styled(Image)`
  width: 100%;
  height: auto;
  transition: all 0.5s ease-in-out;
`;

const CertificateDesc = styled.p`
  font-size: 14px;
  padding: 0px 10px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;
