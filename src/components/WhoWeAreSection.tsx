import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  color: #363945;
  text-align: center;
`;
export const WhoWeAreSection = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex align-items-center justify-content-center my-5">
    <StyledDiv id="whoWeAre">
      <h1 className="display-1 my-2">{t("WhoWeAreSection.h1")}</h1>
      <p>{t("WhoWeAreSection.p")}</p>
    </StyledDiv></div>
  );
};
