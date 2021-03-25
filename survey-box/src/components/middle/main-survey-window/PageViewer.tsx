import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./PageViewer.css";

function PageViewer() {

  const currPageIndex = useSelector((state:RootStateOrAny) => state.currPageIndex)
  const pages =  useSelector((state:RootStateOrAny) => state.pages)
  const currPage = currPageIndex !== -1 ? pages[currPageIndex] : null;
  const [viewerStyle, setViewerStyle] = useState({})
  
  useEffect(() => {
      if (currPage === null) return;
      setViewerStyle({background: currPage.background})
  }, [pages])


  return (
    <div className="page-viewer-container">
      <div className="preview-window" style={viewerStyle}>{currPage && currPage.pageType}</div>
    </div>
  );
}

export default PageViewer;
