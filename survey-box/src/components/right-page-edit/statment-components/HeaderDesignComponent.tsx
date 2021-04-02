import React from "react";
import FontSizeComponent from "../sub-components/FontSizeComponent";
import BackgroundComponent from "../sub-components/BackgroundComponent";
import {
  updateHeaderColor,
  updateHeaderFontSize,
  updateHeaderText,
} from "../../../redux/pageActions";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
function HeaderDesignComponent() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

  const dispatch = useDispatch();

  return (
    <div className="header-style pad border-bottom">
      <div className="section-title">Header Design</div>
      <FontSizeComponent
        actionFunction={updateHeaderFontSize}
        defualtSize={30}
        sizeVarName="headerFontSize"
      />
      <div className="font-color edit-feature bottom-margin color-picker-row">
        <div className="right-margin feature-text">Color</div>
        <BackgroundComponent
          actionFunction={updateHeaderColor}
          defualtColor={currPage ? currPage.headerColor : "#000000"}
          colorVarName="headerColor"
        />
      </div>
      <div className="question-text edit-feature bottom-margin">
        <div className="right-margin feature-text">Text</div>
        <input
          type="text"
          name="question-text"
          onChange={(e) =>
            dispatch(updateHeaderText(currPage.id, e.target.value))
          }
        />
      </div>
    </div>
  );
}

export default HeaderDesignComponent;
