import FontSizeComponent from "../sub-components/FontSizeComponent";
import BackgroundComponent from "../sub-components/BackgroundComponent";
import {
  updateHeaderColor,
  updateHeaderFontSize,
  updateHeaderText,
} from "../../../redux/actions/styleActions";
import { RootStateOrAny, useSelector } from "react-redux";
import TextComponent from "../sub-components/TextComponent";

function HeaderDesignComponent() {
  const currPageIndex = useSelector(
    (state: RootStateOrAny) => state.currPageIndex
  );
  const currPage = useSelector((state: RootStateOrAny) =>
    currPageIndex !== -1 ? state.pages[currPageIndex] : null
  );

  return (
    <div className="header-style pad border-bottom">
      <div className="section-title">Header Design</div>
      <FontSizeComponent
        actionFunction={updateHeaderFontSize}
        defualtSize={currPage ? currPage.headerFontSize : 40}
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
        <TextComponent
          actionFunction={updateHeaderText}
          textVarName="headerText"
        />
      </div>
    </div>
  );
}

export default HeaderDesignComponent;
