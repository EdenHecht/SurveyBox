import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import BackgroundComponent from "../sub-components/BackgroundComponent";
import FontSizeComponent from "../sub-components/FontSizeComponent";
import QuestionTextComponent from "./QuestionTextComponent";
import {
  updateAnswersColor,
  updateAnswersSize,
} from "../../../redux/actions/styleActions";

function AnswerDesignComponent() {
  const currentSurvey = useSelector(
    (state: RootStateOrAny) => state.surveys[state.currentSurvey?.index]
  );
  const currPageIndex = currentSurvey.currPageIndex;

  const currPage =
    currPageIndex !== -1 ? currentSurvey.pages[currPageIndex] : null;

  return (
    <div className="answer-style pad border-bottom">
      <div className="section-title">Answer Design</div>
      <FontSizeComponent
        actionFunction={updateAnswersSize}
        defualtSize={currPage ? currPage.answersFontSize : 25}
        sizeVarName="answersFontSize"
      />
      <div className="font-color edit-feature bottom-margin color-picker-row">
        <div className="right-margin feature-text">Color</div>
        <BackgroundComponent
          actionFunction={updateAnswersColor}
          defualtColor={currPage ? currPage.answersColor : "#000000"}
          colorVarName="answersColor"
        />
      </div>
      <QuestionTextComponent questionType={currPage.questionType} />
    </div>
  );
}

export default AnswerDesignComponent;
