import styled from "styled-components";

export const Resume = () => {
  return (
    <DisplayWrapper
      href="https://drive.google.com/file/d/1xxDSjREuSkkyRuOtyuRyTUZMYkhbp4RB/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      data-bs-toggle="tooltip"
      data-bs-title="Resume"
      data-bs-custom-class="custom-tooltip"
      aria-label="Resume"
    >
      <i className="bi bi-file-earmark-pdf-fill"></i>
    </DisplayWrapper>
  );
};

const DisplayWrapper = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  font-size: 25px;
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
