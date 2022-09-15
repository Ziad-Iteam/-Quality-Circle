import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";
import { ReactComponent as ReactLogo } from "../assets/logo.svg";
import { ReactComponent as ReactLogo2 } from "../assets/WhatsAppButtonWhiteSmall.svg";

export const MainNav = () => {
  const { t, i18n } = useTranslation();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      sticky="top"
      className="py-3"
    >
      <Container className="d-flex">
        <Navbar.Brand href="#home">
          <ReactLogo className="mx-3" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-3" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
          <Nav className="text-center d-flex align-items-center justify-content-center">
            <Nav.Link href="#whoWeAre" className="navlink-with-style mx-3">
              {" "}
              {t("MainNav.whoWeAre")}
            </Nav.Link>
            <Nav.Link href="#services" className="navlink-with-style mx-3">
              {" "}
              {t("MainNav.services")}
            </Nav.Link>

            <Nav.Link href="#lang">
              <button
                className="ms-auto button-with-style"
                onClick={() => {
                  i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
                  document.dir = i18n.language === "ar" ? "rtl" : "ltr";
                }}
              >
                {i18n.language === "ar" ? "English" : "العربية"}
              </button>
            </Nav.Link>
            <Nav.Link href="#contactUs" className="mx-3">
              <a href="https://wa.me/201552349490">
                <ReactLogo2 />
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
