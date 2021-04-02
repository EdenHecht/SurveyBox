import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./PageViewer.css";

function PageViewer() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const pages = useSelector((state: RootStateOrAny) => state.pages);
  const currPage = currPageIndex !== -1 ? pages[currPageIndex] : null;
  const [viewerStyle, setViewerStyle] = useState({});
  const [buttonStyle, setButtonStyle] = useState({});

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
  }, [pages]);

  return (
    <div className="page-viewer-container">
      <div className="preview-window" style={viewerStyle}>
        {currPage && (
          <button className="next-button" style={buttonStyle}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default PageViewer;
