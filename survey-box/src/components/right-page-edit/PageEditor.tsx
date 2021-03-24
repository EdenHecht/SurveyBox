import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import "./PageEditor.css";
import StatmentStyleOptions from "./StatmentStyleOptions"
import QuestionStyleOptions from "./QuestionStyleOptions"

function PageEditor() {

  const currPageIndex = useSelector((state:RootStateOrAny) => state.currPageIndex)
  const currPage = useSelector((state:RootStateOrAny) => currPageIndex !== -1 ? state.pages[currPageIndex] : null)


  return (
    <div className="page-editor-container">
      <div className="question-name-example border-bottom">Question name</div>
      <div className="page-style pad border-bottom">
        <div className="section-title">Background</div>
        <div className="background edit-feature">
          <div className="sample"></div>
          <div className="hex-number feature-text"> 000000</div>
        </div>
      </div>
      { currPage !== null ? (currPage.questionType !== undefined ? <QuestionStyleOptions/> : <StatmentStyleOptions/>) : null}
      <div className="button-style pad border-bottom">
        <div className="section-title">Button Design</div>
        <div className="font-size edit-feature bottom-margin">
          <div className="right-margin feature-text">Font size</div>
          <div className="font-size-display">15</div>
        </div>
        <div className="font-color edit-feature bottom-margin">
          <div className="right-margin feature-text">Color</div>
          <div className="sample"></div>
          <div className="hex-number feature-text"> 000000</div>
        </div>
        <div className="background-color edit-feature bottom-margin">
          <div className="right-margin feature-text">Background</div>
          <div className="sample"></div>
          <div className="hex-number feature-text"> 000000</div>
        </div>
      </div>
    </div>
  );
}

export default PageEditor;
