import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useTranslation } from "react-i18next";

export const ServicesSection = () => {
    const { t } = useTranslation();
  return (
    <>
    <h1 className="display-1 text-center">{t("ServicesSection.h1")}</h1>
    <Row xs={1} md={2} lg={3} className="g-4 m-4">
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
       <Card border="dark">
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    ))}
  </Row></>
  );
};
