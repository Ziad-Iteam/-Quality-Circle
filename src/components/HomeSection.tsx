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
`;
const StyledDiv = styled.div`
  width: 50vw;
  height: calc(100vh - 80px);
  position: absolute;
  left: 25vw;
  right: 25vw;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  color: white;
  text-align: center;
`;
export const HomeSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="position-relative">
      <StyledImage src="./wallhaven-1jkl2w.jpg" alt="" />
      <StyledDiv>
        <h1 className="display-1 my-5">{t("HomeSection.h1")}</h1>
        <p>
        {t("HomeSection.p")}
        </p>
      </StyledDiv>
    </div>
  );
};
