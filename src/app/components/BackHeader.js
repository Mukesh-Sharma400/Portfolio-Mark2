import Link from "next/link";
import styled from "styled-components";

export const BackHeader = () => {
  return (
    <BackHeaderWrapper>
      <BackBtn href="/projects">
        <i
          className="bi bi-arrow-left-circle-fill"
          data-aos="fade-right"
          data-aos-delay="100"
        ></i>{" "}
        <span data-aos="fade-right" data-aos-delay="200">
          Back to list
        </span>
      </BackBtn>
    </BackHeaderWrapper>
  );
};

const BackHeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.5s ease-in-out;
`;

const BackBtn = styled(Link)`
  width: 100px;
  height: 30px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textMuted};
  background-color: transparent;
  transition: all 0.5s ease-in-out;

  span {
    color: ${({ theme }) => theme.colors.textPrimary};
    transition: all 0.5s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
