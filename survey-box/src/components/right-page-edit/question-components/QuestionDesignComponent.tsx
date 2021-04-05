import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import BackgroundComponent from "../sub-components/BackgroundComponent";
import FontSizeComponent from "../sub-components/FontSizeComponent";
import {
  updateQuestionColor,
  updateQuestionSize,
  updateQuestionText,
} from "../../../redux/pageActions";

function QuestionDesignComponent() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );
  const dispatch = useDispatch();

  return (
    <div className="question-style pad border-bottom">
      <div className="section-title">Question Design</div>
      <FontSizeComponent
        actionFunction={updateQuestionSize}
        defualtSize={currPage ? currPage.questionFontSize : 40}
        sizeVarName="questionFontSize"
      />
      <div className="font-color edit-feature bottom-margin color-picker-row">
        <div className="right-margin feature-text">Color</div>
        <BackgroundComponent
          actionFunction={updateQuestionColor}
          defualtColor={currPage ? currPage.questionColor : "#000000"}
          colorVarName="questionColor"
        />
      </div>
      <div className="question-text edit-feature bottom-margin">
        <div className="right-margin feature-text">Text</div>
        <input
          type="text"
          name="question-text"
          placeholder={currPage.questionText}
          onChange={(e) =>
            dispatch(updateQuestionText(currPage.id, e.target.value))
          }
        />
      </div>
    </div>
  );
}

export default QuestionDesignComponent;
