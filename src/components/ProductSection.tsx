import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ReactComponent as ChatbotBuilder } from "../assets/Chatbotbuilder.svg";

const StyledCard = styled(Card)`
  max-width: 600px;
  border-radius: 0;
  padding: 10px;
  text-align: center;
  margin: 10px;
`;

export const ProductSection = () => {
  const { t } = useTranslation();

  return (
    <div
      style={{
        padding: "100px 0",
        backgroundColor: "#ffffff",
        color: "#363945",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="products"
    >
      <h1 className="display-1 text-center ">{t("productSection.title")}</h1>
      <StyledCard>
        <Card.Header style={{backgroundColor: "white"}}><ChatbotBuilder style={{maxWidth: "35px",margin: "0px 0 10px 0"}}/><span style={{margin: "10px"}}>{t("productSection.h1")}</span></Card.Header>
        <Card.Body>
          <Card.Title>{t("productSection.h2")}</Card.Title>

          <Card.Text as="div">{t("productSection.p")}</Card.Text>
        </Card.Body>
      </StyledCard>
    </div>
  );
};
