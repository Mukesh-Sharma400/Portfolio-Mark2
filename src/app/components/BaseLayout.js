import { Header } from "./Header";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";
import { Resume } from "./Resume";
import { Tooltips } from "./Tooltips";
import styled from "styled-components";

export function BaseLayout({ children }) {
  return (
    <DisplayWrapper>
      <Header />
      <Sidebar />
      <MainContent className="rounded-3 shadow-sm">
        <div className="container">
          {children}
          <Footer />
        </div>
      </MainContent>
      <Resume />
      <Tooltips />
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    height: 100%;
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  width: calc(80% - 20px);
  margin: 20px 20px 20px auto;
  padding: 100px;
  background-color: ${({ theme }) => theme.colors.surface};
  transition: all 0.5s ease-in-out;

  @media (max-width: 1024px) {
    padding: 70px;
    width: calc(77% - 20px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
    margin-top: 100px;
    padding: 50px;
  }

  @media (max-width: 426px) {
    padding: 20px;
  }
`;
