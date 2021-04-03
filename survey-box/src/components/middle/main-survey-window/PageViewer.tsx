import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./PageViewer.scss";
import { GOODBYE_PAGE } from "../../../services/pageConstants";

function PageViewer() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const pages = useSelector((state: RootStateOrAny) => state.pages);
  const currPage = currPageIndex !== -1 ? pages[currPageIndex] : null;
  const [viewerStyle, setViewerStyle] = useState({});
  const [buttonStyle, setButtonStyle] = useState({});
  const [headerStyle, setHeaderStyle] = useState({});
  const [subHeaderStyle, setSubHeaderStyle] = useState({});
  const headerText =
    pages.length !== 0 && currPageIndex !== -1
      ? pages[currPageIndex].headerText
      : null;

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
    setSubHeaderStyle({
      fontSize: currPage.subHeaderFontSize,
      color: currPage.subHeaderColor,
    });
  }, [pages, currPage, currPageIndex]);

  return (
    <div className="page-viewer-container">
      <div className="preview-window" style={viewerStyle}>
        {currPage && (
          <div className="content">
            {headerText ? (
              <div>
                <div className="header" style={headerStyle}>
                  {headerText}
                </div>
                <div className="sub-header" style={subHeaderStyle}>
                  {currPage.subHeaderText}
                </div>
              </div>
            ) : (
              "nothing"
            )}
            {currPage.pageType !== GOODBYE_PAGE && (
              <button className="next-button" style={buttonStyle}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PageViewer;
