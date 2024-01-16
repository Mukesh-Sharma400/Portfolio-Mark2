import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { usePathname } from "next/navigation";
import profilePic from "../../../public/assets/profile-picture-blue.png";

export default function Sidebar() {
  const pathname = usePathname();
  const { theme } = useSelector(uiState);

  const socialLinks = [
    {
      className: "bi bi-github",
      href: "https://github.com/Mukesh-Sharma400",
      tooltip: "GitHub",
      ariaLabel: "GitHub",
    },
    {
      className: "bi bi-linkedin",
      href: "https://www.linkedin.com/in/mukesh-sharma-dev",
      tooltip: "LinkedIn",
      ariaLabel: "LinkedIn",
    },
    {
      className: "bi bi-twitter-x",
      href: "https://twitter.com/mukesh_sharma36",
      tooltip: "Twitter / X",
      ariaLabel: "Twitter / X",
    },
    {
      className: "bi bi-facebook",
      href: "https://www.facebook.com/MukeshSharma400",
      tooltip: "Facebook",
      ariaLabel: "Facebook",
    },
    {
      className: "bi bi-instagram",
      href: "https://www.instagram.com/mukesh_sharma400",
      tooltip: "Instagram",
      ariaLabel: "Instagram",
    },
    {
      className: "bi bi-threads",
      href: "https://www.threads.net/mukesh_sharma400",
      tooltip: "Threads",
      ariaLabel: "Threads",
    },
  ];

  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/education", label: "Education" },
    { path: "/experience", label: "Experience" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

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
      <ContentWrapper>
        <PicNameWrapper className="gap-1">
          <Image
            className="rounded-3"
            src={profilePic}
            alt="Profile Picture"
            width={60}
            height={60}
          />
          <div>
            <MyName>Mukesh Sharma</MyName>
            <MyDesc>MERN STACK DEVELOPER</MyDesc>
          </div>
        </PicNameWrapper>
        <SocialLinksWrapper>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              className={link.className}
              href={link.href}
              target="_blank"
              data-bs-toggle="tooltip"
              data-bs-title={link.tooltip}
              data-bs-custom-class="custom-tooltip"
              aria-label={link.ariaLabel}
            ></SocialLink>
          ))}
        </SocialLinksWrapper>
        <RoutesWrapper className="gap-1">
          {routes.map((route, index) => (
            <Route
              key={index}
              className={`px-2 py-1 rounded-3 w-100 ${
                pathname === route.path || pathname.startsWith(route.path + "/")
                  ? "active"
                  : ""
              }`}
              href={route.path}
            >
              {route.label}
            </Route>
          ))}
        </RoutesWrapper>
      </ContentWrapper>
      <ThemeSwitch />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    width: 27%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    gap: 10px;
  }
`;

const PicNameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const MyName = styled.p`
  font-size: 16px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor150
      : theme.globalColors.whiteColor};
  transition: all 0.5s ease-in-out;
`;

const MyDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  transition: all 0.5s ease-in-out;
`;

const SocialLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;
`;

const SocialLink = styled(Link)`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 15px;
  border-radius: 50%;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  background-color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.whiteColor201
      : theme.darkMode.blackColor201};
  transition: all 0.5s ease-in-out;

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

const RoutesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
`;

const Route = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  font-size: 14px;
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
