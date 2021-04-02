import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./PageViewer.scss";
import IStatementPage from "../../../pageClasses/IStatementPage";

function PageViewer() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const pages = useSelector((state: RootStateOrAny) => state.pages);
  const currPage = currPageIndex !== -1 ? pages[currPageIndex] : null;
  const [viewerStyle, setViewerStyle] = useState({});
  const [buttonStyle, setButtonStyle] = useState({});
  const [headerStyle, setHeaderStyle] = useState({});
  const headerText =
    currPageIndex !== -1 ? pages[currPageIndex].headerText : null;

  useEffect(() => {
    if (currPage === null) return;
    setViewerStyle({
      background: currPage.background,
    });
    setButtonStyle({
      fontSize: currPage.buttonFontSize,
      background: currPage.buttonBackground,
      color: currPage.buttonTextColor,
    });
    setHeaderStyle({
      fontSize: currPage.headerFontSize,
      color: currPage.headerColor,
    });
  }, [pages]);

  return (
    <div className="page-viewer-container">
      <div className="preview-window" style={viewerStyle}>
        {currPage && (
          <div className="content">
            <div className="main-line" style={headerStyle}>
              {headerText !== undefined ? headerText : "nothing"}
            </div>
            <button className="next-button" style={buttonStyle}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PageViewer;
