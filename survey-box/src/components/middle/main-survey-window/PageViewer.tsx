import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./PageViewer.css";

function PageViewer() {

  const currPageIndex = useSelector((state:RootStateOrAny) => state.currPageIndex)
  const currPage = useSelector((state:RootStateOrAny) => currPageIndex !== -1 ? state.pages[currPageIndex] : null)

  return (
    <div className="page-viewer-container">
      <div className="preview-window">{currPage && currPage.pageType}</div>
    </div>
  );
}

export default PageViewer;
