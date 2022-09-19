import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ParallaxDiv = styled.div`
  background-image: url("./wallhaven-1jkl2w.jpg");
  min-height: calc(100vh - 72px);
  width: 100vw;
  z-index: -10;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const StyledDiv = styled.div`
  width: 70vw;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  color: white;
  text-align: center;
  text-shadow: 1px 1px #000000;
`;
export const HomeSection = () => {
  const { t } = useTranslation();

  return (
    <ParallaxDiv
      className="position-relative d-flex align-items-center justify-content-center"
      id="home"
    >
      <StyledDiv>
        <h1 className="display-1 my-2">{t("HomeSection.h1")}</h1>
        <p>{t("HomeSection.p")}</p>
      </StyledDiv>
    </ParallaxDiv>
  );
};
