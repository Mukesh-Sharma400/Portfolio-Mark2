import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";
import { useSelector } from "react-redux";
import { uiState } from "../redux/uiSlice";
import { usePathname } from "next/navigation";
import profilePic from "../../../public/assets/profile-picture-blue.png";

export default function Sidebar() {
  const pathname = usePathname();
  const { theme } = useSelector(uiState);

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
        <MyName>Mukesh Sharma</MyName>
        <MyDesc>MERN STACK DEVELOPER</MyDesc>
      </div>
      <div className="d-flex align-items-center justify-content-between w-100">
        <Link className="bi bi-github fs-5 text-secondary" href=""></Link>
        <Link className="bi bi-linkedin fs-5 text-secondary" href=""></Link>
        <Link className="bi bi-twitter-x fs-5 text-secondary" href=""></Link>
        <Link className="bi bi-facebook fs-5 text-secondary" href=""></Link>
        <Link className="bi bi-instagram fs-5 text-secondary" href=""></Link>
        <Link className="bi bi-threads fs-5 text-secondary" href=""></Link>
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
`;

const MyName = styled.p`
  font-size: 16px;
  color: #111111;
`;

const MyDesc = styled.p`
  font-size: 14px;
  color: #666666;
`;

const Route = styled(Link)`
  text-decoration: none;
  color: #666666;
  font-size: 14px;

  &.active {
    background-color: #dedfe1;
    color: #111111;
  }

  &:focus {
    background-color: #dedfe1 !important;
    color: #111111;
  }

  &:hover {
    background-color: rgba(222, 223, 225, 0.7);
    color: #111111;
  }
`;
