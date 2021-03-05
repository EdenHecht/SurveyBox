import React from "react";
import SiteHeader from "../top-header-features/SiteHeader";
import OptionalPages from "../bottom-page-options/OptionalPages";
import PageViewer from "../main-survey-window/PageViewer";
import "./MainWindow.css";

function MainWindow() {
  return (
    <div className="main-window-container">
      <SiteHeader />
      <PageViewer />
      <OptionalPages />
    </div>
  );
}

export default MainWindow;
