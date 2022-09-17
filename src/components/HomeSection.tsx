import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledImage = styled.img`
  width: 100vw;
  height: calc(100vh - 72px);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -10;
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
    <div
      className="position-relative d-flex align-items-center justify-content-center"
      id="home"
    >
      <StyledImage
        src="./Abstract Blue Business Technology Wave Lines Vector Background.jpg"
        alt=""
      />
      <StyledDiv>
        <h1 className="display-1 my-2">{t("HomeSection.h1")}</h1>
        <p>{t("HomeSection.p")}</p>
      </StyledDiv>
    </div>
  );
};
