import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4">
        <section className="mb-4">
          <p>
          </p>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "black" }}>
        © {new Date().getFullYear()} {t("copyWrite")}
      </div>
    </footer>
  );
};
