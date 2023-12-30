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

  useEffect(() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  return (
    <DisplayWrapper className="d-flex flex-column align-items-center justify-content-between text-center px-4 py-5">
      <div className="d-flex flex-column align-items-center gap-1 w-100">
        <Image
          className="rounded-3"
          src={profilePic}
          alt="Profile Picture"
          width={70}
          height={70}
        />
        <div>
          <MyName>Mukesh Sharma</MyName>
          <MyDesc>MERN STACK DEVELOPER</MyDesc>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100">
        <Link
          className="bi bi-github fs-5 text-secondary"
          href="https://github.com/Mukesh-Sharma400"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-title="GitHub"
          data-bs-custom-class="custom-tooltip"
        ></Link>
        <Link
          className="bi bi-linkedin fs-5 text-secondary"
          href="https://www.linkedin.com/in/mukesh-sharma-dev"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-title="LinkedIn"
          data-bs-custom-class="custom-tooltip"
        ></Link>
        <Link
          className="bi bi-twitter-x fs-5 text-secondary"
          href="https://twitter.com/mukesh_sharma36"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-title="Twitter / X"
          data-bs-custom-class="custom-tooltip"
        ></Link>
        <Link
          className="bi bi-facebook fs-5 text-secondary"
          href="https://www.facebook.com/Mukesh400f"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-title="Facebook"
          data-bs-custom-class="custom-tooltip"
        ></Link>
        <Link
          className="bi bi-instagram fs-5 text-secondary"
          href="https://www.instagram.com/mukesh_sharma400"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-title="Instagram"
          data-bs-custom-class="custom-tooltip"
        ></Link>
        <Link
          className="bi bi-threads fs-5 text-secondary"
          href="https://www.threads.net/mukesh_sharma400"
          target="_blank"
          data-bs-toggle="tooltip"
          data-bs-title="Threads"
          data-bs-custom-class="custom-tooltip"
        ></Link>
      </div>
      <div className="d-flex flex-column gap-1 w-100">
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
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 20%;
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

const Route = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) =>
    theme.currentTheme === "light"
      ? theme.lightMode.greyColor100
      : theme.darkMode.greyColor100};
  font-size: 14px;
  transition: all 0.5s ease-in-out;

  &.active {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201};
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
  }

  &:focus {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor201
        : theme.darkMode.blackColor201} !important;
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor202
        : theme.darkMode.blackColor202};
    color: ${({ theme }) =>
      theme.currentTheme === "light"
        ? theme.lightMode.whiteColor150
        : theme.globalColors.whiteColor};
  }
`;
