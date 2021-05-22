import styled from "styled-components";

export const ThemeLight = {
  body: "var(--background)",
  textTitle: "var(--text-title)",
  shape:"var(--shape)",
  bgBtnHeader: "var(--blue-light)",
}

export const ThemeDark = {
  body:"var(--darkBackground)",
  textTitle:"var(--darkTitle)",
  shape: "var(--darkShape)",
  bgBtnHeader:"var(--darkBtnHeader)",
}

export const BtnTheme = styled.button`
  position: absolute;
  top: 4vh;
  right: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const BackgroundBody = styled.div`
  background-color: ${({theme})=> theme.body};
  height: 100vh;
`;