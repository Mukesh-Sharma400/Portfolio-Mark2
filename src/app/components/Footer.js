import Link from "next/link";
import styled from "styled-components";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <DisplayWrapper>
      <p>
        Designed and Developed by <Route href="/about">Mukesh Sharma</Route>{" "}
        &nbsp;·&nbsp; © {currentYear} Portfolio
      </p>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  font-size: 14px;
  margin-top: 100px;
  padding-top: 30px;
  color: ${({ theme }) => theme.colors.textMuted};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    color: royalblue;
  }
`;
