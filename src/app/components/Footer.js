import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <DisplayWrapper>
      <p>
        Crafted with{" "}
        <Route href="https://nextjs.org" target="_blank">
          Next.js
        </Route>{" "}
        &nbsp;·&nbsp; Designed and Developed by{" "}
        <Route href="/about">Mukesh Sharma</Route> &nbsp;·&nbsp; © 2024
        Portfolio
      </p>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  font-size: 14px;
  margin-top: 100px;
  padding-top: 30px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor200
      : theme.darkMode.greyColor100};
  border-top: 1px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    color: royalblue;
  }
`;
