import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useTranslation } from "react-i18next";
import { resources } from "../i18n";

export const ServicesSection = () => {
  const { t,i18n } = useTranslation();

  return (
    <div style={{ backgroundColor:"#565b6d" , color:"white"}} className="py-5">
      <h1 className="display-1 text-center ">{t("ServicesSection.h1")}</h1>
      <Row xs={1} md={2} lg={3} className="g-4 m-4">
        {i18n.language === "ar" && resources.ar.translation.ServicesSection.services.map((service) => (
          <Col id={service.subH2}>
            <Card bg="dark" text="light" className="mb-5">
              <Card.Header>{service.subH2}</Card.Header>
              <Card.Body>
                <Card.Title>{service.subP}</Card.Title>
                <Card.Text>
                 <ul>
                  {service.ser.map(subSer => {
                    return (
                      <li key={subSer}>{subSer}</li>
                    )
                  })}
                 </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
          {i18n.language === "en" && resources.en.translation.ServicesSection.services.map((service) => (
          <Col id={service.subH2}>
            <Card bg="dark" text="light" className="mb-5">
              <Card.Header><h3>{service.subH2}</h3></Card.Header>
              <Card.Body>
                <Card.Title>{service.subP}</Card.Title>
                <Card.Text>
                 <ul>
                  {service.ser.map(subSer => {
                    return (
                      <li key={subSer}>{subSer}</li>
                    )
                  })}
                 </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
