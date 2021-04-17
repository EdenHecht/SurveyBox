import { RootStateOrAny, useSelector } from "react-redux";
import BackgroundComponent from "../sub-components/BackgroundComponent";
import FontSizeComponent from "../sub-components/FontSizeComponent";
import {
  updateQuestionColor,
  updateQuestionSize,
  updateQuestionText,
} from "../../../redux/actions/styleActions";
import TextComponent from "../sub-components/TextComponent";

function QuestionDesignComponent() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

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
        <TextComponent
          actionFunction={updateQuestionText}
          textVarName="questionText"
        />
      </div>
    </div>
  );
}

export default QuestionDesignComponent;
