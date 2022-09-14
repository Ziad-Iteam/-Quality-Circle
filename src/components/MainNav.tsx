import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";
import Button from "react-bootstrap/Button";

export const MainNav = () => {
  const { t, i18n } = useTranslation();

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" sticky="top">
      <Container className="d-flex">
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
          <Nav className="text-center d-flex align-items-center justify-content-center">
            <Nav.Link href="#whoWeAre"> {t("MainNav.whoWeAre")}</Nav.Link>
            <Nav.Link href="#services"> {t("MainNav.services")}</Nav.Link>
            <Nav.Link href="#contactUs"> {t("MainNav.contactUs")}</Nav.Link>
            <Nav.Link href="#lang">
              <Button
                className="ms-auto"
                onClick={() => {
                  i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
                  document.dir = i18n.language === "ar" ? "rtl" : "ltr";
                }}
              >
                {i18n.language === "ar" ? "English" : "العربية"}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
