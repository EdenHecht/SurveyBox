import React from "react";
import FontSizeComponent from "../sub-components/FontSizeComponent";
import BackgroundComponent from "../sub-components/BackgroundComponent";
import {
  updateSubHeaderColor,
  updateSubHeaderSize,
  updateSubHeaderText,
} from "../../../redux/pageActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

function SubHeaderDesignComponent() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );
  const dispatch = useDispatch();

  return (
    <div className="sub-header-style pad border-bottom">
      <div className="section-title">Sub Header Design</div>
      <FontSizeComponent
        actionFunction={updateSubHeaderSize}
        defualtSize={currPage ? currPage.subHeaderFontSize : 25}
        sizeVarName="subHeaderFontSize"
      />
      <div className="font-color edit-feature bottom-margin color-picker-row">
        <div className="right-margin feature-text">Color</div>
        <BackgroundComponent
          actionFunction={updateSubHeaderColor}
          defualtColor={currPage ? currPage.subHeaderColor : "#000000"}
          colorVarName="subHeaderColor"
        />
      </div>
      <div className="answer-text edit-feature bottom-margin">
        <div className="right-margin feature-text">Text 1</div>
        <input
          type="text"
          name="answer-text"
          className="answer-text-field"
          placeholder={currPage.subHeaderText}
          onChange={(e) =>
            dispatch(updateSubHeaderText(currPage.id, e.target.value))
          }
        />
      </div>
    </div>
  );
}

export default SubHeaderDesignComponent;
