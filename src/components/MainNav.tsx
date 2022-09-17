import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useTranslation } from "react-i18next";
import { ReactComponent as ReactLogo } from "../assets/logo.svg";
import { ReactComponent as ReactLogo2 } from "../assets/WhatsAppButtonWhiteSmall.svg";
import styled from "styled-components";

const NavLink = styled(Nav.Link)`
  border-bottom: solid 5px rgb(161, 161, 161);
  &:hover {
    border-color: #565b6d;
  }
  &:active {
    border-color: #363945;
  }
`;

const StyledButton = styled.button`
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
  border: none;
  border-bottom: solid 5px rgb(161, 161, 161);
  padding: 0.5rem;
`;

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
          <ReactLogo className="mx-3" style={{ height: "32px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mx-3" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
          <Nav className="text-center d-flex align-items-center justify-content-center">
            <NavLink href="#whoWeAre" className="navlink-with-style mx-3">
              {" "}
              {t("MainNav.whoWeAre")}
            </NavLink>
            <NavLink href="#services" className="navlink-with-style mx-3">
              {" "}
              {t("MainNav.services")}
            </NavLink>

            <Nav.Link href="#lang">
              <StyledButton
                className="ms-auto button-with-style"
                onClick={() => {
                  i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar");
                  document.dir = i18n.language === "ar" ? "rtl" : "ltr";
                }}
              >
                {i18n.language === "ar" ? "English" : "العربية"}
              </StyledButton>
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
