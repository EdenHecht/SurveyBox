import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import "./PageViewer.scss";
import { GOODBYE_PAGE } from "../../../services/pageConstants";
import QuestionTypePreview from "./QuestionTypePreview";

function PageViewer() {
  const currentSurvey = useSelector(
    (state: RootStateOrAny) => state.surveys[state.currentSurvey?.index]
  );

  const currPageIndex = currentSurvey?.currPageIndex;

  const pages = currentSurvey?.pages;
  const currPage =
    currPageIndex && currPageIndex !== -1 ? pages[currPageIndex] : null;
  const [viewerStyle, setViewerStyle] = useState({});
  const [buttonStyle, setButtonStyle] = useState({});
  const [headerStyle, setHeaderStyle] = useState({});
  const [subHeaderStyle, setSubHeaderStyle] = useState({});
  const [questionStyle, setQuestionStyle] = useState({});

  const headerText =
    pages && pages.length !== 0 && currPageIndex !== -1
      ? pages[currPageIndex].headerText
      : null;

  const currPageAnswers =
    pages && pages.length !== 0 && currPageIndex !== -1
      ? currPage.answersText
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
    setQuestionStyle({
      fontSize: currPage.questionFontSize,
      color: currPage.questionColor,
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
              <div>
                <div className="question" style={questionStyle}>
                  {currPage.questionText}
                </div>
                <QuestionTypePreview pageType={currPage.pageType} />
              </div>
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
