import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import profilePic from "../../../public/assets/profile-picture-blue.png";

export default function Header() {
  const pathname = usePathname();
  const { theme } = useSelector(uiState);
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setContentVisible((prev) => !prev);
  };

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <DisplayWrapper>
      <HeaderWrapper>
        <PicNameWrapper>
          <Image
            className="rounded-3"
            src={profilePic}
            alt="Profile Picture"
            width={50}
            height={50}
          />
          <div>
            <MyName>Mukesh Sharma</MyName>
            <MyDesc>MERN STACK DEVELOPER</MyDesc>
          </div>
        </PicNameWrapper>
        <SwitchMenuWrapper>
          <ThemeSwitch />
          <HamburgerWrapper>
            <HamburgerInput
              type="checkbox"
              checked={contentVisible}
              onChange={toggleContentVisibility}
            />
            <HamburgerSvg viewBox="0 0 32 32">
              <LineTopBottom d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></LineTopBottom>
              <Line d="M7 16 27 16"></Line>
            </HamburgerSvg>
          </HamburgerWrapper>
        </SwitchMenuWrapper>
      </HeaderWrapper>
      <ContentWrapper isVisible={contentVisible}>
        <RoutesWrapper className="gap-1">
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/" ? "active" : ""
            }`}
            href="/"
          >
            Home
          </Route>
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/skills" ? "active" : ""
            }`}
            href="/skills"
          >
            Skills
          </Route>
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/projects" ? "active" : ""
            }`}
            href="/projects"
          >
            Projects
          </Route>
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/education" ? "active" : ""
            }`}
            href="/education"
          >
            Education
          </Route>
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/experience" ? "active" : ""
            }`}
            href="/experience"
          >
            Experience
          </Route>
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/testimonials" ? "active" : ""
            }`}
            href="/testimonials"
          >
            Testimonials
          </Route>
          <Route
            className={`px-2 py-1 rounded-3 w-100 ${
              pathname === "/contact" ? "active" : ""
            }`}
            href="/contact"
          >
            Contact
          </Route>
        </RoutesWrapper>
        <SocialLinksWrapper>
          <SocialLink
            className="bi bi-github"
            href="https://github.com/Mukesh-Sharma400"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-title="GitHub"
            data-bs-custom-class="custom-tooltip"
            aria-label="GitHub"
          ></SocialLink>
          <SocialLink
            className="bi bi-linkedin"
            href="https://www.linkedin.com/in/mukesh-sharma-dev"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-title="LinkedIn"
            data-bs-custom-class="custom-tooltip"
            aria-label="LinkedIn"
          ></SocialLink>
          <SocialLink
            className="bi bi-twitter-x"
            href="https://twitter.com/mukesh_sharma36"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-title="Twitter / X"
            data-bs-custom-class="custom-tooltip"
            aria-label="Twitter / X"
          ></SocialLink>
          <SocialLink
            className="bi bi-facebook"
            href="https://www.facebook.com/Mukesh400f"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-title="Facebook"
            data-bs-custom-class="custom-tooltip"
            aria-label="Facebook"
          ></SocialLink>
          <SocialLink
            className="bi bi-instagram"
            href="https://www.instagram.com/mukesh_sharma400"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-title="Instagram"
            data-bs-custom-class="custom-tooltip"
            aria-label="Instagram"
          ></SocialLink>
          <SocialLink
            className="bi bi-threads"
            href="https://www.threads.net/mukesh_sharma400"
            target="_blank"
            data-bs-toggle="tooltip"
            data-bs-title="Threads"
            data-bs-custom-class="custom-tooltip"
            aria-label="Threads"
          ></SocialLink>
        </SocialLinksWrapper>
      </ContentWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  display: none;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    display: initial;
    width: 100%;
    display: flex;
    position: fixed;
    flex-direction: column;
    padding: 20px;
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor200
        : theme.darkMode.blackColor200};
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`;

const PicNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 321px) {
    gap: 10px;
  }
`;

const MyName = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;

  @media (max-width: 321px) {
    font-size: 14px;
  }
`;

const MyDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;

  @media (max-width: 321px) {
    font-size: 12px;
  }
`;

const SwitchMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 321px) {
    gap: 10px;
  }
`;

const HamburgerWrapper = styled.label`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

const HamburgerSvg = styled.svg`
  height: 2.5em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.5s ease-in-out;
`;

const Line = styled.path`
  fill: none;
  stroke: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.globalColors.blackColor
      : theme.globalColors.whiteColor};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.5s ease-in-out;
`;

const LineTopBottom = styled(Line)`
  stroke-dasharray: 12 63;
  transition: all 0.5s ease-in-out;
`;

const HamburgerInput = styled.input`
  display: none;
  transition: all 0.5s ease-in-out;

  &:checked + ${HamburgerSvg} {
    transform: rotate(-45deg);
  }

  &:checked + ${HamburgerSvg} ${LineTopBottom} {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

const ContentWrapper = styled.div`
  height: ${(props) => (props.isVisible ? "calc(100vh - 90px)" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: ${(props) => (props.isVisible ? "20px" : "0px")};
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`;

const RoutesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: 2px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  font-size: 16px;
  transition: all 0.5s ease-in-out;

  &.active {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  }

  &:focus {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201} !important;
  }

  &:hover {
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor202
        : theme.darkMode.blackColor202};
  }
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
  border-top: 2px solid
    ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 25px;
  border-radius: 50%;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

  @media (max-width: 321px) {
    width: 30px;
    height: 30px;
    font-size: 20px;
  }
`;
