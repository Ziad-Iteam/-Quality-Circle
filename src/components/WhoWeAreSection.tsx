import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 85vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  color: #363945;
  text-align: center;
  padding: 50px 0;
`;
export const WhoWeAreSection = () => {
  const { t } = useTranslation();

  return (
    <div
      className="d-flex align-items-center justify-content-center py-5 my-5"
      id="whoWeAre"
    >
      <StyledDiv>
        <h1 className="display-1 my-5">{t("WhoWeAreSection.h1")}</h1>
        <h5>{t("WhoWeAreSection.p")}</h5>
      </StyledDiv>
    </div>
  );
};
