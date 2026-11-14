import styled from "styled-components";

export const Toast = ({ message }) => {
  return <DisplayWrapper>{message}</DisplayWrapper>;
};

const DisplayWrapper = styled.div`
  width: 400px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.border};
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.surfaceTranslucent};
  }
`;
