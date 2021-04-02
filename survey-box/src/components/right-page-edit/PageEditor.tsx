import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import "./PageEditor.css";
import StatmentStyleOptions from "./statment-components/StatmentStyleOptions";
import QuestionStyleOptions from "./question-components/QuestionStyleOptions";
import ButtonComponent from "./ButtonComponent";
import PageBgComponent from "./PageBgComponent";

function PageEditor() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

  return (
    <div className="page-editor-container">
      <div className="question-name-example border-bottom">Question name</div>
      {currPage !== null && (
        <>
          <PageBgComponent />
          {currPage.questionType !== undefined ? (
            <QuestionStyleOptions />
          ) : (
            <StatmentStyleOptions />
          )}
          <ButtonComponent />
        </>
      )}
    </div>
  );
}

export default PageEditor;
