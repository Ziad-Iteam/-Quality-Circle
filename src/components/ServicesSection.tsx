import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import { resources } from "../i18n";
import styled from "styled-components";

const StyledCard = styled(Card)`
  max-width: 1000px;
  border-radius: 0;
  padding: 10px;
  text-align: center;
  margin: 10px;
`;

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div
      style={{
        padding: "100px 0",
        backgroundColor: "#9699a3",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      id="services"
    >
      <h1 className="display-1 text-center ">{t("ServicesSection.h1")}</h1>
      <div className="px-2">
        {i18n.language === "ar" &&
          resources.ar.translation.ServicesSection.services.map((service) => (
            <StyledCard bg="dark" text="light" key={service.subH2}>
              <Card.Header>{service.subH2}</Card.Header>
              <Card.Body>
                <Card.Title>{service.subP}</Card.Title>
                <Card.Text as="div">
                  {service.ser.map((subSer) => {
                    return <div key={subSer}>{subSer}</div>;
                  })}
                </Card.Text>
              </Card.Body>
            </StyledCard>
          ))}
        {i18n.language === "en" &&
          resources.en.translation.ServicesSection.services.map((service) => (
            <StyledCard bg="dark" text="light" key={service.subH2}>
              <Card.Header>
                <h3>{service.subH2}</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title>{service.subP}</Card.Title>
                <Card.Text as="div">
                  {service.ser.map((subSer) => {
                    return <div key={subSer}>{subSer}</div>;
                  })}
                </Card.Text>
              </Card.Body>
            </StyledCard>
          ))}
      </div>
    </div>
  );
};
